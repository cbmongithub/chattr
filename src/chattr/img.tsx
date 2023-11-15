import React from 'react'

interface ImgProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string
}

export default function img({
  className = 'mb-4 ml-2 h-8 w-8 rounded-full object-cover',
  ...props
}: ImgProps) {
  return (
    <img
      className={className}
      {...props}
    />
  )
}
