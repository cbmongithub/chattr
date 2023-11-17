import React from 'react'
import { chattr } from '..'

type ChattrForm = {
  className?: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  sendMessage: (
    event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
  ) => void
  message: string
  loading: boolean
}

export default function ChattrForm({
  className = 'fixed bottom-4 right-4 z-20 flex h-96 max-h-96 w-72 flex-col justify-between rounded-2xl border border-zinc-200 bg-white shadow-md shadow-zinc-800/5 dark:border-zinc-800 dark:bg-zinc-900',
  setMessage,
  sendMessage,
  message,
  loading,
}: ChattrForm) {
  return (
    <chattr.form
      className={className}
      onSubmit={event => sendMessage(event)}>
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
