import Link from "next/link"
import { ArrowLeft, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getArtworkById, getSimilarArtworks, getArtworkComments } from "@/lib/data"
import { notFound } from "next/navigation"
import { CommentSection } from "@/components/comment-section"
import { ArtworkActions } from "@/components/artwork-actions"
import { ArtworkMetadata } from "@/components/artwork-metadata"
import { SimilarArtworks } from "@/components/similar-artworks"
import { ArtistCard } from "@/components/artist-card"
import { DownloadOptions } from "@/components/download-options"
import { ShareDialog } from "@/components/share-dialog"

export default async function ArtworkPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const artwork = await getArtworkById(id)

  if (!artwork) {
    notFound()
  }

  const similarArtworks = await getSimilarArtworks(id)
  const comments = await getArtworkComments(id)

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
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to gallery
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden bg-muted border border-gray-200 dark:border-gray-800">
              <img
                src={artwork.imageUrl || "/placeholder.svg"}
                alt={artwork.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <h1 className="text-3xl font-bold">{artwork.title}</h1>
              <div className="flex gap-2">
                <ShareDialog artwork={artwork} />
                <Button variant="outline" size="icon">
                  <Flag className="h-4 w-4" />
                  <span className="sr-only">Report</span>
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-muted-foreground">{artwork.description}</p>
            </div>

            <div className="mt-6">
              <ArtworkActions artwork={artwork} />
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {artwork.tags.map((tag: string) => (
                <Link key={tag} href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button variant="outline" size="sm" className="rounded-full">
                    {tag}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              <CommentSection artworkId={artwork.id} initialComments={comments} />
            </div>

            <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl font-bold mb-6">Similar artwork</h2>
              <SimilarArtworks artworks={similarArtworks} />
            </div>
          </div>

          <div className="space-y-6">
            <ArtistCard artist={artwork.artist} />

            <DownloadOptions artwork={artwork} />

            <ArtworkMetadata artwork={artwork} />
          </div>
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

