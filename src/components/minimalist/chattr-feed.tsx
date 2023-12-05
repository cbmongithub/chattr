import React from 'react'

import ChattrMessages from './chattr-messages'
import ChattrLoader from './chattr-loader'

type ChattrMessage = {
  role: 'user' | 'assistant'
  key?: string
  content?: string
  ui: string
  data?: {
    temperature: string
    celcius: string
    location: string
    description: string
    humidity: string
    wind: string
    clouds: string
    state: string
    url: string
  }
}

function ChattrFeed({
  messages,
  loading,
}: {
  messages: ChattrMessage[]
  loading: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  return (
    <div
      ref={ref}
      className='max-h-[245px] min-h-[245px] flex-auto overflow-y-scroll'>
      {messages.map((message, i) => (
        <ChattrMessages
          key={`${message.role}_message_${i}`}
          message={message}
        />
      ))}
      {loading && <ChattrLoader />}
    </div>
  )
}

export default React.memo(ChattrFeed)
