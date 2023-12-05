import React from 'react'

type ChatInput = {
  setMessage: React.Dispatch<React.SetStateAction<string>>
  sendMessage: (
    event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
  ) => void
  message: string
  loading: boolean
  formClassName?: string
  inputClassName?: string
  buttonClassName?: string
}

/**
 * Chat Input - The component that allows the user to insert and submit data.
 *
 * @param setMessage - The function that updates the message.
 *
 * @param sendMessage - The function that sends the message.
 *
 * @param message - The users message.
 *
 * @param loading - The state in between sent messages.
 *
 * @param formClassName - Use a custom CSS class for the form.
 *
 * @default'z-40 flex h-16 items-center justify-between rounded-b-2xl border-t border-zinc-300 bg-zinc-200 px-2 py-2.5 dark:border-zinc-800 dark:bg-zinc-950'
 *
 * @param inputClassName - Use a custom CSS class for the form input.
 *
 * @default'h-10 min-w-0 flex-auto appearance-none rounded-xl border border-zinc-900/10 bg-white px-3 py-2 text-zinc-700 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-300 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:text-zinc-400 dark:focus:ring-teal-400/10 sm:text-sm'
 *
 * @param buttonClassName - Use a custom CSS class for the submit button.
 *
 * @default'ml-2 h-10 flex-none items-center justify-center gap-2 rounded-xl bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
 *
 * @returns The rendered Chat Input component.
 */

export default function ChatInputComponent({
  setMessage,
  sendMessage,
  message,
  loading,
  formClassName = 'z-40 flex h-16 items-center justify-between rounded-b-2xl border-t border-zinc-300 bg-zinc-200 px-2 py-2.5 dark:border-zinc-800 dark:bg-zinc-950',
  inputClassName = 'h-10 min-w-0 flex-auto appearance-none rounded-xl border border-zinc-900/10 bg-white px-3 py-2 text-zinc-700 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-300 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:text-zinc-400 dark:focus:ring-teal-400/10 sm:text-sm',
  buttonClassName = 'ml-2 h-10 flex-none items-center justify-center gap-2 rounded-xl bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
}: ChatInput) {
  return (
    <form
      onSubmit={event => sendMessage(event)}
      className={formClassName}>
      <input
        className={inputClassName}
        type='text'
        required
        placeholder='Ask a question...'
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <button
        type='submit'
        disabled={loading}
        className={buttonClassName}>
        Send
      </button>
    </form>
  )
}
