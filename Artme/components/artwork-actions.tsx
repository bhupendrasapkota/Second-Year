"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Bookmark } from "lucide-react"
import { likeArtwork, saveArtwork } from "@/lib/actions"

export function ArtworkActions({ artwork }: { artwork: any }) {
  const [likes, setLikes] = useState(artwork.likes)
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleLike = async () => {
    try {
      const newLikes = await likeArtwork(artwork.id)
      setLikes(newLikes)
      setIsLiked(true)
    } catch (error) {
      console.error("Failed to like artwork:", error)
    }
  }

  const handleSave = async () => {
    try {
      const success = await saveArtwork(artwork.id)
      if (success) {
        setIsSaved(true)
      }
    } catch (error) {
      console.error("Failed to save artwork:", error)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Button variant={isLiked ? "default" : "outline"} size="sm" className="gap-2" onClick={handleLike}>
        <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
        {likes}
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => document.getElementById("comments")?.scrollIntoView({ behavior: "smooth" })}
      >
        <MessageCircle className="h-4 w-4" />
        Comments
      </Button>

      <Button variant={isSaved ? "default" : "outline"} size="sm" className="gap-2" onClick={handleSave}>
        <Bookmark className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
        {isSaved ? "Saved" : "Save"}
      </Button>
    </div>
  )
}

