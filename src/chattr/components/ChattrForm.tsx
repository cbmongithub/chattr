import React from 'react'
import { chattr } from '..'

interface ChattrFormProps {
  setMessage: React.Dispatch<React.SetStateAction<string>>
  sendMessage: (
    event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
  ) => void
  message: string
  loading: boolean
}

export default function ChattrForm({
  setMessage,
  sendMessage,
  message,
  loading,
}: ChattrFormProps) {
  return (
    <chattr.form onSubmit={event => sendMessage(event)}>
      <chattr.input
        placeholder='Ask a question...'
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <chattr.button
        type='submit'
        disabled={loading}>
        Send
      </chattr.button>
    </chattr.form>
  )
}
