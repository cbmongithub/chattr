import React from 'react'

function ChattrHeader({
  toggle,
  chattrBotName = 'Chattrbot',
}: {
  toggle: () => void
  chattrBotName?: string
}) {
  return (
    <div className='z-40 flex h-14 w-full items-center justify-between rounded-t-2xl border-b border-zinc-300 bg-zinc-200 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-950'>
      <div className='ml-1 flex flex-[0.5] justify-start'>
        <h3 className='text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
          {chattrBotName}
        </h3>
      </div>
      <div className='mr-1 flex flex-[0.5] justify-end'>
        <a
          onClick={toggle}
          className='cursor-pointer text-zinc-800 hover:opacity-80 dark:text-zinc-100 hover:dark:opacity-80'>
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
        </a>
      </div>
    </div>
  )
}

export default React.memo(ChattrHeader)
