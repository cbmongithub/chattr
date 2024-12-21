import { useScroll } from '../../hooks'

import { ChattrLoader } from './chattr-loader'
import { ChattrMessages } from './chattr-messages'

export const ChattrFeed = React.memo(({
  messages,
  userName,
  chattrBotName,
  loading,
}: {
  messages: Chattr.ChattrMessageProps[]
  userName?: string
  chattrBotName?: string
  loading?: boolean
}) => {
  const ref = useScroll(messages)

  return (
    <div
      ref={ref}
      className='max-h-[275px] flex-auto overflow-y-scroll px-3'>
      <div className='mb-3' />
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
})
