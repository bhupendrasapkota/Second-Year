"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { downloadArtwork } from "@/lib/actions"

export function DownloadOptions({ artwork }: { artwork: any }) {
  const [isDownloading, setIsDownloading] = useState<string | null>(null)

  const handleDownload = async (size: string) => {
    try {
      setIsDownloading(size)
      await downloadArtwork(artwork.id, size)
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsDownloading(null)
    }
  }

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
      <h3 className="font-medium mb-4">Download options</h3>
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-between"
          disabled={isDownloading === "small"}
          onClick={() => handleDownload("small")}
        >
          Small ({artwork.dimensions.small})
          <Download className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="w-full justify-between"
          disabled={isDownloading === "medium"}
          onClick={() => handleDownload("medium")}
        >
          Medium ({artwork.dimensions.medium})
          <Download className="h-4 w-4" />
        </Button>
        <Button
          className="w-full justify-between"
          disabled={isDownloading === "original"}
          onClick={() => handleDownload("original")}
        >
          Original Size ({artwork.dimensions.original})
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

