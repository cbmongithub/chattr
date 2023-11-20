import React from 'react'
import chattr from '../chattr'
import type { ChattrFormProps } from '../types'

export default function ChattrForm({
  setMessage,
  sendMessage,
  message,
  loading,
}: ChattrFormProps): React.JSX.Element {
  if (process.env.NODE_ENV === 'development') {
    console.log('%c ChattrForm Rendered!', 'background: #DC7633; color: #fff')
  }
  return (
    <chattr.form
      className='z-40 flex h-16 items-center justify-between rounded-b-2xl border-t border-zinc-300 bg-zinc-200 px-2 py-2.5 dark:border-zinc-800 dark:bg-zinc-950'
      onSubmit={event => sendMessage(event)}>
      <chattr.input
        className='h-10 min-w-0 flex-auto appearance-none rounded-xl border border-zinc-900/10 bg-white px-3 py-2 text-zinc-700 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-300 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:text-zinc-400 dark:focus:ring-teal-400/10 sm:text-sm'
        placeholder='Ask a question...'
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <chattr.button
        className='ml-2 h-10 flex-none items-center justify-center gap-2 rounded-xl bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
        type='submit'
        disabled={loading}>
        Send
      </chattr.button>
    </chattr.form>
  )
}
