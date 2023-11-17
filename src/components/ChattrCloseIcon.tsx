import React from 'react'
import { chattr } from '../chattr'

type ChattrCloseIcon = {
  className?: string
  toggle: () => void
}

export default function ChattrCloseIcon({
  className = 'mr-1 flex flex-[0.5] justify-end',
  toggle,
}: ChattrCloseIcon) {
  return (
    <chattr.div className={className}>
      <chattr.a onClick={toggle}>
        <chattr.svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          version='1.1'
          viewBox='0 0 21 21'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <chattr.path d='M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z'></chattr.path>
        </chattr.svg>
      </chattr.a>
    </chattr.div>
  )
}
