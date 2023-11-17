import React from 'react'
import chattr from '../chattr'

type ChattrAssistantBubble = {
  key?: string | number
  chattrName: string | number
  text: string
}

export default function ChattrAssistantBubble({
  key,
  chattrName,
  text,
}: ChattrAssistantBubble) {
  return (
    <chattr.div
      key={key}
      className='mb-3 flex justify-start'>
      <chattr.div className='rounded-2xl border border-teal-600 px-3 py-2 dark:border-teal-500'>
        <chattr.p className='max-w-[160px] break-words text-sm font-light text-teal-600 dark:text-teal-500'>
          {text}
        </chattr.p>
      </chattr.div>
      <chattr.p className='flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100'>
        {chattrName}
      </chattr.p>
    </chattr.div>
  )
}
