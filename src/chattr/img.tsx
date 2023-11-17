import React from 'react'

interface ImgProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string
}

export default function img({ className, ...props }: ImgProps) {
  return (
    <img
      className={className}
      {...props}
    />
  )
}
