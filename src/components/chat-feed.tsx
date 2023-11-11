import React from 'react'

import ChatLoader from './chat-loader'
import ChatMessage from './chat-message'

type ChatFeed = {
  text: string
  role: 'assistant' | 'user'
  key?: string | number
}

interface ChatFeedComponentProps {
  className?: string
  messages: ChatFeed[]
  loading: boolean
  chatLoaderClassName?: string
  chatBotTextClassname?: string
  chatBotName?: string
  loaderComponent?: React.JSX.Element
  userNameClassName?: string
  userName?: string
  userTextDivClassName?: string
  userTextClassName?: string
  assistantNameClassName?: string
  assistantName?: string
  assistantTextDivClassName?: string
  assistantTextClassName?: string
}

/**
 * Chat Feed - The component that maps over messages and auto scrolls.
 *
 * @param className - Use a custom CSS class for the chat feed container.
 *
 * **Important** - Leave overflowY as scroll to preserve auto scroll to bottom.
 *
 * @default'max-h-[275px] flex-auto overflow-y-scroll px-3'
 *
 * @param messages - The messages array that contains objects with chat data.
 *
 * @param loading - The state in between sent messages.
 *
 * @param chatLoaderClassName - Use a custom CSS class for the chat loader.
 * @default'rounded-[0.85rem] border border-teal-600 px-0.5 py-1.5 dark:border-teal-500'
 *
 * @param chatBotTextClassname - Use a custom CSS class for the chatbot name in the chat loader.
 * @default'flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100'
 *
 * @param chatBotName - Use a custom chatbot name in the chat loader.
 * @default'Chatbot'
 *
 * @param loaderComponent - Use a custom loader component for the chat feed.
 * @default
 * <ChatLoader
    className={chatLoaderClassName}
    chatBotTextClassname={chatBotTextClassname}
    chatBotName={chatBotName}
   />
 *
 * @param userNameClassName - Use a custom CSS class for the user name in the message component. 
 * @default'flex items-center pr-2 text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'
 * 
 * @param userName - Use a custom user name in the message component. 
 * @default'You'
 * 
 * @param userTextDivClassName - Use a custom CSS class for the user text div. 
 * @default'rounded-2xl bg-zinc-100 px-3 py-2 dark:bg-zinc-800'
 * 
 * @param userTextClassName - Use a custom CSS class for the user text. 
 * @default'max-w-[160px] break-words text-sm font-light text-zinc-800 dark:text-zinc-300'
 * 
 * @param assistantNameClassName - Use a custom CSS class for the chatbot name in the message component. 
 * @default'flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100'
 * 
 * @param assistantName - Use a custom chatbot name in the message component.
 * @default'Chatbot'
 * 
 * @param assistantTextDivClassName - Use a custom CSS class for the chatbot text div.
 * @default'rounded-2xl border border-teal-600 px-3 py-2 dark:border-teal-500'
 * 
 * @param assistantTextClassName - Use a custom CSS class for the chatbot text.
 * @default'max-w-[160px] break-words text-sm font-light text-teal-600 dark:text-teal-500'
 * 
 * @param ref - The forwarded ref data needed to auto scroll to bottom.
 *
 * @returns The rendered Chat Feed component.
 */

const ChatFeedComponent = React.memo(
  React.forwardRef(function ChatFeedComponent(
    {
      className = 'max-h-[275px] flex-auto overflow-y-scroll px-3',
      messages,
      loading,
      chatLoaderClassName,
      chatBotTextClassname,
      chatBotName,
      loaderComponent = (
        <ChatLoader
          className={chatLoaderClassName}
          chatBotTextClassname={chatBotTextClassname}
          chatBotName={chatBotName}
        />
      ),
      userNameClassName,
      userName,
      userTextDivClassName,
      userTextClassName,
      assistantNameClassName,
      assistantName,
      assistantTextDivClassName,
      assistantTextClassName,
    }: ChatFeedComponentProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div
        ref={ref as React.MutableRefObject<HTMLDivElement>}
        className={className}>
        <div className='mb-3'></div>
        {messages.map((message, i) => (
          <ChatMessage
            key={i}
            message={message}
            userNameClassName={userNameClassName}
            userName={userName}
            userTextDivClassName={userTextDivClassName}
            userTextClassName={userTextClassName}
            assistantNameClassName={assistantNameClassName}
            assistantName={assistantName}
            assistantTextDivClassName={assistantTextDivClassName}
            assistantTextClassName={assistantTextClassName}
          />
        ))}
        {loading && loaderComponent}
      </div>
    )
  })
)

export default ChatFeedComponent
