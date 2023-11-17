import React from 'react'

import ChattrAssistantBubble from './ChattrAssistantBubble'
import ChattrUserBubble from './ChattrUserBubble'

type ChattrMessages = {
  text: string
  role: 'user' | 'assistant'
  key?: string | number
  chattrName?: string | number
  userName?: string | number
}

export default function ChattrMessages({
  message: { text, role, key },
  chattrName = 'Chattrbot',
  userName = 'You',
}: {
  message: ChattrMessages
  chattrName: ChattrMessages['chattrName']
  userName: ChattrMessages['userName']
}) {
  return role === 'user' ? (
    <ChattrUserBubble
      key={key}
      text={text}
      userName={userName}
    />
  ) : (
    <ChattrAssistantBubble
      key={key}
      text={text}
      chattrName={chattrName}
    />
  )
}
