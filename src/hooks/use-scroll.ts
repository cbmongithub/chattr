import React from 'react'

import type { ChattrMessage } from '../types'

/**
 * Manages automatic scrolling of new content to the bottom of the ChattrFeed.
 *
 * @param messages An array of ChattrMessage objects.
 *
 * @returns The reference object used to manipulate the referenced DOM element (the `div`).
 *
 * @default ref null
 *
 */

export default function useScroll(messages: ChattrMessage[]) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  return ref
}
