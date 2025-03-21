import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getCollectionBySlug, getArtworksByCollection } from "@/lib/data"
import { notFound } from "next/navigation"
import { ArtworkGrid } from "@/components/artwork-grid"

export default async function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = await getCollectionBySlug(params.slug)

  if (!collection) {
    notFound()
  }

  const artworks = await getArtworksByCollection(collection.id)

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

      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />
        <img
          src={collection.coverImage || "/placeholder.svg"}
          alt={collection.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20 text-white container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{collection.name}</h1>
            <p className="text-lg opacity-90">{collection.description}</p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-muted-foreground">{artworks.length} artworks in this collection</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/collections">Back to collections</Link>
          </Button>
        </div>

        <ArtworkGrid artworks={artworks} />
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

