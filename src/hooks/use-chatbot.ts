import { useState, useCallback } from 'react'

/**
 * Returns a stateful value, and a toggle function to update it.
 * @default false
 */

export default function useChatbot(): {
  isOpen: boolean
  toggle: () => void
} {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return {
    isOpen,
    toggle,
  }
}
