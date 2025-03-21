"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Filter, X } from "lucide-react"
import { useState } from "react"

export function FilterSidebar({
  categories,
  tags,
  selectedCategory,
  selectedTag,
}: {
  categories: any[]
  tags: any[]
  selectedCategory?: string
  selectedTag?: string
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)
    return params.toString()
  }

  const removeQueryString = (name: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(name)
    return params.toString()
  }

  const hasActiveFilters = selectedCategory || selectedTag

  const FiltersContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-4 text-lg">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                href={
                  selectedCategory === category.id
                    ? `${pathname}?${removeQueryString("category")}`
                    : `${pathname}?${createQueryString("category", category.id)}`
                }
                className={`text-sm ${
                  selectedCategory === category.id
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                } nav-link`}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4 text-lg">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={
                selectedTag === tag.id
                  ? `${pathname}?${removeQueryString("tag")}`
                  : `${pathname}?${createQueryString("tag", tag.id)}`
              }
            >
              <Button variant={selectedTag === tag.id ? "default" : "outline"} size="sm" className="hover-lift">
                {tag.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="pt-4">
          <Button variant="outline" size="sm" className="hover-lift" asChild>
            <Link href={pathname}>Clear all filters</Link>
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile filter button */}
      <div className="md:hidden mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <Filter className="h-4 w-4" />
          Filters {hasActiveFilters && "(Active)"}
        </Button>
      </div>

      {/* Mobile filter sidebar */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white dark:bg-black p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg">Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setMobileFiltersOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <FiltersContent />
          </div>
        </div>
      )}

      {/* Desktop filter sidebar */}
      <div className="hidden md:block sticky top-24">
        <FiltersContent />
      </div>
    </>
  )
}

