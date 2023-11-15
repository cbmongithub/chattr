import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

export default function button({
  className = 'ml-2 h-10 flex-none items-center justify-center gap-2 rounded-xl bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={className}
      {...props}>
      {children}
    </button>
  )
}
