import React from 'react'

import { useChattr } from '../../hooks'

import ChattrContainer from './chattr-container'
import ChattrFeed from './chattr-feed'
import ChattrForm from './chattr-form'
import ChattrHeader from './chattr-header'
import ChattrIcon from './chattr-icon'

type ChattrMessages = {
  role: 'user' | 'assistant'
  key?: string
  content?: string
}

/**
 * Chattrbot - A pre made chatbot solution with light/dark mode tailwind css classes.
 *
 * @returns The entire Default Chattrbot component.
 */

export default function Chattrbot() {
  const { isOpen, toggle } = useChattr()
  const chattrBotName = 'Bot'
  const userName = 'User'
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState<ChattrMessages[]>([
    {
      content: `Hey! Thanks for visiting. I'm ${chattrBotName}, you can ask me anything!`,
      role: 'assistant',
    },
  ])

  async function sendMessage(
    event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
  ) {
    event.preventDefault()
    setMessage('')
    setLoading(true)
    setMessages(prev => [
      ...prev,
      {
        content: message,
        role: 'user',
      },
    ])

    const response = await fetch('/api/chat-gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message,
        chattrBotName: chattrBotName,
        chattrBotHistory: messages,
      }),
    })

    let result = await response.json()

    if (result.ok) {
      if (result.content.text) {
        setLoading(false)
        setMessages(prev => [
          ...prev,
          {
            content: result.content.text,
            role: 'assistant',
          },
        ])
      } else {
        setLoading(false)
        setMessages(prev => [
          ...prev,
          {
            content: result.error,
            role: 'assistant',
          },
        ])
      }
    }
  }

  return isOpen ? (
    <ChattrContainer>
      <ChattrHeader
        toggle={toggle}
        chattrBotName={chattrBotName}
      />
      <ChattrFeed
        messages={messages}
        userName={userName}
        chattrBotName={chattrBotName}
        loading={loading}
      />
      <ChattrForm
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        loading={loading}
      />
    </ChattrContainer>
  ) : (
    <ChattrIcon toggle={toggle} />
  )
}
