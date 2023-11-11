import React from 'react'

type ChatLoader = {
  className?: string
  chatBotTextClassname?: string
  chatBotName?: string
}

export default function ChatLoaderComponent({
  className = 'rounded-[0.85rem] border border-teal-600 px-0.5 py-1.5 dark:border-teal-500',
  chatBotTextClassname = 'flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100',
  chatBotName = 'Chatbot',
}: ChatLoader) {
  return (
    <div className='mb-3 flex justify-start'>
      <div className={className}>
        <div className='flex items-center justify-center px-3 py-2'>
          <div className='dot animate-loader'></div>
          <div className='dot animation-delay-200 animate-loader'></div>
          <div className='dot animation-delay-400 animate-loader'></div>
        </div>
      </div>
      <p className={chatBotTextClassname}>{chatBotName}</p>
    </div>
  )
}
