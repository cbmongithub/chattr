import React from 'react'

import { ChatLoader, ChatMessage } from './index'

type ChatFeed = {
  text: string
  role: 'assistant' | 'user'
  key?: string | number
}

const ChatFeedComponent = React.memo(function ChatFeedComponent({
  ref,
  messages,
  loading,
}: {
  ref: React.RefObject<HTMLDivElement>
  messages: ChatFeed[]
  loading: boolean
}) {
  console.log('%c Chat Feed Rendered!', 'background: #cf19ab; color: #ffffff')

  return (
    <div ref={ref} className='max-h-[275px] flex-auto overflow-y-scroll px-3'>
      <div className='mb-3'></div>
      {messages.map((message, i) => (
        <ChatMessage key={i} message={message} />
      ))}
      {loading && <ChatLoader />}
    </div>
  )
})

export default ChatFeedComponent
