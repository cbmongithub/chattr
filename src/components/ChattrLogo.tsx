import React from 'react'
import { chattr } from '../chattr'

type ChattrLogo = {
  className?: string
  chattrName?: string | number
}

export default function ChattrLogo({
  className = 'ml-1 flex flex-[0.5] justify-start',
  chattrName = 'Chattrbot',
}: ChattrLogo) {
  return (
    <chattr.div className={className}>
      <chattr.p className='text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
        {chattrName}
      </chattr.p>
    </chattr.div>
  )
}
