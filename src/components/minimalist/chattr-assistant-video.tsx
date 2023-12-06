import React from 'react'

import ChattrAssistantMessage from './chattr-assistant-message'

export default function ChattrAssistantVideo({
  key,
  data,
}: {
  key?: string
  data?: {
    description: string
    url: string
  }
}) {
  if (!data) {
    return (
      <ChattrAssistantMessage
        key={key}
        content='It looks like something went wrong while creating the video :( Try again later!'
      />
    )
  }

  return (
    <div
      key={key}
      className='flex justify-end'>
      <div className='dark:bg-chattrGrayDark rounded-chattrRoundedLarge bg-chattrBackgroundMuted px-3 py-2 shadow'>
        <p className='text-chattrText dark:text-chattrTextDark break-words text-sm font-light'>
          Here&apos;s a video that I generated with your description,{' '}
          {data.description}:
        </p>
        <div className='rounded-chattrRoundedLarge mb-2 mt-3 overflow-hidden'>
          <video
            className='aspect-square w-full object-cover'
            height={320}
            width={576}
            src={data.url}
            loop
            autoPlay
          />
        </div>
      </div>
    </div>
  )
}
