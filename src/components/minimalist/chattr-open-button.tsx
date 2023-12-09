import React from 'react'

import ChattrOpenIcon from './chattr-open-icon'

export default function ChattrIcon({ toggle }: { toggle: () => void }) {
  return (
    <div className='fixed bottom-4 right-4 z-20 flex items-center justify-center md:flex-1'>
      <button
        onClick={toggle}
        className='bg-chattrWhite shadow-chattrText/5 ring-chattrBlack/5 dark:bg-chattrBlack dark:ring-chattrWhite/5 dark:hover:ring-chattrWhite/10 group rounded-full p-3 shadow ring-1'
        type='button'
        role='button'
        aria-label='Toggle Chatbot'>
        <ChattrOpenIcon />
      </button>
    </div>
  )
}
