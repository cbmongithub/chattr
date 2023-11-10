import React from 'react';
type ChatFeed = {
    text: string;
    role: 'assistant' | 'user';
    key?: string | number;
};
interface ChatFeedComponentProps {
    messages: ChatFeed[];
    loading: boolean;
}
declare const ChatFeedComponent: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChatFeedComponentProps & React.RefAttributes<HTMLDivElement>>>;
export default ChatFeedComponent;
