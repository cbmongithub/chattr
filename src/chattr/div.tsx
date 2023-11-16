import React from 'react'

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

export default function div({ className, children, ...props }: DivProps) {
  return (
    <div
      className={className}
      {...props}>
      {children}
    </div>
  )
}
