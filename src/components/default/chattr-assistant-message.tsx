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
      <div className='rounded-chattrRoundedLarge bg-chattrPrimary dark:bg-chattrPrimaryDark px-3 py-2'>
        <p className='text-chattrTextDark max-w-[160px] break-words text-sm font-light'>
          {content}
        </p>
      </div>
      <p className='text-chattrText dark:text-chattrTextDark flex items-center pl-2 text-sm font-semibold tracking-normal'>
        {chattrBotName}
      </p>
    </div>
  )
}
