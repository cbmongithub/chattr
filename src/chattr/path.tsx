import React from 'react'

export default function path({ ...props }: React.SVGProps<SVGPathElement>) {
  return <path {...props}></path>
}
