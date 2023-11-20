interface ChattrAssistantBubbleProps {
  key?: string | number
  chattrName: string | number
  text: string
}

interface ChattrBot {
  welcomeText?: string
  endPoint: RequestInfo | URL
  errorMessage: string
  chattrName?: string | number
  userName?: string | number
}

interface ChattrCloseIconProps {
  children?: React.ReactNode
  toggle: () => void
}

interface ChattrFormProps {
  setMessage: React.Dispatch<React.SetStateAction<string>>
  sendMessage: (
    event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
  ) => void
  message: string
  loading: boolean
}

interface ChattrHeaderProps {
  toggle: () => void
  chattrName?: string | number
}

interface ChattrLogoProps {
  children?: React.ReactNode
  chattrName?: string | number
}

interface ChattrMessagesProps {
  text: string
  role: 'user' | 'assistant'
  key?: string | number
  chattrName?: string | number
  userName?: string | number
}

interface ChattrScrollFeedProps {
  messages: ChattrMessagesProps[]
  loading: boolean
  chattrName?: string | number
  userName?: string | number
}

interface ChattrUserBubbleProps {
  key?: string | number
  userName: string | number
  text: string
}

export {
  ChattrAssistantBubbleProps,
  ChattrBot,
  ChattrCloseIconProps,
  ChattrFormProps,
  ChattrHeaderProps,
  ChattrLogoProps,
  ChattrMessagesProps,
  ChattrScrollFeedProps,
  ChattrUserBubbleProps,
}
