import React from 'react'
import chattr from '../chattr'

import ChattrCloseIcon from './ChattrCloseIcon'
import ChattrLogo from './ChattrLogo'

interface ChattrHeaderProps {
  toggle: () => void
  className?: string
  chattrName?: string | number
}

function ChattrHeader({
  toggle,
  className = 'z-40 flex h-14 w-full items-center justify-between rounded-t-2xl border-b border-zinc-300 bg-zinc-200 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-950',
  chattrName,
}: ChattrHeaderProps) {
  console.log('%c ChattrHeader Rendered!', 'background: #27AE60; color: #fff')
  return (
    <chattr.div className={className}>
      <ChattrLogo chattrName={chattrName} />
      <ChattrCloseIcon toggle={toggle} />
    </chattr.div>
  )
}

export default React.memo(ChattrHeader)
