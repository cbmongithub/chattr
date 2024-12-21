import React from 'react'

import ChattrAssistantImage from './chattr-assistant-image'
import ChattrAssistantMessage from './chattr-assistant-message'
import ChattrAssistantVideo from './chattr-assistant-video'
import ChattrAssistantWeather from './chattr-assistant-weather'
import ChattrUserMessage from './chattr-user-message'

import type { ChattrMessageProps } from '../../types'

function ChattrMessages({
  message: { content, role, key, ui, data },
}: {
  message: ChattrMessageProps
}) {
  return (
    <div className='px-4 py-2'>
      {role === 'assistant' && ui === 'default' ? (
        <ChattrAssistantMessage
          key={key}
          content={content}
        />
      ) : role === 'assistant' && ui === 'weather' ? (
        <ChattrAssistantWeather
          key={key}
          data={data}
        />
      ) : role === 'assistant' && ui === 'image' ? (
        <ChattrAssistantImage
          key={key}
          data={data}
        />
      ) : role === 'assistant' && ui === 'video' ? (
        <ChattrAssistantVideo
          key={key}
          data={data}
        />
      ) : (
        <ChattrUserMessage
          key={key}
          content={content}
        />
      )}
    </div>
  )
}

export default React.memo(ChattrMessages)
