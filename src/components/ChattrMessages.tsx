import React from 'react'

import ChattrAssistantBubble from './ChattrAssistantBubble'
import ChattrUserBubble from './ChattrUserBubble'

interface ChattrMessagesProps {
  text: string
  role: 'user' | 'assistant'
  key?: string | number
  chattrName?: string | number
  userName?: string | number
}

function ChattrMessages({
  message: { text, role, key },
  chattrName = 'Chattrbot',
  userName = 'You',
}: {
  message: ChattrMessagesProps
  chattrName: ChattrMessagesProps['chattrName']
  userName: ChattrMessagesProps['userName']
}) {
  console.log('%c ChattrMessages Rendered!', 'background: #3498DB; color: #fff')
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

export default React.memo(ChattrMessages)
