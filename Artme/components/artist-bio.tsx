"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ArtistBio({ artist }: { artist: any }) {
  const [expanded, setExpanded] = useState(false)

  // If bio is short, don't show the "Read more" button
  if (!artist.fullBio || artist.fullBio.length <= 150) {
    return <p className="text-sm">{artist.bio}</p>
  }

  return (
    <div>
      <p className="text-sm">{expanded ? artist.fullBio : `${artist.bio}...`}</p>
      <Button variant="link" size="sm" className="px-0 h-auto mt-1" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read less" : "Read more"}
      </Button>
    </div>
  )
}

