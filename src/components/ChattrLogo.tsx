import React from 'react'
import chattr from '../chattr'

type ChattrLogo = {
  children?:
    | React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >
    | React.SVGProps<SVGSVGElement>
  chattrName?: string | number
}

export default function ChattrLogo({
  children,
  chattrName = 'Chattrbot',
}: ChattrLogo) {
  console.log('%c ChattrLogo Rendered!', 'background: #16A085; color: #fff')
  return (
    <chattr.div className='ml-1 flex flex-[0.5] justify-start'>
      {children ? (
        children
      ) : (
        <chattr.p className='text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
          {chattrName}
        </chattr.p>
      )}
    </chattr.div>
  )
}
