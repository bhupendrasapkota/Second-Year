"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Share2, Copy, Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function ShareDialog({ artwork }: { artwork: any }) {
  const [copied, setCopied] = useState(false)
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this artwork</DialogTitle>
          <DialogDescription>Share "{artwork.title}" with your friends and followers</DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-2 mt-4">
          <Input value={shareUrl} readOnly className="flex-1" />
          <Button size="sm" onClick={handleCopy}>
            {copied ? "Copied!" : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" size="icon" className="rounded-full">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Share on Facebook</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Share on Twitter</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">Share on LinkedIn</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Share via Email</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

