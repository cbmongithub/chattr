import React from 'react'

export default function ChattrLoader({
  chattrBotName = 'Chattrbot',
}: {
  chattrBotName?: string
}) {
  return (
    <div className='mb-3 flex justify-start'>
      <div className='rounded-chattrRoundedMedium bg-chattrPrimary dark:bg-chattrPrimaryDark px-0.5 py-1.5'>
        <div className='flex items-center justify-center px-3 py-2'>
          <div className='chattrDot animate-chattrLoader'></div>
          <div className='chattrDot animation-delay-200 animate-chattrLoader'></div>
          <div className='chattrDot animation-delay-400 animate-chattrLoader'></div>
        </div>
      </div>
      <p className='flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100'>
        {chattrBotName}
      </p>
    </div>
  )
}