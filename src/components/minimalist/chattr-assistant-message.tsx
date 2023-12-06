import React from 'react'

export default function ChattrAssistantMessage({
  key,
  content,
}: {
  key?: string
  content?: string
}) {
  return (
    <div
      key={key}
      className='flex justify-end'>
      <div className='dark:bg-chattrGrayDark rounded-chattrRoundedLarge bg-chattrBackgroundMuted px-3 py-2 shadow'>
        <p className='text-chattrText dark:text-chattrTextDark max-w-[160px] break-words text-sm font-light'>
          {content}
        </p>
      </div>
    </div>
  )
}
