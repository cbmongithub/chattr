import React from 'react'
import chattr from '../chattr'
import type { ChattrScrollFeedProps } from '../types'

import ChattrMessages from './chattr-messages'
import ChattrLoader from './chattr-loader'

const ChattrScrollFeedComponent = React.memo(
  React.forwardRef(function ChattrScrollFeed(
    { messages, loading, chattrName, userName }: ChattrScrollFeedProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.JSX.Element {
    if (process.env.NODE_ENV === 'development') {
      console.log(
        '%c ChattrScrollFeed Rendered!',
        'background: #9B59B6; color: #fff'
      )
    }
    return (
      <chattr.div
        forwardedRef={ref as React.MutableRefObject<HTMLDivElement>}
        className='max-h-[275px] flex-auto overflow-y-scroll px-3'>
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
