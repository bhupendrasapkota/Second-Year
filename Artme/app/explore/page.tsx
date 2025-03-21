import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getArtworks, getCategories, getTrendingTags } from "@/lib/data"
import { ArtworkGrid } from "@/components/artwork-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { SortDropdown } from "@/components/sort-dropdown"

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const artworks = await getArtworks()
  const categories = await getCategories()
  const tags = await getTrendingTags()

  // Handle filtering and sorting based on searchParams
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "popular"

  // Filter artworks based on category and tag
  let filteredArtworks = [...artworks]

  if (category) {
    filteredArtworks = filteredArtworks.filter((artwork) => artwork.category?.toLowerCase() === category.toLowerCase())
  }

  if (tag) {
    filteredArtworks = filteredArtworks.filter((artwork) =>
      artwork.tags.some((t: string) => t.toLowerCase() === tag.toLowerCase()),
    )
  }

  // Sort artworks
  if (sort === "newest") {
    filteredArtworks.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } else if (sort === "oldest") {
    filteredArtworks.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
  } else if (sort === "popular") {
    filteredArtworks.sort((a, b) => b.likes - a.likes)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">Artwork</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/explore" className="text-sm font-medium nav-link">
              Explore
            </Link>
            <Link href="/collections" className="text-sm font-medium nav-link">
              Collections
            </Link>
            <Button size="sm" className="hover-lift" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Explore Artwork</h1>
          <SortDropdown currentSort={sort} />
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-64 shrink-0">
            <FilterSidebar categories={categories} tags={tags} selectedCategory={category} selectedTag={tag} />
          </div>

          <div className="flex-1">
            {filteredArtworks.length > 0 ? (
              <ArtworkGrid artworks={filteredArtworks} />
            ) : (
              <div className="text-center py-20 border border-dashed border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-medium mb-4">No artworks found</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Try adjusting your filters or explore our featured collections.
                </p>
                <Button asChild>
                  <Link href="/explore">Clear filters</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4 md:px-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Artwork</span>
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground nav-link">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground nav-link">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-foreground nav-link">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

