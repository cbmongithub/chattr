import React from 'react'

type ChattrAssistantMessage = {
  key?: string
  content?: string
  chattrBotName?: string
}

export default function ChattrAssistantMessage({
  key,
  content,
  chattrBotName = 'Chattrbot',
}: ChattrAssistantMessage) {
  return (
    <div
      key={key}
      className='mb-3 flex justify-start'>
      <div className='rounded-2xl border border-teal-600 px-3 py-2 dark:border-teal-500'>
        <p className='max-w-[160px] break-words text-sm font-light text-teal-600 dark:text-teal-500'>
          {content}
        </p>
      </div>
      <p className='flex items-center pl-2 text-sm font-semibold tracking-normal text-zinc-900 dark:text-zinc-100'>
        {chattrBotName}
      </p>
    </div>
  )
}
