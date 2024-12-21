import * as React from 'react'

declare global {
  namespace React {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      chattr?: string
    }
    interface SVGProps<T> extends SVGProps<SVGSVGElement> {
      chattr?: string
    }
  }
  namespace Chattr {
    interface ChattrBotMessageProps {
      key?: string
      content?: string
      chattrBotName?: string
    }
    interface ChattrMessageProps {
      role: 'user' | 'assistant'
      key?: string
      content?: string
      ui?: string
      data?: {
        temperature: string
        celcius: string
        location: string
        description: string
        humidity: string
        wind: string
        clouds: string
        state: string
        url: string
      }
    }
    interface ChattrFormProps {
      setMessage: React.Dispatch<React.SetStateAction<string>>
      sendMessage: (
        event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
      ) => void
      message: string
      loading: boolean
    }
    interface ChattrUserMessageProps {
      key?: string
      content?: string
      userName?: string
    }

  }
}
