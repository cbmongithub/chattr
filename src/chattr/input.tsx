import React from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
}

export default function input({
  className = 'h-10 min-w-0 flex-auto appearance-none rounded-xl border border-zinc-900/10 bg-white px-3 py-2 text-zinc-700 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-300 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:text-zinc-400 dark:focus:ring-teal-400/10 sm:text-sm',
  ...props
}: InputProps) {
  return (
    <input
      type='text'
      required
      className={className}
      {...props}
    />
  )
}
