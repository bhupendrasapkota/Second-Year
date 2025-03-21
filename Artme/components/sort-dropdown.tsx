"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export function SortDropdown({ currentSort }: { currentSort: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)
    return params.toString()
  }

  const getSortLabel = (sort: string) => {
    switch (sort) {
      case "newest":
        return "Newest"
      case "oldest":
        return "Oldest"
      case "popular":
      default:
        return "Popular"
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-1">
          Sort: {getSortLabel(currentSort)}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`${pathname}?${createQueryString("sort", "popular")}`}>Popular</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`${pathname}?${createQueryString("sort", "newest")}`}>Newest</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`${pathname}?${createQueryString("sort", "oldest")}`}>Oldest</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

