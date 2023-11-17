import React from 'react'

interface PProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string
  children: React.ReactNode
}

export default function p({ className, children, ...props }: PProps) {
  return (
    <p
      className={className}
      {...props}>
      {children}
    </p>
  )
}
