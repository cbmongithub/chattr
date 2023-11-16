import React from 'react'
import { chattr } from '..'

export default function ChattrLogo({
  chattrName = 'Chattr',
}: {
  chattrName?: string | number
}) {
  return (
    <chattr.div className='ml-1 flex flex-[0.5] justify-start'>
      <chattr.p className='text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
        {chattrName}
      </chattr.p>
    </chattr.div>
  )
}
