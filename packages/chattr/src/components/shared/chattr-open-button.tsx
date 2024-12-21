import { ChattrOpenIcon } from './chattr-open-icon'

export const ChattrOpenButton = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className='border-chattrGray dark:border-chattrTextDark/10 fixed bottom-4 right-4 z-20 flex items-center justify-center rounded-full border md:flex-1'>
      <button
        onClick={toggle}
        className='bg-chattrWhite dark:bg-chattrBlack group rounded-full p-3 shadow'
        type='button'
        aria-label='Toggle Chattrbot'>
        <ChattrOpenIcon />
      </button>
    </div>
  )
}
