import React, { useState, MouseEvent, KeyboardEvent, FormEvent } from 'react'

import { useChatbot } from '../hooks'
import { ChatIcon, ChatContainer, ChatHeader, ChatFeed, ChatInput } from '.'

type ChatMessageType = {
  text: string
  role: string
  key?: string | number
}

type SendMessageType = {
  event: MouseEvent | KeyboardEvent | FormEvent
}

export default function ChatBot() {
  const { isOpen, toggle } = useChatbot()
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      text: 'Hey! Thanks for visiting. I am Christians personal Chatbot, you can ask me anything!',
      role: 'assistant',
    },
  ])

  async function sendMessage(event: SendMessageType['event']) {
    event.preventDefault()
    setMessage('')
    setLoading(true)
    setMessages((prev) => [
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
      setMessages((prev) => [
        ...prev,
        {
          text: answer.data.choices[0].message.content,
          role: 'assistant',
        },
      ])
    } else {
      setLoading(false)
      setMessages((prev) => [
        ...prev,
        {
          text: 'Something went wrong! Try again later.',
          role: 'assistant',
        },
      ])
    }
  }

  return isOpen ? (
    <ChatContainer>
      <ChatHeader toggle={toggle} />
      <ChatFeed messages={messages} loading={loading} />
      <ChatInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        loading={loading}
      />
    </ChatContainer>
  ) : (
    <ChatIcon toggle={toggle} />
  )
}
