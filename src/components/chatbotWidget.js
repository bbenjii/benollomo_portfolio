'use clients';

import {BotMessageSquare, ArrowUp, X, LoaderCircle} from 'lucide-react'
import {useEffect, useRef, useState} from "react";
import {info_translations, headers_translations, chatbot_system_instructions} from "@/utils/profile_info";
import Markdown from "react-markdown";

const GEMINI_API_KEY = "AIzaSyDcq9gfLMQpeODbWDA2jMtJAexzNBf952A"
export default function ChatbotWidget() {
    const [isOpened, setIsOpened] = useState(false);
    const [messages, setMessages] = useState([
        ]
    );
    const [messageSending, setMessageSending] = useState(false);
    const [typedMessage, setTypedMessage] = useState("");
    const lastMessageRef = useRef(null);

    useEffect(() => {
        handleSendMessage(null, "", true)
    }, [])

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }

        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }

    }, [messages])

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }

        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }

    }, [messageSending])


    async function handleSendMessage(e = null, new_message = typedMessage, first_message = false) {
        if (e !== null) {
            if (e.key !== "Enter") return;
            else if(e.key === "Escape") {
                setTypedMessage("");
                setIsOpened(false);
                return
            }
        }


        if(messageSending) return;
        setMessageSending(true);
        let updated_messages = []
        setTypedMessage("")

        if(first_message){
            updated_messages.push({role: "user", text: "write your introduction message!"})

            const response = await sendMessage(updated_messages)
            updated_messages = [{role: "model", text: response}]
            setMessages(updated_messages)

        }
        else{
            updated_messages.push({role: "user", text: new_message})
            setMessages(updated_messages)

            const response = await sendMessage(updated_messages)

            updated_messages.push({role: "model", text: response})
            setMessages(updated_messages)
        }

        setMessageSending(false)




    }



    async function sendMessage(message_history = []) {


        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
        const method = "POST";
        const headers = {'Content-Type': 'application/json'};
        const contents = [message_history.map((m) => {
            return {role: m.role, parts: [{text: m.text}]}
        })];
       const generation_config = {temperature: 1, maxOutputTokens: 100, topP: 0.85, topK: 40,};
        const system_instructions = {parts:[{text: chatbot_system_instructions}]};
        const body = JSON.stringify({
            system_instruction: system_instructions,
            generationConfig: generation_config,
            contents: contents});
        const res = await fetch(url, {method, headers, body});
        const data = await res.json();

        //
        return data.candidates[0].content.parts[0].text
    }

    return (
        <div className={"group fixed bottom-0 right-0 m-2"}>
            {
                !isOpened &&
                <div
                    className={"bg-primary-1 cursor-pointer p-3 border-white/60 border rounded-full animate-bounce lgd:animate-none lg:hover:animate-bounce"}
                    onClick={() => setIsOpened(true)}>
                    <BotMessageSquare className={"size-6 z-50 "}/>
                </div>
            }
            {
                isOpened &&
                <div className={"flex flex-col h-100 w-80 bg-dark-0 shadow rounded-lg"}>
                    <div className={"flex justify-between p-2 items-center bg-dark-700 h-15  border-b-0 rounded-t-lg "}>
                        <span className={"text-white font-bold"}>Ben-Bot</span>
                        <X className={"cursor-pointer"} onClick={()=> setIsOpened(false)}/>
                    </div>
                    <div className={"flex flex-col p-4 items-center h-70 overflow-y-scroll no-scrollbar"}>
                        {
                            messages.map((message, index) => {
                                return (
                                    <div className={"w-full"}
                                         key={index}
                                         ref={index === messages.length - 1 ? lastMessageRef : null}>
                                        <MessageBox message={message.text} role={message.role}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={"flex p-2 items-center bg-dark-700 h-15  m-2 border-b-0 rounded-lg "}>
                        <input placeholder={"enter message"}
                               className={"p-2  focus:border-0 focus:outline-0 rounded-lg w-full h-10"}
                               value={typedMessage} onChange={(e) => setTypedMessage(e.target.value)}
                               onKeyDown={handleSendMessage}
                        />
                        <div className={"cursor-pointer border bg-white rounded-xl p-1"} >
                            {
                                messageSending === true?  <LoaderCircle className={"animate-spin"} color={"#1F1F1F"}/> : <ArrowUp className={""} color={"#1F1F1F"} onClick={() => handleSendMessage()}/>
                            }


                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

const MessageBox = ({message, role}) => {

    return (
        <div className={`flex ${role === "model" ? "" : "justify-end"}`}>
            <div className={`flex my-2 text-sm rounded-2xl p-3 text-white ${role === "model" ? "bg-dark-0 border border-white/60 w-full rounded-bl-none" : "bg-primary-4/20 w-fit rounded-br-none"}`}>
                <span className={""}><Markdown>{message}</Markdown></span>
            </div>
        </div>

    )
}