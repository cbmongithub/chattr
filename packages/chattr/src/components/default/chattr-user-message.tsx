export const ChattrUserMessage = ({
  key,
  content,
  userName = 'You',
}: Chattr.ChattrUserMessageProps) => {
  return (
    <div
      key={key}
      className='mb-3 flex justify-end'>
      <p className='flex items-center pr-2 text-sm font-semibold tracking-wide text-chattrText dark:text-chattrTextDark'>
        {userName}
      </p>
      <div className='rounded-chattrRoundedLarge bg-chattrBackgroundMuted px-3 py-2 dark:bg-chattrGrayDark'>
        <p className='max-w-[160px] break-words text-sm font-light text-chattrText dark:text-chattrTextDark'>
          {content}
        </p>
      </div>
    </div>
  )
}
