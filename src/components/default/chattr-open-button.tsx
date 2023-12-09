import React from 'react'

import ChattrOpenIcon from './chattr-open-icon'

export default function ChattrOpenButton({ toggle }: { toggle: () => void }) {
  return (
    <div className='fixed bottom-4 right-4 z-20 flex items-center justify-center md:flex-1'>
      <button
        onClick={toggle}
        className='bg-chattrWhite dark:bg-chattrBlack group rounded-full p-3 shadow'
        type='button'
        role='button'
        aria-label='Toggle Chattrbot'>
        <ChattrOpenIcon />
      </button>
    </div>
  )
}
