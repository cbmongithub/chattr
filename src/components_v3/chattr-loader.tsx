import React from 'react'

export default function ChattrLoader() {
  console.log('%c Chat Loader Rendered!', 'background: #ff2929; color: #ffffff')
  return (
    <div className='px-4 py-2'>
      <div className='mb-3 flex justify-end'>
        <div className='rounded-[0.85rem] bg-zinc-100/10 px-0.5 py-1.5 dark:bg-zinc-100/10'>
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
