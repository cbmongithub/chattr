import React from 'react'
import { chattr } from '..'

type ChattrLoader = {
  className?: string
  chattrName?: string | number
}

export default function ChattrLoader({
  className = 'mb-3 flex justify-start',
  chattrName = 'Chattrbot',
}: ChattrLoader) {
  return (
    <chattr.div className={className}>
      <chattr.div className='rounded-[0.85rem] border border-teal-600 px-0.5 py-1.5 dark:border-teal-500'>
        <chattr.div className='flex items-center justify-center px-3 py-2'>
          <chattr.div className='dot animate-loader'></chattr.div>
          <chattr.div className='dot animation-delay-200 animate-loader'></chattr.div>
          <chattr.div className='dot animation-delay-400 animate-loader'></chattr.div>
        </chattr.div>
      </chattr.div>
      <chattr.p className='flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100'>
        {chattrName}
      </chattr.p>
    </chattr.div>
  )
}
