import React from 'react'

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  forwardedRef?: React.ForwardedRef<HTMLDivElement>
}

export default function div({
  forwardedRef,
  className,
  children,
  ...props
}: DivProps) {
  return (
    <div
      ref={forwardedRef}
      className={className}
      {...props}>
      {children}
    </div>
  )
}
