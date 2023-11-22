import React from 'react'

import { ChattrMessagesProps } from '../types'
import ChattrMessages from './chattr-messages'
import ChattrLoader from './chattr-loader'

function ChattrFeed({
  messages,
  loading,
}: {
  messages: ChattrMessagesProps[]
  loading: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  console.log('%c Chat Feed Rendered!', 'background: #cf19ab; color: #ffffff')

  return (
    <div
      ref={ref}
      className='max-h-[245px] min-h-[245px] flex-auto overflow-y-scroll'>
      {messages.map((message, i) => (
        <ChattrMessages
          key={i}
          message={message}
        />
      ))}
      {loading && <ChattrLoader />}
    </div>
  )
}

export default React.memo(ChattrFeed)
