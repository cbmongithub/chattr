import React from 'react'

/**
 * Chat Container - The component that wraps the chatbot.
 *
 * @param className - Use a custom CSS class for the chat container.
 * @default'fixed bottom-4 right-4 z-20 flex h-96 max-h-96 w-72 flex-col justify-between rounded-2xl border border-zinc-200 bg-white shadow-md shadow-zinc-800/5 dark:border-zinc-800 dark:bg-zinc-900'
 *
 * @param children - All chatbot children components.
 *
 * @returns The rendered Chat Container component.
 */

export default function ChatContainerComponent({
  className = 'fixed bottom-4 right-4 z-20 flex h-96 max-h-96 w-72 flex-col justify-between rounded-2xl border border-zinc-200 bg-white shadow-md shadow-zinc-800/5 dark:border-zinc-800 dark:bg-zinc-900',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={className}>{children}</div>
}
