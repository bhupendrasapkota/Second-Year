import Link from "next/link"

export function SimilarArtworks({ artworks }: { artworks: any[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {artworks.map((artwork) => (
        <Link href={`/artwork/${artwork.id}`} key={artwork.id} className="block">
          <div className="h-40 bg-muted rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            <img
              src={artwork.imageUrl || "/placeholder.svg"}
              alt={artwork.title}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

