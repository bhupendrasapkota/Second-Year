import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { FollowButton } from "@/components/follow-button"

export function ArtistCard({ artist }: { artist: any }) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center border border-gray-200 dark:border-gray-800">
          {artist.avatarUrl ? (
            <img
              src={artist.avatarUrl || "/placeholder.svg"}
              alt={artist.name}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <User className="h-6 w-6 text-muted-foreground" />
          )}
        </div>
        <div>
          <Link href={`/artists/${artist.id}`} className="font-medium hover:underline">
            {artist.name}
          </Link>
          <p className="text-sm text-muted-foreground">{artist.title}</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6">{artist.bio}</p>

      <div className="flex gap-2">
        <FollowButton artistId={artist.id} initialFollowers={artist.followers || 0} />
        <Button variant="outline" size="sm" asChild>
          <Link href={`/artists/${artist.id}`}>View Profile</Link>
        </Button>
      </div>
    </div>
  )
}

