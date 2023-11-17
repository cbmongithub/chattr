import React from 'react'
import chattr from '../chattr'

interface ChatIcon {
  toggle: () => void
  className?: string
}

export default function ChattrOpenIcon({
  toggle,
  className = 'fixed bottom-4 right-4 z-20 flex items-center justify-center md:flex-1',
}: ChatIcon) {
  console.log('%c ChattrOpenIcon Rendered!', 'background: #222; color: #fff')
  return (
    <chattr.div className={className}>
      <chattr.button
        onClick={toggle}
        className='group rounded-full bg-white p-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
        type='button'
        role='button'
        aria-label='Toggle Chatbot'>
        <chattr.svg
          className='h-7 w-7 stroke-white text-zinc-900 dark:text-teal-500'
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 16 16'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <chattr.path d='M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'></chattr.path>
          <chattr.path d='m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z'></chattr.path>
        </chattr.svg>
      </chattr.button>
    </chattr.div>
  )
}
