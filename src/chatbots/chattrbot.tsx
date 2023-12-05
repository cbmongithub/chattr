import React from 'react'

import { useChattr } from '../hooks'

import {
  ChattrContainer,
  ChattrFeed,
  ChattrForm,
  ChattrHeader,
  ChattrIcon,
} from '../components/minimalist'

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

/**
 * Chattrbot - A pre made chatbot solution with light/dark mode tailwind css classes.
 *
 * @returns The entire Chattrbot component.
 */

export default function Chattrbot() {
  const { isOpen, toggle } = useChattr()
  const chattrBotName = 'Chattrbot'
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState<ChattrMessage[]>([
    {
      ui: 'default',
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
        ui: 'default',
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
            ui: 'default',
            content: result.content.text,
            role: 'assistant',
          },
        ])
      } else if (result.content.function_response) {
        setLoading(false)
        setMessages(prev => [
          ...prev,
          {
            ui: result.ui,
            data: result.content.function_response,
            role: 'assistant',
          },
        ])
      }
    } else {
      setLoading(false)
      setMessages(prev => [
        ...prev,
        {
          ui: 'default',
          content: result.error,
          role: 'assistant',
        },
      ])
    }
  }

  return isOpen ? (
    <ChattrContainer>
      <ChattrHeader
        chattrBotName={chattrBotName}
        role='Assistant'
        toggle={toggle}
      />
      <ChattrFeed
        messages={messages}
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
