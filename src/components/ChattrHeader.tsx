import React from 'react'
import { chattr } from '../chattr'

import ChattrCloseIcon from './ChattrCloseIcon'
import ChattrLogo from './ChattrLogo'

type ChattrHeader = {
  toggle: () => void
  className?: string
  chattrName?: string | number
}

export default function ChattrHeader({
  toggle,
  className = 'z-40 flex h-14 w-full items-center justify-between rounded-t-2xl border-b border-zinc-300 bg-zinc-200 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-950',
  chattrName,
}: ChattrHeader) {
  return (
    <chattr.div className={className}>
      <ChattrLogo chattrName={chattrName} />
      <ChattrCloseIcon toggle={toggle} />
    </chattr.div>
  )
}
