import React from 'react'

type ChattrForm = {
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
}: ChattrForm) {
  return (
    <form
      onSubmit={event => sendMessage(event)}
      className='dark:bg-chattrPitchBlack rounded-b-chattrRoundedLarge border-chattrGray bg-chattrBackgroundMuted dark:border-chattrTextDark/10 z-40 flex h-16 items-center justify-between border-t px-2 py-2.5'>
      <input
        className='rounded-chattrRoundedMedium border-chattrGray bg-chattrWhite text-chattrText placeholder:text-chattrSecondary/70 focus:border-chattrPrimary dark:border-chattrTextDark/10 dark:bg-chattrBlack dark:text-chattrTextDark dark:placeholder:text-chattrTextDark/50 dark:focus:border-chattrPrimaryDark h-10 min-w-0 flex-auto appearance-none border px-3 py-2 font-light focus:outline-none sm:text-sm'
        type='text'
        required
        placeholder='Ask a question...'
        autoComplete='off'
        autoCorrect='off'
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <button
        type='submit'
        disabled={loading}
        className='rounded-chattrRoundedMedium bg-chattrPrimary text-chattrWhite hover:bg-chattrPrimaryDark disabled:bg-chattrPrimary/70 dark:bg-chattrPrimaryDark dark:hover:bg-chattrPrimaryDark/90 ml-2 h-10 flex-none items-center justify-center gap-2 px-3 py-2 text-sm font-semibold outline-offset-2 disabled:cursor-not-allowed'>
        Send
      </button>
    </form>
  )
}
