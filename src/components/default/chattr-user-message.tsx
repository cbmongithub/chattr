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
      <p className='text-chattrText dark:text-chattrTextDark flex items-center pr-2 text-sm font-semibold tracking-wide'>
        {userName}
      </p>
      <div className='rounded-chattrRoundedLarge bg-chattrBackgroundMuted dark:bg-chattrGrayDark px-3 py-2'>
        <p className='text-chattrText dark:text-chattrTextDark max-w-[160px] break-words text-sm font-light'>
          {content}
        </p>
      </div>
    </div>
  )
}
