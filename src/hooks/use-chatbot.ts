import React, { SetStateAction } from 'react'

/**
 * Returns a stateful value, and a toggle function to update it.
 * @default false
 */

export default function useChatbot(): {
  isOpen: boolean
  setIsOpen?: React.Dispatch<SetStateAction<boolean>>
  toggle: () => void
} {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [isOpen])

  return {
    isOpen,
    setIsOpen,
    toggle,
  }
}
