import React from 'react'
import chattr from '../chattr'

type ChattrCloseIcon = {
  children?: React.SVGProps<SVGSVGElement>
  toggle: () => void
}

export default function ChattrCloseIcon({ children, toggle }: ChattrCloseIcon) {
  console.log(
    '%c ChattrCloseIcon Rendered!',
    'background: #DA4AB7; color: #fff'
  )
  return (
    <chattr.div className='mr-1 flex flex-[0.5] justify-end'>
      <chattr.a
        className='cursor-pointer text-zinc-800 hover:opacity-80 dark:text-zinc-100 hover:dark:opacity-80'
        onClick={toggle}>
        {children ? (
          children
        ) : (
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
        )}
      </chattr.a>
    </chattr.div>
  )
}
