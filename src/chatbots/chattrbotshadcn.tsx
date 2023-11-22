import React from 'react'

import { ChattrMessagesProps } from '../types'

import { useChatbot } from '../hooks'

import {
  ChattrContainer,
  ChattrHeader,
  ChattrFeed,
  ChattrForm,
  ChattrIcon,
} from '../components_v3'

export default function ChatBot() {
  const { isOpen, toggle } = useChatbot()
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState<ChattrMessagesProps[]>([
    {
      text: "Hey! Thanks for visiting. I'm Chattrbot, you can ask me anything!",
      role: 'assistant',
    },
  ])

  async function sendMessage(
    event: React.KeyboardEvent | React.MouseEvent | React.FormEvent
  ) {
    event.preventDefault()
    setMessage('')
    setLoading(true)
    setMessages(prev => [
      ...prev,
      {
        text: message,
        role: 'user',
      },
    ])

    const response = await fetch('/api/chatGpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message,
      }),
    })

    let answer = await response.json()

    if (answer.data.choices) {
      setLoading(false)
      setMessages(prev => [
        ...prev,
        {
          text: answer.data.choices[0].message.content,
          role: 'assistant',
        },
      ])
    } else {
      setLoading(false)
      setMessages(prev => [
        ...prev,
        {
          text: 'Something went wrong! Try again later.',
          role: 'assistant',
        },
      ])
    }
  }

  return isOpen ? (
    <ChattrContainer>
      <ChattrHeader
        chattrName='Chattrbot'
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
