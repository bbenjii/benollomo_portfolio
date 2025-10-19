'use client';

import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { BotMessageSquare, ArrowUp, X, LoaderCircle, Sparkles } from 'lucide-react';
import Markdown from 'react-markdown';

/**
 * Polished floating chat widget
 * - Glassmorphism panel, soft shadows, subtle borders
 * - Sticky header, scrollable body, elevated input bar
 * - Auto-resize textarea, Cmd/Ctrl+Enter to send, Esc to close
 * - Better message bubbles + markdown rendering
 */
export default function ChatbotWidget() {
    const [isOpened, setIsOpened] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageSending, setMessageSending] = useState(false);
    const [typedMessage, setTypedMessage] = useState('');
    const [chatId, setChatId] = useState(null);

    const lastMessageRef = useRef(null);
    const textAreaRef = useRef(null);

    // Scroll to last message
    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [messages, messageSending]);

    // Auto-resize textarea
    const autoresize = useCallback(() => {
        const ta = textAreaRef.current;
        if (!ta) return;
        ta.style.height = '0px';
        ta.style.height = Math.min(180, ta.scrollHeight) + 'px';
    }, []);

    useEffect(() => {
        autoresize();
    }, [typedMessage, autoresize]);

    const openAndGreet = async () => {
        if (messages.length === 0) {
            await handleSendMessage(null, '', true);
        }
        setIsOpened(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setTypedMessage('');
            setIsOpened(false);
            return;
        }
        const metaSend = (e.metaKey || e.ctrlKey) && e.key === 'Enter';
        const plainEnter = e.key === 'Enter' && !e.shiftKey;
        if (metaSend || plainEnter) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    async function handleSendMessage(e = null, new_message = typedMessage, first_message = false) {
        if (messageSending) return;

        if (!first_message && new_message.trim() === '') return;

        setMessageSending(true);

        let updated_messages = [];
        setTypedMessage('');

        try {
            if (first_message) {
                const preferred = typeof window !== 'undefined' ? localStorage.getItem('preferred_language') : 'en';
                const intro_text = preferred === 'en' ? 'write your introduction message!' : "écris ton message d'introduction!";
                updated_messages = [{ role: 'user', text: intro_text }];

                const response = await sendMessage(updated_messages);
                setMessages([{ role: 'model', text: response }]);
            } else {
                updated_messages = [...messages, { role: 'user', text: new_message }];
                setMessages(updated_messages);

                const response = await sendMessage(updated_messages);
                setMessages((prev) => [...prev, { role: 'model', text: response }]);
            }
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { role: 'model', text: 'Sorry, something went wrong. Please try again in a moment.' },
            ]);
            // eslint-disable-next-line no-console
            console.error(err);
        } finally {
            setMessageSending(false);
        }
    }

    async function sendMessage(message_history = []) {
        const contents = [
            message_history.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
        ];

        const formData = new FormData();
        formData.append('messages', JSON.stringify(contents));
        formData.append('chatId', chatId);

        const url = '/api/chatbot';

        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        setChatId(data.chatId);
        return data.message;
    }

    return (
        <div className={"group fixed bottom-0 right-0 m-2"}>
            {/* Launcher Button */}
            {!isOpened && (
                <button
                    onClick={openAndGreet}
                    className={"bg-primary-1 cursor-pointer p-3 border-white/60 border rounded-full animate-bounce lgd:animate-none lg:hover:animate-bounce"}
                    aria-label="Open chat"
                >
                    <BotMessageSquare className="size-6 text-white/90 group-hover:scale-105 transition" />
                    <span className="pointer-events-none absolute -top-2 -right-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/70 border border-white/20">
            <Sparkles className="size-3" /> AI
          </span>
                </button>
            )}

            {/* Chat Panel */}
            {isOpened && (
                <div className="flex h-[520px] w-[360px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[rgba(10,15,25,0.7)] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    {/* Header */}
                    <div className="relative flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                        <div className="flex items-center gap-2">
                            <div className="grid place-items-center h-7 w-7 rounded-lg bg-white/10 border border-white/15">
                                <BotMessageSquare className="size-4 text-white/90" />
                            </div>
                            <div className="leading-tight">
                                <div className="text-sm font-semibold text-white">BenAI</div>
                                {/*<div className="text-[11px] text-white/60">Always-on portfolio assistant</div>*/}
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpened(false)}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 border border-white/15 hover:bg-white/15 transition"
                            aria-label="Close chat"
                        >
                            <X className="size-4 text-white/80" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 no-scrollbar">
                        {messages.length === 0 && (
                            <div className="mt-8 text-center text-xs text-white/60">
                                Say hi! Ask about my projects, experience, or tech stack.
                            </div>
                        )}
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex ${m.role === 'model' ? 'justify-start' : 'justify-end'}`}
                                ref={i === messages.length - 1 ? lastMessageRef : null}
                            >
                                <MessageBubble role={m.role}>
                                    <Markdown>{m.text}</Markdown>
                                </MessageBubble>
                            </div>
                        ))}
                        {messageSending && (
                            <div className="flex justify-start">
                                <MessageBubble role="model">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block h-2 w-2 rounded-full bg-white/70 animate-bounce [animation-delay:-0.2s]"></span>
                                        <span className="inline-block h-2 w-2 rounded-full bg-white/70 animate-bounce"></span>
                                        <span className="inline-block h-2 w-2 rounded-full bg-white/70 animate-bounce [animation-delay:0.2s]"></span>
                                    </div>
                                </MessageBubble>
                            </div>
                        )}
                    </div>

                    {/* Composer */}
                    <div className="border-t border-white/10 bg-white/5 px-3 py-2">
                        <div className="flex items-end gap-2">
              <textarea
                  ref={textAreaRef}
                  value={typedMessage}
                  onChange={(e) => setTypedMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message…"
                  rows={1}
                  className="min-h-[40px] max-h-[180px] w-full resize-none rounded-xl bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-inset ring-white/15 focus:ring-white/25"
              />
                            <button
                                onClick={() => handleSendMessage()}
                                disabled={messageSending}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[13px] font-semibold text-black/90 hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition"
                                aria-label="Send"
                            >
                                {messageSending ? (
                                    <LoaderCircle className="size-4 animate-spin" />
                                ) : (
                                    <ArrowUp className="size-4" />
                                )}
                            </button>
                        </div>
                        <div className="mt-1 text-[10px] text-white/40">Enter to send • Shift+Enter for newline • Esc to close</div>
                    </div>
                </div>
            )}
        </div>
    );
}

function MessageBubble({ role, children }) {
    const isModel = role === 'model';
    return (
        <div
            className={
                'max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ' +
                (isModel
                    ? 'bg-white/8 border border-white/15 rounded-bl-md text-white/90'
                    : 'bg-[#8FD3FF]/15 border border-[#8FD3FF]/25 rounded-br-md text-white')
            }
        >
            {children}
        </div>
    );
}
