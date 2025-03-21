"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Heart } from "lucide-react"

export function ArtworkGrid({ artworks }: { artworks: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(3)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  // Determine number of columns based on screen size
  useEffect(() => {
    if (isMobile) {
      setColumns(1)
    } else if (isTablet) {
      setColumns(2)
    } else {
      setColumns(3)
    }
  }, [isMobile, isTablet])

  // Create column arrays for masonry layout
  const createMasonryLayout = () => {
    const columnArrays: any[][] = Array.from({ length: columns }, () => [])

    // Sort artworks by a combination of likes and views for better distribution
    const sortedArtworks = [...artworks].sort((a, b) => {
      const scoreA = a.likes * 2 + a.views
      const scoreB = b.likes * 2 + b.views
      return scoreB - scoreA
    })

    // Distribute items across columns in a way that balances column heights
    sortedArtworks.forEach((artwork, index) => {
      // Find the column with the least items
      const shortestColumnIndex = columnArrays
        .map((column, i) => ({ index: i, length: column.length }))
        .sort((a, b) => a.length - b.length)[0].index

      columnArrays[shortestColumnIndex].push(artwork)
    })

    return columnArrays
  }

  const masonryColumns = createMasonryLayout()

  // Generate a unique aspect ratio for each artwork
  const getAspectRatio = (id: number) => {
    const options = [
      "aspect-[3/4]", // Portrait
      "aspect-square", // Square
      "aspect-[4/5]", // Slightly portrait
      "aspect-[3/5]", // Tall portrait
      "aspect-[2/3]", // Medium portrait
      "aspect-[4/3]", // Landscape
      "aspect-[5/4]", // Slightly landscape
      "aspect-[16/9]", // Wide landscape
    ]

    // Use the artwork ID to deterministically select an aspect ratio
    // This ensures the same artwork always has the same aspect ratio
    return options[id % options.length]
  }

  return (
    <div ref={containerRef} className="flex gap-8 w-full">
      {masonryColumns.map((column, columnIndex) => (
        <div key={`column-${columnIndex}`} className="flex-1 flex flex-col gap-8">
          {column.map((artwork: any) => {
            const heightClass = getAspectRatio(artwork.id)

            return (
              <div
                key={artwork.id}
                className="stagger-item group relative overflow-hidden transition-all hover:shadow-2xl border border-gray-200 dark:border-gray-800 w-full"
              >
                <Link href={`/artwork/${artwork.id}`} className="block">
                  <div className={`relative ${heightClass} w-full`}>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                    {/* Image */}
                    <img
                      src={artwork.imageUrl || "/placeholder.svg"}
                      alt={artwork.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Info overlay that slides up on hover */}
                    <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                      <div className="space-y-2">
                        <h3 className="font-medium text-xl text-white">{artwork.title}</h3>
                        <p className="text-sm text-white/80">by {artwork.artist.name}</p>
                        <div className="flex items-center gap-2 text-white/90">
                          <Heart className="h-4 w-4 fill-white" />
                          <span className="text-sm">{artwork.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Category tag */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {artwork.category}
                      </div>
                    </div>

                    {/* Likes counter */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        <Heart className="h-3 w-3 text-white" />
                        <span className="text-xs text-white">{artwork.likes}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

