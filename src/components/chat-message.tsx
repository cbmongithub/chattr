import React from 'react'

type ChatMessage = {
  text: string
  role: 'assistant' | 'user'
  key?: string | number
}

const ChatMessageComponent = React.memo(function ChatMessage({
  message: { text, role, key },
}: {
  message: ChatMessage
}) {
  console.log('%c Chat Message Rendered!', 'background: #222; color: #ffffff')
  return role === 'user' ? (
    <div key={key} className='mb-3 flex justify-end'>
      <p className='flex items-center pr-2 text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
        You
      </p>
      <div className='rounded-2xl bg-zinc-100 px-3 py-2 dark:bg-zinc-800'>
        <p className='max-w-[160px] break-words text-sm font-light text-zinc-800 dark:text-zinc-300'>
          {text}
        </p>
      </div>
    </div>
  ) : (
    <div key={key} className='mb-3 flex justify-start'>
      <div className='rounded-2xl border border-teal-600 px-3 py-2 dark:border-teal-500'>
        <p className='max-w-[160px] break-words text-sm font-light text-teal-600 dark:text-teal-500'>
          {text}
        </p>
      </div>
      <p className='flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100'>
        Chatbot
      </p>
    </div>
  )
})

export default ChatMessageComponent
