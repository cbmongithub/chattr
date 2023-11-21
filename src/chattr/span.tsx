import React from 'react'

interface SpanProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  className?: string
  children: React.ReactNode
}

export default function span({ className, children, ...props }: SpanProps) {
  return (
    <span
      className={className}
      {...props}>
      {children}
    </span>
  )
}
