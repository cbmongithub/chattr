import { ChattrBotMessage } from './chattr-bot-message'
import { ChattrUserMessage } from './chattr-user-message'

export const ChattrMessages = React.memo(({
  message: { content, role, key },
  userName,
  chattrBotName,
}: {
  message: Chattr.ChattrMessageProps
  userName?: string
  chattrBotName?: string
}) => {
  return role === 'user' ? (
    <ChattrUserMessage
      key={key}
      content={content}
      userName={userName}
    />
  ) : (
    <ChattrBotMessage
      key={key}
      content={content}
      chattrBotName={chattrBotName}
    />
  )
})