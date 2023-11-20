import React from 'react'
import type { ChattrMessagesProps } from '../types'

import ChattrUserBubble from './chattr-user-bubble'
import ChattrAssistantBubble from './chattr-assistant-bubble'

function ChattrMessages({
  message: { text, role, key },
  chattrName = 'Chattrbot',
  userName = 'You',
}: {
  message: ChattrMessagesProps
  chattrName: ChattrMessagesProps['chattrName']
  userName: ChattrMessagesProps['userName']
}): React.JSX.Element {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '%c ChattrMessages Rendered!',
      'background: #3498DB; color: #fff'
    )
  }
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
