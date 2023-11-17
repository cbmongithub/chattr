import React from 'react'
import chattr from '../chattr'

import ChattrLoader from './ChattrLoader'
import ChattrMessages from './ChattrMessages'

type ChattrScrollFeedMessages = {
  text: string
  role: 'assistant' | 'user'
  key?: string | number
}

interface ChattrScrollFeedComponentProps {
  className?: string
  messages: ChattrScrollFeedMessages[]
  loading: boolean
  chattrName?: string | number
  userName?: string | number
}

const ChattrScrollFeedComponent = React.memo(
  React.forwardRef(function ChattrScrollFeed(
    {
      className = 'max-h-[275px] flex-auto overflow-y-scroll px-3',
      messages,
      loading,
      chattrName,
      userName,
    }: ChattrScrollFeedComponentProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <chattr.div
        forwardedRef={ref as React.MutableRefObject<HTMLDivElement>}
        className={className}>
        <chattr.div className='mb-3'></chattr.div>
        {messages.map((message, i) => (
          <ChattrMessages
            key={`${message.role}_message_${i.toString()}`}
            message={message}
            userName={userName}
            chattrName={chattrName}
          />
        ))}
        {loading && <ChattrLoader chattrName={chattrName} />}
      </chattr.div>
    )
  })
)

export default ChattrScrollFeedComponent
