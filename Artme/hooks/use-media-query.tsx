"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Set initial state based on window size
    const media = window.matchMedia(query)
    setMatches(media.matches)

    // Define callback for media query changes
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Add the listener
    media.addEventListener("change", listener)

    // Clean up
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

