import React from 'react'

export default function ChatContainer({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('%c Chat Container Rendered!', 'background: #222; color: #fff')
  return (
    <div className='w-chattrContainer fixed bottom-4 right-4 z-20 h-96 max-h-96 rounded-xl border border-zinc-100/10 bg-zinc-900 text-zinc-100 shadow'>
      {children}
    </div>
  )
}
