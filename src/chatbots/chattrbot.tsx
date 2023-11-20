import React from 'react'

import {
  ChattrContainer,
  ChattrHeader,
  ChattrScrollFeed,
  ChattrForm,
  ChattrOpenIcon,
} from '../components_v2'

import { useChatbot } from '../hooks'

import type { ChattrBot, ChattrMessagesProps } from '../types'

/**
 * ChattrBot - A pre made chatbot solution with light/dark mode tailwind css classes.
 *
 * @param welcomeText - Set a welcome message to greet the user upon opening the chat window.
 *
 * @default'Hey there! My name is Chattr, your personal assistant! Let me know if you have any questions.'
 *
 * @param endPoint - Your chatGPT api endpoint. @see https://www.npmjs.com/package/chattr#endpoints for details.
 *
 * @default'/api/chatGpt'
 *
 * @param errorMessage - The error message you want to display in the event of an error.
 *
 * @default'Whoops! Looks like something went wrong. Please try again later.'
 *
 * @param chattrName - The name of the chattrbot.
 *
 * @default'Chattr'
 *
 * @param userName - The name of the user.
 *
 * @default'You'
 *
 * @returns The entire ChattrBot component.
 */

export default function ChattrBot({
  welcomeText = 'Hey there! My name is Chattr, your personal assistant! Let me know if you have any questions.',
  endPoint = '/api/chatGpt',
  errorMessage = 'Whoops! Looks like something went wrong. Please try again later.',
  chattrName = 'Chattr',
  userName = 'You',
}: ChattrBot): React.JSX.Element {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { isOpen, toggle } = useChatbot()
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState<ChattrMessagesProps[]>([
    {
      text: welcomeText,
      role: 'assistant',
    },
  ])

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
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
    <ChattrContainer>
      <ChattrHeader
        chattrName={chattrName}
        toggle={toggle}
      />
      <ChattrScrollFeed
        messages={messages}
        loading={loading}
        chattrName={chattrName}
        userName={userName}
        ref={scrollRef}
      />
      <ChattrForm
        setMessage={setMessage}
        sendMessage={sendMessage}
        message={message}
        loading={loading}
      />
    </ChattrContainer>
  ) : (
    <ChattrOpenIcon toggle={toggle} />
  )
}
