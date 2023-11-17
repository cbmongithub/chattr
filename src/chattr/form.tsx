import React from 'react'

interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  className?: string
  children: React.ReactNode
}

export default function form({ className, children, ...props }: FormProps) {
  return (
    <form
      className={className}
      {...props}>
      {children}
    </form>
  )
}
