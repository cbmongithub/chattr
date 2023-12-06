import React from 'react'

export default function ChattrUserMessage({
  key,
  content,
}: {
  key?: string
  content?: string
}) {
  return (
    <div
      key={key}
      className='flex justify-start'>
      <div className='rounded-chattrRoundedLarge bg-chattrPrimary dark:bg-chattrPrimaryDark px-3 py-2 shadow'>
        <p className='text-chattrTextDark max-w-[160px] break-words text-sm font-light'>
          {content}
        </p>
      </div>
    </div>
  )
}
