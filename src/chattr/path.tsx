import React from 'react'

interface PathProps extends React.SVGProps<SVGPathElement> {
  className?: string
}

export default function path({ className, ...props }: PathProps) {
  return (
    <path
      className={className}
      {...props}></path>
  )
}
