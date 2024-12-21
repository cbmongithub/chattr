import { ChattrBotImage } from './chattr-bot-image'
import { ChattrBotMessage } from './chattr-bot-message'
import { ChattrBotVideo } from './chattr-bot-video'
import { ChattrBotWeather } from './chattr-bot-weather'
import { ChattrUserMessage } from './chattr-user-message'

export const ChattrMessages = React.memo(({
  message: { content, role, key, ui, data },
}: {
  message: Chattr.ChattrMessageProps
}) => {
  return (
    <div className='px-4 py-2'>
      {role === 'assistant' && ui === 'default' ? (
        <ChattrBotMessage
          key={key}
          content={content}
        />
      ) : role === 'assistant' && ui === 'weather' ? (
        <ChattrBotWeather
          key={key}
          data={data}
        />
      ) : role === 'assistant' && ui === 'image' ? (
        <ChattrBotImage
          key={key}
          data={data}
        />
      ) : role === 'assistant' && ui === 'video' ? (
        <ChattrBotVideo
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
})