import React from 'react'

export default function Header({
  chattrName,
  role,
  toggle,
}: {
  chattrName: string
  role: string
  toggle: () => void
}) {
  return (
    <div className='flex flex-row items-center space-y-1.5 p-4'>
      <div className='flex items-center space-x-4'>
        <span className='relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
          <img
            alt='Chatbot Image'
            width={28}
            height={28}
            className='h-9 w-9 rounded-full'
            src='/bot.webp'
          />
        </span>
        <div>
          <p className='text-sm font-medium leading-none'>{chattrName}</p>
          <p className='text-sm font-light text-zinc-100/60'>{role}</p>
        </div>
      </div>
      <button
        onClick={toggle}
        className='ml-auto inline-flex h-5 w-5 items-start justify-end text-sm font-medium hover:text-zinc-100/90'>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          version='1.1'
          viewBox='0 0 21 21'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z'></path>
        </svg>
      </button>
    </div>
  )
}
