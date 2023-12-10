import React from 'react'

export default function ChattrLoader() {
  return (
    <div className='px-3 py-2'>
      <div className='mb-3 flex justify-end'>
        <div className='rounded-chattrRoundedLarge bg-chattrBackgroundMuted dark:bg-chattrGrayDark inline-flex px-0.5 py-1.5 shadow'>
          <div className='flex items-center justify-center px-3 py-2'>
            <div className='chattrDotMinimalist animate-chattrLoader'></div>
            <div className='chattrDotMinimalist animation-delay-200 animate-chattrLoader'></div>
            <div className='chattrDotMinimalist animation-delay-400 animate-chattrLoader'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
