import React from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
}

export default function input({ className, ...props }: InputProps) {
  return (
    <input
      type='text'
      required
      className={className}
      {...props}
    />
  )
}
