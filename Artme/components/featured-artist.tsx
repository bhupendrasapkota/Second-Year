import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getFeaturedArtist } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export async function FeaturedArtist() {
  const artist = await getFeaturedArtist()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-block border border-gray-200 dark:border-gray-800 px-3 py-1 text-sm">
          Featured Artist
        </div>
        <h3 className="text-3xl font-bold">{artist.name}</h3>
        <p className="text-muted-foreground">{artist.bio}</p>
        <div className="flex gap-4 pt-4">
          <Button className="group" asChild>
            <Link href={`/artists/${artist.id}`}>
              View Profile
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/artists/${artist.id}#artworks`}>See Artworks</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {artist.featuredArtworks.map((artwork: any) => (
          <Link
            key={artwork.id}
            href={`/artwork/${artwork.id}`}
            className="block group overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300"
          >
            <div className="aspect-square overflow-hidden relative">
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={artwork.imageUrl || "/placeholder.svg"}
                alt={artwork.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

