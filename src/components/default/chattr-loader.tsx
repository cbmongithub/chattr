import React from 'react'

export default function ChattrLoader({
  chattrBotName = 'Chattrbot',
}: {
  chattrBotName?: string
}) {
  return (
    <div className='mb-3 flex justify-start'>
      <div className='rounded-[0.85rem] border border-teal-600 px-0.5 py-1.5 dark:border-teal-500'>
        <div className='flex items-center justify-center px-3 py-2'>
          <div className='dot animate-loader'></div>
          <div className='dot animation-delay-200 animate-loader'></div>
          <div className='dot animation-delay-400 animate-loader'></div>
        </div>
      </div>
      <p className='flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100'>
        {chattrBotName}
      </p>
    </div>
  )
}
