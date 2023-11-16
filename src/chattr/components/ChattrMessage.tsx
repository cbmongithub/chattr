import React from 'react'
import { chattr } from '..'

interface ChattrMessageProps {
  text: string
  role: 'user' | 'assistant'
  key?: string | number
  chattrName?: string | number
}

interface ChattrNameProps {
  chattrName?: string | number
  userName?: string | number
}

export default function ChattrMessage({
  message: { text, role, key },
  chattrName = 'Chattr',
  userName = 'You',
}: {
  message: ChattrMessageProps
  chattrName: ChattrNameProps['chattrName']
  userName: ChattrNameProps['userName']
}) {
  return role === 'user' ? (
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
  ) : (
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
