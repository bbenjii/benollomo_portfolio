'use client';

import { createContext, useContext, useMemo, useRef, useCallback } from 'react';
import ChatbotWidget from './chatbotWidget';

const ChatbotContext = createContext({
    openChatbot: () => {},
    sendChatbotMessage: async () => {},
});

export function ChatbotProvider({ children }) {
    const widgetRef = useRef(null);

    const openChatbot = useCallback(() => {
        widgetRef.current?.openWidget?.();
    }, []);

    const sendChatbotMessage = useCallback(async (message) => {
        if (!message) {
            widgetRef.current?.openWidget?.();
            return;
        }
        return widgetRef.current?.sendMessage?.(message);
    }, []);

    const contextValue = useMemo(() => ({
        openChatbot,
        sendChatbotMessage,
    }), [openChatbot, sendChatbotMessage]);

    return (
        <ChatbotContext.Provider value={contextValue}>
            {children}
            <div className="z-50">
                <ChatbotWidget ref={widgetRef} />
            </div>
        </ChatbotContext.Provider>
    );
}

export function useChatbot() {
    return useContext(ChatbotContext);
}

export default ChatbotProvider;
