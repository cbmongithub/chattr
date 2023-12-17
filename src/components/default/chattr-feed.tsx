import React from 'react'

import { useScroll } from '../../hooks'

import ChattrMessages from './chattr-messages'
import ChattrLoader from './chattr-loader'

import { ChattrMessage } from '../../types'

function ChattrFeed({
  messages,
  userName,
  chattrBotName,
  loading,
}: {
  messages: ChattrMessage[]
  userName?: string
  chattrBotName?: string
  loading?: boolean
}) {
  const ref = useScroll(messages)

  return (
    <div
      ref={ref}
      className='max-h-[275px] flex-auto overflow-y-scroll px-3'>
      <div className='mb-3'></div>
      {messages.map((message, i) => (
        <ChattrMessages
          key={`${message.role}_message_${i}`}
          message={message}
          userName={userName}
          chattrBotName={chattrBotName}
        />
      ))}
      {loading && <ChattrLoader chattrBotName={chattrBotName} />}
    </div>
  )
}

export default React.memo(ChattrFeed)
