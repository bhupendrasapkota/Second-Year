import Link from "next/link"
import { Search, Upload, LogIn, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getArtworks, getFeaturedCollections, getTrendingTags } from "@/lib/data"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { FeaturedArtist } from "@/components/featured-artist"
import { ArtworkGrid } from "@/components/artwork-grid"
import { Newsletter } from "@/components/newsletter"

export default async function Home() {
  const artworks = await getArtworks()
  const featuredCollections = await getFeaturedCollections()
  const trendingTags = await getTrendingTags()

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <MobileNav />
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight">Artwork</span>
            </Link>
          </div>
          <div className="hidden md:block relative w-full max-w-md mx-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search amazing artwork..." className="pl-8 bg-muted/50 border-none" />
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/explore" className="text-sm font-medium nav-link">
                Explore
              </Link>
              <Link href="/collections" className="text-sm font-medium nav-link">
                Collections
              </Link>
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex gap-1 hover-lift" asChild>
              <Link href="/upload">
                <Upload className="h-4 w-4" />
                Upload
              </Link>
            </Button>
            <Button size="sm" className="hidden md:flex hover-lift" asChild>
              <Link href="/auth/login">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main>
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Discover and share <span className="text-gradient">incredible</span> artwork
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              The internet's source of freely usable images. Powered by creators everywhere.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search high-resolution images"
                className="pl-10 py-6 text-lg border-2 hover:border-black dark:hover:border-white transition-colors duration-300"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm text-muted-foreground">
              <span>Trending:</span>
              {trendingTags.map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.slug}`} className="hover:text-foreground animated-underline">
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Artwork</h2>
              <Button variant="link" className="group flex items-center gap-1" asChild>
                <Link href="/explore">
                  View all
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <ArtworkGrid artworks={artworks.slice(0, 9)} />
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-950 diagonal-split">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Collections</h2>
              <Button variant="link" className="group flex items-center gap-1" asChild>
                <Link href="/collections">
                  View all collections
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCollections.map((collection, index) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.slug}`}
                  className="group block stagger-item"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="relative h-80 overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                    <img
                      src={collection.coverImage || "/placeholder.svg"}
                      alt={collection.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                      <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-1">{collection.name}</h3>
                        <p className="text-sm text-white/80 mb-3">{collection.artworkCount} artworks</p>
                        <div className="w-0 group-hover:w-full h-0.5 bg-white transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Artist</h2>
              <Button variant="link" className="group flex items-center gap-1" asChild>
                <Link href="/artists">
                  View all artists
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <FeaturedArtist />
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-950 diagonal-split">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">New Additions</h2>
              <Button variant="link" className="group flex items-center gap-1" asChild>
                <Link href="/explore?sort=newest">
                  View all
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <ArtworkGrid artworks={artworks.slice(6)} />
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <Newsletter />
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold">Artwork</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                The internet's source of freely usable images. Powered by creators everywhere.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-lg">Explore</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/explore"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    All Artwork
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/artists"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    Artists
                  </Link>
                </li>
                <li>
                  <Link href="/tags" className="text-muted-foreground hover:text-foreground transition-colors nav-link">
                    Tags
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-lg">Community</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors nav-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/forum"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Artwork. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors nav-link">
                Terms
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors nav-link">
                Privacy
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors nav-link">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

