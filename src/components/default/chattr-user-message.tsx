import React from 'react'

type ChattrUserMessage = {
  key?: string
  content?: string
  userName?: string
}

export default function ChattrUserMessage({
  key,
  content,
  userName = 'You',
}: ChattrUserMessage) {
  return (
    <div
      key={key}
      className='mb-3 flex justify-end'>
      <p className='flex items-center pr-2 text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
        {userName}
      </p>
      <div className='rounded-2xl bg-zinc-100 px-3 py-2 dark:bg-zinc-800'>
        <p className='max-w-[160px] break-words text-sm font-light text-zinc-800 dark:text-zinc-300'>
          {content}
        </p>
      </div>
    </div>
  )
}
