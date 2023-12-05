import React from 'react'

import ChattrAssistantMessage from './chattr-assistant-message'
import ChattrUserMessage from './chattr-user-message'
import ChattrAssistantImage from './chattr-assistant-image'
import ChattrAssistantWeather from './chattr-assistant-weather'
import ChattrAssistantVideo from './chattr-assistant-video'

type ChattrMessage = {
  role: 'user' | 'assistant'
  key?: string
  content?: string
  ui: string
  data?: {
    temperature: string
    celcius: string
    location: string
    description: string
    humidity: string
    wind: string
    clouds: string
    state: string
    url: string
  }
}

function ChattrMessages({
  message: { content, role, key, ui, data },
}: {
  message: ChattrMessage
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
