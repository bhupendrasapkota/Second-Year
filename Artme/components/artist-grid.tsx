import Link from "next/link"
import { User } from "lucide-react"

export function ArtistGrid({ artists }: { artists: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {artists.map((artist) => (
        <Link key={artist.id} href={`/artists/${artist.id}`} className="group block">
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                {artist.avatarUrl ? (
                  <img
                    src={artist.avatarUrl || "/placeholder.svg"}
                    alt={artist.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <User className="h-10 w-10 text-muted-foreground" />
                )}
              </div>
              <h3 className="font-medium text-lg group-hover:underline">{artist.name}</h3>
              <p className="text-sm text-muted-foreground">{artist.title}</p>
              <p className="text-xs text-muted-foreground mt-2">{artist.artworkCount} artworks</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

