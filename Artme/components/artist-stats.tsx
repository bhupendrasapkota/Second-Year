export function ArtistStats({ artist }: { artist: any }) {
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3">
        <div className="text-2xl font-bold">{artist.artworkCount}</div>
        <div className="text-xs text-muted-foreground">Artworks</div>
      </div>
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3">
        <div className="text-2xl font-bold">{artist.followers || 0}</div>
        <div className="text-xs text-muted-foreground">Followers</div>
      </div>
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3">
        <div className="text-2xl font-bold">{artist.totalViews || 0}</div>
        <div className="text-xs text-muted-foreground">Views</div>
      </div>
    </div>
  )
}

