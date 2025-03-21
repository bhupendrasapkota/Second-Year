import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getArtistById, getArtworksByArtist } from "@/lib/data"
import { notFound } from "next/navigation"
import { ArtworkGrid } from "@/components/artwork-grid"
import { ArtistStats } from "@/components/artist-stats"
import { ArtistBio } from "@/components/artist-bio"
import { FollowButton } from "@/components/follow-button"

export default async function ArtistPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const artist = await getArtistById(id)

  if (!artist) {
    notFound()
  }

  const artworks = await getArtworksByArtist(id)

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">Artwork</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/explore">Explore</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/collections">Collections</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-200 dark:border-gray-800 flex-shrink-0">
            {artist.avatarUrl ? (
              <img
                src={artist.avatarUrl || "/placeholder.svg"}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-400">{artist.name.charAt(0)}</span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{artist.name}</h1>
                <p className="text-muted-foreground">{artist.title}</p>
              </div>

              <FollowButton artistId={artist.id} initialFollowers={artist.followers || 0} />
            </div>

            <div className="mt-6">
              <ArtistStats artist={artist} />
            </div>

            <div className="mt-6">
              <ArtistBio artist={artist} />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Artwork by {artist.name}</h2>
          {artworks.length > 0 ? (
            <ArtworkGrid artworks={artworks} />
          ) : (
            <div className="text-center py-12 border border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
              <p className="text-muted-foreground">No artworks found for this artist.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 px-4 md:px-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Artwork</span>
            <span className="text-sm text-muted-foreground">© 2025 All rights reserved</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

