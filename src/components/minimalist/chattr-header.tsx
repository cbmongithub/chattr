import React from 'react'

export default function ChattrHeader({
  chattrBotName,
  role,
  toggle,
}: {
  chattrBotName: string
  role: string
  toggle: () => void
}) {
  return (
    <div className='flex flex-row items-center space-y-1.5 p-4'>
      <div className='flex items-center space-x-4'>
        <span className='border-chattrGray dark:border-chattrGrayDark relative flex h-10 w-10 flex-none items-center justify-center rounded-full border dark:border'>
          <img
            alt='Chatbot Image'
            width={28}
            height={28}
            className='h-9 w-9 rounded-full'
            src='/bot.webp'
          />
        </span>
        <div>
          <p className='text-chattrText dark:text-chattrTextDark text-sm font-medium leading-none'>
            {chattrBotName}
          </p>
          <p className='text-chattrSecondary dark:text-chattrSecondaryDark text-sm font-light'>
            {role}
          </p>
        </div>
      </div>
      <button
        onClick={toggle}
        className='ml-auto inline-flex h-5 w-5 items-start justify-end text-sm font-medium hover:opacity-60'>
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