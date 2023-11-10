import React from 'react'

import {
  ChatContainer,
  ChatHeader,
  ChatFeed,
  ChatInput,
  ChatIcon,
} from '../components'

import { useChatbot } from '../hooks'

type ChatMessage = {
  text: string
  role: 'assistant' | 'user'
  key?: string | number
}

type SendMessage = {
  event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
}

export default function ReactJsChatBot() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { isOpen, toggle } = useChatbot()
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      text: 'Hey! Thanks for visiting. I am Christians personal Chatbot, you can ask me anything!',
      role: 'assistant',
    },
  ])

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  async function sendMessage(event: SendMessage['event']) {
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
    <ChatContainer>
      <ChatHeader toggle={toggle} />
      <ChatFeed
        ref={ref}
        messages={messages}
        loading={loading}
      />
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
