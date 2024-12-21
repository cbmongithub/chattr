import React from 'react'

export const ChattrContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='border-chattrGray dark:border-chattrGrayDark dark:bg-chattrBlack rounded-chattrRoundedMedium bg-chattrWhite dark:text-chattrTextDark fixed bottom-4 right-4 z-20 h-96 max-h-96 w-[315px] border'>
      {children}
    </div>
  )
}
