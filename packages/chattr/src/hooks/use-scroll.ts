import React from 'react'

import type { ChattrMessageProps } from '../types/globals'

/**
 * Manages automatic scrolling of new content to the bottom of the ChattrFeed.
 *
 * @param messages An array of ChattrMessageProps objects.
 *
 * @returns The reference object used to manipulate the referenced DOM element (the `div`).
 *
 */

export default function useScroll(messages: ChattrMessageProps[]) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  return ref
}
