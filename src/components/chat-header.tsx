import React from 'react'

type ChatHeader = {
  toggle: () => void
  className?: string
  chatBotDivClassName?: string
  chatBotTextClassName?: string
  chatBotName?: string
  closeIconDivClassName?: string
  closeIconClassName?: string
  closeIcon?: React.ReactNode
}

/**
 * Chat Header - The component that shows the chatbot name and the close icon.
 *
 * @param toggle - The toggle function to close the chatbot.
 *
 * @param className - Use a custom CSS class for the chat header parent container.
 * @default'z-40 flex h-14 w-full items-center justify-between rounded-t-2xl border-b border-zinc-300 bg-zinc-200 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-950'
 *
 * @param chatBotDivClassName - Use a custom CSS class for the chatbot text div.
 * @default'ml-1 flex flex-[0.5] justify-start'
 *
 * @param chatBotTextClassName - Use a custom CSS class for the chatbot name.
 * @default'text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'
 *
 * @param chatBotName - Use a custom chatbot name.
 * @default'Chatbot'
 *
 * @param closeIconDivClassName - Use a custom CSS class for the close icon div.
 * @default'mr-1 flex flex-[0.5] justify-end'
 * 
 * @param closeIconClassName - Use a custom CSS class for the close icon.
 * @default'cursor-pointer text-zinc-800 hover:opacity-80 dark:text-zinc-100 hover:dark:opacity-80'
 * 
 * @param closeIcon - Use a custom SVG element for the close icon.
 * @default
 * <svg
   stroke='currentColor'
   fill='currentColor'
   strokeWidth='0'
   version='1.1'
   viewBox='0 0 21 21'
   height='1em'
   width='1em'
   xmlns='http://www.w3.org/2000/svg'>
   <path d='M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z'></path>
   </svg>
 *    
 * @returns The rendered Chat Header component.
 */

const ChatHeaderComponent = React.memo(function ChatHeaderComponent({
  toggle,
  className = 'z-40 flex h-14 w-full items-center justify-between rounded-t-2xl border-b border-zinc-300 bg-zinc-200 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-950',
  chatBotDivClassName = 'ml-1 flex flex-[0.5] justify-start',
  chatBotTextClassName = 'text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100',
  chatBotName = 'Chatbot',
  closeIconDivClassName = 'mr-1 flex flex-[0.5] justify-end',
  closeIconClassName = 'cursor-pointer text-zinc-800 hover:opacity-80 dark:text-zinc-100 hover:dark:opacity-80',
  closeIcon = (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      version='1.1'
      viewBox='0 0 21 21'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z'></path>
    </svg>
  ),
}: ChatHeader) {
  return (
    <div className={className}>
      <div className={chatBotDivClassName}>
        <h3 className={chatBotTextClassName}>{chatBotName}</h3>
      </div>
      <div className={closeIconDivClassName}>
        <a
          onClick={toggle}
          className={closeIconClassName}>
          {closeIcon}
        </a>
      </div>
    </div>
  )
})

export default ChatHeaderComponent
