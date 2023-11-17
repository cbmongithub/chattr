import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  toggle?: () => void
  className?: string
  children: React.ReactNode
}

export default function button({
  toggle,
  className,
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
