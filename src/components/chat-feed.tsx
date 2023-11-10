import React from 'react'

import ChatLoader from './chat-loader';
import ChatMessage from './chat-message';

type ChatFeed = {
  text: string
  role: 'assistant' | 'user'
  key?: string | number
}

interface ChatFeedComponentProps {
  messages: ChatFeed[];
  loading: boolean;
}

const ChatFeedComponent = React.memo(
  React.forwardRef(function ChatFeedComponent(
    { messages, loading }: ChatFeedComponentProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
  return (
    <div ref={ref as React.MutableRefObject<HTMLDivElement>} className='max-h-[275px] flex-auto overflow-y-scroll px-3'>
      <div className='mb-3'></div>
      {messages.map((message, i) => (
        <ChatMessage key={i} message={message} />
      ))}
      {loading && <ChatLoader />}
    </div>
  )
}))

export default ChatFeedComponent
