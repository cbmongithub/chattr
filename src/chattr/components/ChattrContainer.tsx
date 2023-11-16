import React from 'react'
import { chattr } from '..'

interface ChattrContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string
  children: React.ReactNode
}

export default function ChattrContainer({
  className = 'fixed bottom-4 right-4 z-20 flex h-96 max-h-96 w-72 flex-col justify-between rounded-2xl border border-zinc-200 bg-white shadow-md shadow-zinc-800/5 dark:border-zinc-800 dark:bg-zinc-900',
  children,
  ...props
}: ChattrContainerProps) {
  return (
    <chattr.div
      className={className}
      {...props}>
      {children}
    </chattr.div>
  )
}
