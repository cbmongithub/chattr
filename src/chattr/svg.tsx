import React from 'react'

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  children: React.ReactNode
}

export default function svg({ className, children, ...props }: SvgProps) {
  return (
    <svg
      className={className}
      {...props}>
      {children}
    </svg>
  )
}
