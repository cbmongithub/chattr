import React from 'react'

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  ref?: React.MutableRefObject<HTMLDivElement>
}

export default function div({ ref, className, children, ...props }: DivProps) {
  return (
    <div
      ref={ref}
      className={className}
      {...props}>
      {children}
    </div>
  )
}
