"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { addComment } from "@/lib/actions"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

export function CommentSection({
  artworkId,
  initialComments,
}: {
  artworkId: number
  initialComments: any[]
}) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newComment.trim()) return

    try {
      setIsSubmitting(true)
      const comment = await addComment(artworkId, newComment)

      setComments((prev) => [comment, ...prev])
      setNewComment("")
    } catch (error) {
      console.error("Failed to add comment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Comments ({comments.length})</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2"
          rows={3}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting || !newComment.trim()}>
            {isSubmitting ? "Posting..." : "Post Comment"}
          </Button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-shrink-0">
                  {comment.user.avatarUrl ? (
                    <img
                      src={comment.user.avatarUrl || "/placeholder.svg"}
                      alt={comment.user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-bold text-gray-400">{comment.user.name.charAt(0)}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <Link href={`/users/${comment.user.id}`} className="font-medium hover:underline">
                      {comment.user.name}
                    </Link>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">No comments yet. Be the first to comment!</div>
        )}
      </div>
    </div>
  )
}

