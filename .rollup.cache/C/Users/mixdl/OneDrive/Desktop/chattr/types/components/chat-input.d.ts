import React from 'react';
type ChatInput = {
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    sendMessage: (event: React.MouseEvent | React.KeyboardEvent | React.FormEvent) => void;
    message: string;
    loading: boolean;
};
export default function ChatInputComponent({ setMessage, sendMessage, message, loading, }: ChatInput): React.JSX.Element;
export {};
