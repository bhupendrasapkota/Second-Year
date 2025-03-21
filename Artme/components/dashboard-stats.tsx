export function DashboardStats({ stats }: { stats: any }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4">
        <div className="text-sm text-muted-foreground">Total Artworks</div>
        <div className="text-3xl font-bold mt-1">{stats.totalArtworks}</div>
      </div>
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4">
        <div className="text-sm text-muted-foreground">Total Views</div>
        <div className="text-3xl font-bold mt-1">{stats.totalViews}</div>
      </div>
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4">
        <div className="text-sm text-muted-foreground">Total Likes</div>
        <div className="text-3xl font-bold mt-1">{stats.totalLikes}</div>
      </div>
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4">
        <div className="text-sm text-muted-foreground">Total Downloads</div>
        <div className="text-3xl font-bold mt-1">{stats.totalDownloads}</div>
      </div>
    </div>
  )
}

