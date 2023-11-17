import React from 'react'

interface AProps extends React.HTMLProps<HTMLAnchorElement> {
  toggle?: () => void
  className?: string
  children: React.ReactNode
}

export default function a({ toggle, className, children, ...props }: AProps) {
  return (
    <a
      className={className}
      {...props}>
      {children}
    </a>
  )
}
