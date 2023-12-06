import React from 'react'

export default function ChattrLoader() {
  return (
    <div className='px-3 py-2'>
      <div className='mb-3 flex justify-end'>
        <div className='dark:bg-chattrGrayDark rounded-chattrRoundedLarge bg-chattrBackgroundMuted inline-flex px-0.5 py-1.5 shadow'>
          <div className='flex items-center justify-center px-3 py-2'>
            <div className='dot animate-loader'></div>
            <div className='dot animation-delay-200 animate-loader'></div>
            <div className='dot animation-delay-400 animate-loader'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
