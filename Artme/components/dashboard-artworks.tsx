import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye, Heart } from "lucide-react"

export function DashboardArtworks({ artworks }: { artworks: any[] }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-3 font-medium text-sm">Artwork</th>
              <th className="text-left p-3 font-medium text-sm">Views</th>
              <th className="text-left p-3 font-medium text-sm">Likes</th>
              <th className="text-left p-3 font-medium text-sm">Date</th>
              <th className="text-left p-3 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {artworks.map((artwork) => (
              <tr key={artwork.id} className="hover:bg-muted/30">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded overflow-hidden">
                      <img
                        src={artwork.imageUrl || "/placeholder.svg"}
                        alt={artwork.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <Link href={`/artwork/${artwork.id}`} className="font-medium hover:underline">
                        {artwork.title}
                      </Link>
                      <div className="text-xs text-muted-foreground">{artwork.category}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3 text-muted-foreground" />
                    <span>{artwork.views}</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3 text-muted-foreground" />
                    <span>{artwork.likes}</span>
                  </div>
                </td>
                <td className="p-3 text-sm">{new Date(artwork.publishedAt).toLocaleDateString()}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/dashboard/artworks/${artwork.id}/edit`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

