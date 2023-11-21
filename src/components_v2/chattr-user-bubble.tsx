import React from 'react'
import chattr from '../chattr'
import type { ChattrUserBubbleProps } from '../types'

export default function ChattrUserBubble({
  key,
  userName,
  text,
}: ChattrUserBubbleProps): React.JSX.Element {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '%c ChattrUserBubble Rendered!',
      'background: #E74C3C; color: #fff'
    )
  }
  return (
    <chattr.div
      key={key}
      className='mb-3 flex justify-end'>
      <chattr.p className='flex items-center pr-2 text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
        {userName}
      </chattr.p>
      <chattr.div className='rounded-2xl bg-zinc-100 px-3 py-2 dark:bg-zinc-800'>
        <chattr.p className='max-w-[160px] break-words text-sm font-light text-zinc-800 dark:text-zinc-300'>
          {text}
        </chattr.p>
      </chattr.div>
    </chattr.div>
  )
}