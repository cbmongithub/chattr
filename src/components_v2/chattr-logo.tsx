import React from 'react'
import chattr from '../chattr'
import type { ChattrLogoProps } from '../types'

export default function ChattrLogo({
  children,
  chattrName = 'Chattrbot',
}: ChattrLogoProps): React.JSX.Element {
  if (process.env.NODE_ENV === 'development') {
    console.log('%c ChattrLogo Rendered!', 'background: #16A085; color: #fff')
  }
  return (
    <chattr.div className='ml-1 flex flex-[0.5] justify-start'>
      {children ? (
        children
      ) : (
        <chattr.p className='text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
          {chattrName}
        </chattr.p>
      )}
    </chattr.div>
  )
}
