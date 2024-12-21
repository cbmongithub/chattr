import React from 'react'

/**
 * Manages the open and closed states of the chattr UI.
 *
 * @returns An object containing the current state and a function to toggle it.
 *
 * @default isOpen false
 */

export default function useChattr() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = React.useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return {
    isOpen,
    toggle,
  }
}
