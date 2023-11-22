import React from 'react'

import { ChattrMessagesProps } from '../types'

function ChattrMessages({
  message: { text, role, key },
}: {
  message: ChattrMessagesProps
}) {
  console.log('%c Chat Message Rendered!', 'background: #222; color: #ffffff')
  return (
    <div className='px-4 py-2'>
      {role === 'assistant' ? (
        <div
          key={key}
          className='flex justify-end'>
          <div className='rounded-2xl bg-zinc-100/10 px-3 py-2 dark:bg-zinc-100/10'>
            <p className='max-w-[160px] break-words text-sm font-light text-zinc-800 dark:text-zinc-100'>
              {text}
            </p>
          </div>
        </div>
      ) : (
        <div
          key={key}
          className='flex justify-start'>
          <div className='rounded-2xl bg-violet-600 px-3 py-2 dark:bg-violet-600'>
            <p className='max-w-[160px] break-words text-sm font-light text-zinc-800 dark:text-zinc-100'>
              {text}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(ChattrMessages)
