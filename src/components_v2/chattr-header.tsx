import React from 'react'
import chattr from '../chattr'
import type { ChattrHeaderProps } from '../types'

import ChattrLogo from './chattr-logo'
import ChattrCloseIcon from './chattr-close-icon'

function ChattrHeader({
  toggle,
  chattrName,
}: ChattrHeaderProps): React.JSX.Element {
  if (process.env.NODE_ENV === 'development') {
    console.log('%c ChattrHeader Rendered!', 'background: #27AE60; color: #fff')
  }
  return (
    <chattr.div className='z-40 flex h-14 w-full items-center justify-between rounded-t-2xl border-b border-zinc-300 bg-zinc-200 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-950'>
      <ChattrLogo chattrName={chattrName} />
      <ChattrCloseIcon toggle={toggle} />
    </chattr.div>
  )
}

export default React.memo(ChattrHeader)
