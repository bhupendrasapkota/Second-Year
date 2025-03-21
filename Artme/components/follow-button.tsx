"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { followArtist } from "@/lib/actions"

export function FollowButton({
  artistId,
  initialFollowers,
}: {
  artistId: number
  initialFollowers: number
}) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [followers, setFollowers] = useState(initialFollowers)

  const handleFollow = async () => {
    try {
      const newFollowers = await followArtist(artistId)
      setFollowers(newFollowers)
      setIsFollowing(true)
    } catch (error) {
      console.error("Failed to follow artist:", error)
    }
  }

  return (
    <Button onClick={handleFollow} disabled={isFollowing} className="flex-1">
      {isFollowing ? "Following" : "Follow"}
    </Button>
  )
}

