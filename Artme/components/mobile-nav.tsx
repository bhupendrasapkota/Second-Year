"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <span className="text-2xl font-bold">Artwork</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <div className="grid gap-2 py-6">
            <Link href="/explore" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Explore
            </Link>
            <Link
              href="/collections"
              className="flex items-center py-2 text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Collections
            </Link>
            <Link href="/artists" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Artists
            </Link>
            <Link href="/upload" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Upload
            </Link>
          </div>

          <div className="grid gap-2">
            <Link
              href="/auth/login"
              className="flex items-center py-2 text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="flex items-center py-2 text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Create Account
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

