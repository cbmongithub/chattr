import React from 'react';
type ChatMessage = {
    text: string;
    role: 'assistant' | 'user';
    key?: string | number;
};
declare const ChatMessageComponent: React.NamedExoticComponent<{
    message: ChatMessage;
}>;
export default ChatMessageComponent;
