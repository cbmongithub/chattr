import React from 'react'

import ChattrAssistantMessage from './chattr-assistant-message'
import ChattrUserMessage from './chattr-user-message'

type ChattrMessage = {
  role: 'user' | 'assistant'
  key?: string
  content?: string
}

function ChattrMessages({
  message: { content, role, key },
  userName,
  chattrBotName,
}: {
  message: ChattrMessage
  userName?: string
  chattrBotName?: string
}) {
  return role === 'user' ? (
    <ChattrUserMessage
      key={key}
      content={content}
      userName={userName}
    />
  ) : (
    <ChattrAssistantMessage
      key={key}
      content={content}
      chattrBotName={chattrBotName}
    />
  )
}

export default React.memo(ChattrMessages)
