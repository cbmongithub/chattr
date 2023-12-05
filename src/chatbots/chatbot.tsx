import React from 'react'

import {
  ChatContainer,
  ChatHeader,
  ChatFeed,
  ChatInput,
  ChatIcon,
} from '../components/default'

import { useChattr } from '../hooks'

type ChatBot = {
  initialText: string
  endPoint: RequestInfo | URL
  errorMessage: string
}

type ChatMessage = {
  text: ChatBot['initialText'] | ChatBot['errorMessage'] | string
  role: 'assistant' | 'user'
  key?: string | number
}

/**
 * ChatBot - A pre made chatbot solution with light/dark mode tailwind css classes.
 *
 * @param initialText - Set an initial chat message to greet the user.
 *
 * @param endPoint - Your chatGPT api endpoint. @see https://www.npmjs.com/package/chattr#endpoints for details.
 *
 * @param errorMessage - The error message you want to display in the event of an error.
 *
 * @returns The rendered Chat Container component.
 */

export default function ChatBot({
  initialText,
  endPoint,
  errorMessage,
}: ChatBot) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { isOpen, toggle } = useChattr()
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      text: initialText,
      role: 'assistant',
    },
  ])

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  async function sendMessage(
    event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
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

    const response = await fetch(endPoint, {
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
          text: errorMessage,
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
        setMessage={setMessage}
        sendMessage={sendMessage}
        message={message}
        loading={loading}
      />
    </ChatContainer>
  ) : (
    <ChatIcon toggle={toggle} />
  )
}
