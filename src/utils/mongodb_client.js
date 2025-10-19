import {MongoClient, ObjectId} from 'mongodb';

async function mongoClient(){
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // keep it in your .env file
    const options = {};

    let client;
    let mongoClient;
    if (!process.env.MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    if (!global._mongoClient) {
        client = new MongoClient(uri)
        global._mongoClient = await client.connect()
    }

    mongoClient = await global._mongoClient
    mongoClient = new MongoClient(uri)

    return mongoClient
}

const DB_NAME = process.env.MONGODB_DB || "app";
const COLLECTION = "chats";

/**
 * Ensure indexes once (idempotent).
 */
async function ensureIndexes(col) {
    await col.createIndex({ updatedAt: -1 });
    await col.createIndex({ "messages.role": 1, "messages.ts": -1 });
}

/**
 * Get collection with indexes ensured.
 */
async function getChatsCollection() {
    const client = await mongoClient();
    const db = client.db(DB_NAME);
    const col = db.collection(COLLECTION);
    await ensureIndexes(col);
    return col;
}

/**
 * Start a new chat document when a conversation begins.
 * @param {{title?: string, meta?: object}} opts
 * @returns {Promise<{chatId: string}>}
 */
export async function createChat(opts = {}) {
    const col = await getChatsCollection();
    const now = new Date();
    const doc = {
        title: opts.title ?? "New Chat",
        createdAt: now,
        updatedAt: now,
        messageCount: 0,
        messages: [],            // array of { role: "user"|"assistant"|"system", content: string, ts: Date, meta?: any }
        meta: opts.meta ?? {},   // freeform (e.g., userId, sessionId, source, etc.)
    };
    const { insertedId } = await col.insertOne(doc);
    return { chatId: insertedId.toString() };
}

/**
 * Replace all messages in a chat document.
 * This completely overwrites the existing messages array.
 * @param {string|ObjectId} chatId
 * @param {Array<{role:"user"|"assistant"|"system", content:string, meta?:object, ts?:Date}>} messages
 * @returns {Promise<void>}
 */
export async function replaceMessages(chatId, messages) {
    if (!Array.isArray(messages)) {
        throw new Error("replaceMessages: messages must be an array");
    }

    const col = await getChatsCollection();
    const _id = typeof chatId === "string" ? new ObjectId(chatId) : chatId;
    const now = new Date();

    // Normalize messages
    // const normalized = messages.map(m => ({
    //     role: m.role,
    //     content: m.content,
    //     ts: m.ts ?? now,
    //     ...(m.meta ? { meta: m.meta } : {}),
    // }));
    const normalized = normalizeMessages(messages)

    console.log("THE CHAT ID is", _id)
    console.log("type of", typeof chatId)

    const res = await col.updateOne(
        { _id: new ObjectId(chatId) },
        {
            $set: {
                messages: normalized,
                messageCount: normalized.length,
                updatedAt: now,
            },
        }
    );

    if (res.matchedCount === 0) {
        throw new Error(`replaceMessages: chat not found: ${chatId}`);
    }
}


/**
 * Append one or more messages to an existing chat.
 * Usage: await appendMessages(chatId, [{role:"user", content:"Hi"}, {role:"assistant", content:"Hello!"}])
 * @param {string|ObjectId} chatId
 * @param {Array<{role:"user"|"assistant"|"system", content:string, meta?:object, ts?:Date}>} messages
 * @returns {Promise<void>}
 */
export async function appendMessages(chatId, messages) {
    if (!Array.isArray(messages) || messages.length === 0) {
        throw new Error("appendMessages: messages must be a non-empty array");
    }
    const col = await getChatsCollection();
    const _id = typeof chatId === "string" ? new ObjectId(chatId) : chatId;
    const now = new Date();

    // Normalize messages (add timestamps)
    const normalized = messages.map(m => ({
        role: m.role,
        content: m.content,
        ts: m.ts ?? now,
        ...(m.meta ? { meta: m.meta } : {}),
    }));
    const res = await col.updateOne(
        { _id },
        {
            $push: { messages: { $each: normalized } },
            $set: { updatedAt: now },
            $inc: { messageCount: normalized.length },
        }
    );

    if (res.matchedCount === 0) {
        throw new Error(`appendMessages: chat not found: ${chatId}`);
    }
}

/**
 * Normalize Gemini-style messages into your MongoDB format.
 * Converts:
 *   { role: "user", parts: [{ text: "hello" }] }
 * to:
 *   { role: "user", content: "hello", ts: Date }
 *
 * @param {Array<{role:string, parts:Array<{text:string}>, meta?:object, ts?:Date}>} messages
 * @returns {Array<{role:string, content:string, ts:Date, meta?:object}>}
 */
export function normalizeMessages(messages) {
    if (!Array.isArray(messages)) {
        throw new Error("normalizeMessages: input must be an array");
    }

    const now = new Date();

    return messages.map(m => {
        // Extract role, text, and optional metadata
        const role = m.role === "model" ? "assistant" : m.role; // optional alias
        const content = (m.parts || [])
            .map(p => (typeof p.text === "string" ? p.text.trim() : ""))
            .filter(Boolean)
            .join(" ");

        return {
            role,
            content,
            ts: m.ts ?? now,
            ...(m.meta ? { meta: m.meta } : {}),
        };
    });
}


/**
 * Convenience helper to store a single message (user OR assistant).
 * @param {string|ObjectId} chatId
 * @param {{role:"user"|"assistant"|"system", content:string, meta?:object}} message
 */
export async function storeMessage(chatId, message) {
    return appendMessages(chatId, [message]);
}

/**
 * Convenience helper for a single Q/A turn, atomically.
 * @param {string|ObjectId} chatId
 * @param {string} userText
 * @param {string} assistantText
 * @param {{userMeta?:object, assistantMeta?:object}} [opts]
 */
export async function storeTurn(chatId, userText, assistantText, opts = {}) {
    const msgs = [
        { role: "user", content: userText, meta: opts.userMeta },
        { role: "assistant", content: assistantText, meta: opts.assistantMeta },
    ];
    return appendMessages(chatId, msgs);
}



