import React from 'react'

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  children: React.ReactNode
}

export default function svg({
  className = 'h-7 w-7 stroke-white text-zinc-900 dark:text-teal-500',
  children,
  ...props
}: SvgProps) {
  return (
    <svg
      className={className}
      {...props}>
      {children}
    </svg>
  )
}
