import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getCollections } from "@/lib/data"

export default async function CollectionsPage() {
  const collections = await getCollections()

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Collections</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.slug}`} className="group block">
              <div className="relative h-64 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <img
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
                  <h3 className="text-xl font-bold">{collection.name}</h3>
                  <p className="text-sm opacity-80">{collection.artworkCount} artworks</p>
                </div>
              </div>
            </Link>
          ))}
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

