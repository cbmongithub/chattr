import React, { useEffect, useRef, memo } from 'react'

import { ChatLoader, ChatMessage } from '../index'

type ChatMessageType = {
  text: string
  role: string
  key?: string | number
}

function ChatFeed({
  messages,
  loading,
}: {
  messages: ChatMessageType[]
  loading: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

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
}

export default memo(ChatFeed)
