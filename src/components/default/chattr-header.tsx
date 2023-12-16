import React from 'react'

import ChattrCloseIcon from './chattr-close-icon'

function ChattrHeader({
  toggle,
  chattrBotName = 'Chattrbot',
}: {
  toggle: () => void
  chattrBotName?: string
}) {
  return (
    <div className='rounded-t-chattrRoundedLarge border-chattrGray bg-chattrWhite dark:border-chattrTextDark/10 dark:bg-chattrPitchBlack z-40 flex h-14 w-full items-center justify-between border-b px-3 py-2'>
      <div className='ml-1 flex flex-[0.5] justify-start'>
        <h3 className='text-chattrText dark:text-chattrTextDark text-sm font-semibold tracking-wide'>
          {chattrBotName}
        </h3>
      </div>
      <div className='mr-1 flex flex-[0.5] justify-end'>
        <a
          onClick={toggle}
          className='text-chattrText dark:text-chattrTextDark cursor-pointer hover:opacity-80 hover:dark:opacity-80'>
          <ChattrCloseIcon />
        </a>
      </div>
    </div>
  )
}

export default React.memo(ChattrHeader)
