import React from 'react'

interface PProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string
  children: React.ReactNode
}

export default function p({
  className = 'mb-4 ml-2 h-8 w-8 rounded-full object-cover',
  children,
  ...props
}: PProps) {
  return (
    <p
      className={className}
      {...props}>
      {children}
    </p>
  )
}
