import React from 'react'

export default function ChattrContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='rounded-chattrRoundedLarge border-chattrGray bg-chattrWhite dark:border-chattrText dark:bg-chattrBlack fixed bottom-4 right-4 z-20 flex h-96 max-h-96 w-72 flex-col justify-between border shadow'>
      {children}
    </div>
  )
}
