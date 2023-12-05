import React from 'react'

type ChatMessage = {
  text: string
  role: 'assistant' | 'user'
  key?: string | number
}

type ChatUser = {
  userDivClassName?: string
  userNameClassName?: string
  userName?: string
  userTextDivClassName?: string
  userTextClassName?: string
}

type ChatAssistant = {
  assistantDivClassName?: string
  assistantNameClassName?: string
  assistantName?: string
  assistantTextDivClassName?: string
  assistantTextClassName?: string
}

const ChatMessageComponent = React.memo(function ChatMessage({
  message: { text, role, key },
  userDivClassName = 'mb-3 flex justify-end',
  userNameClassName = 'flex items-center pr-2 text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100',
  userName = 'You',
  userTextDivClassName = 'rounded-2xl bg-zinc-100 px-3 py-2 dark:bg-zinc-800',
  userTextClassName = 'max-w-[160px] break-words text-sm font-light text-zinc-800 dark:text-zinc-300',
  assistantDivClassName = 'mb-3 flex justify-start',
  assistantNameClassName = 'flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100',
  assistantName = 'Chatbot',
  assistantTextDivClassName = 'rounded-2xl border border-teal-600 px-3 py-2 dark:border-teal-500',
  assistantTextClassName = 'max-w-[160px] break-words text-sm font-light text-teal-600 dark:text-teal-500',
}: {
  message: ChatMessage
  userDivClassName?: ChatUser['userDivClassName']
  userNameClassName?: ChatUser['userNameClassName']
  userName?: ChatUser['userName']
  userTextDivClassName?: ChatUser['userTextDivClassName']
  userTextClassName?: ChatUser['userTextClassName']
  assistantDivClassName?: ChatAssistant['assistantDivClassName']
  assistantNameClassName?: ChatAssistant['assistantNameClassName']
  assistantName?: ChatAssistant['assistantName']
  assistantTextDivClassName?: ChatAssistant['assistantTextDivClassName']
  assistantTextClassName?: ChatAssistant['assistantTextClassName']
}) {
  return role === 'user' ? (
    <div
      key={key}
      className={userDivClassName}>
      <p className={userNameClassName}>{userName}</p>
      <div className={userTextDivClassName}>
        <p className={userTextClassName}>{text}</p>
      </div>
    </div>
  ) : (
    <div
      key={key}
      className={assistantDivClassName}>
      <div className={assistantTextDivClassName}>
        <p className={assistantTextClassName}>{text}</p>
      </div>
      <p className={assistantNameClassName}>{assistantName}</p>
    </div>
  )
})

export default ChatMessageComponent
