import {chatbot_system_instructions} from "@/utils/profile_info";
import { GoogleGenAI } from "@google/genai";
import {appendMessages, createChat, replaceMessages} from "@/utils/mongodb_client";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

function extractText(resp) {
    if (!resp?.candidates?.length) return "";
    return resp.candidates
        .flatMap(c => (c.content?.parts ?? []))
        .map(p => p.text ?? "")
        .join("");
}

export async function POST(request) {

    const formData = await request.formData();
    console.log(formData)

    try{
        const method = "POST";
        const headers = {'Content-Type': 'application/json'};
        const contents = formData.get("messages");
        let chatId = formData.get("chatId");
        console.log("content:", contents)
        console.log("size:", JSON.parse(contents)[0].length)
        console.log("chatId:", chatId)
        // console.log("type is", typeof contents)
        //
        const generation_config = {temperature: 1, maxOutputTokens: 100, topP: 0.85, topK: 40,};
        const system_instructions = {parts:[{text: chatbot_system_instructions}]};
        const body = JSON.stringify({
            system_instruction: system_instructions,
            generationConfig: generation_config,
            contents: JSON.parse(contents)});
        
        // const response = await ai.models.generateContent({
        //     model: "gemini-2.5-flash",
        //     contents: contents,
        //     config:{
        //         systemInstruction: system_instructions,
        //         temperature: 1,
        //         maxOutputTokens: 100,
        //         topP: 0.85,
        //         topK: 40,
        //     }
        // });

        const res = await fetch(url, {method, headers, body});
        const data = await res.json();

        console.log(data)
        const text = data.candidates[0].content.parts[0].text
        
        // console.log(response)
        
        if(text){
            let messages = JSON.parse(contents)[0]
            if(messages.length > 1){
                // new chat started
                if(messages.length === 2){
                    const inserted_id = await createChat({ title: "Portfolio Chat" });
                    chatId = inserted_id.chatId
                    console.log("new chat created")

                }
                if(chatId !== null){
                    console.log("chatId:", chatId)
                    await replaceMessages(chatId, messages);
                }
            }
        }

        // console.log("result:", response.text())

        // const text = typeof response.text === "function" ? await response.text : extractText(response);
        // let text = response.candidates[0].content.parts[0].text
        let result = {"message": text, "chatId": chatId};
        return new Response(JSON.stringify(result), {
            status: 201,
            headers: {'Content-Type': 'application/json'}
        });
    }
    catch (err) {
        console.error(err);
        return({ message: "Error sending message" });
    }
}

