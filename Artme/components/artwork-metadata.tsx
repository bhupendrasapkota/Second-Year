export function ArtworkMetadata({ artwork }: { artwork: any }) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
      <h3 className="font-medium mb-4">Image Information</h3>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Published</dt>
          <dd>{new Date(artwork.publishedAt).toLocaleDateString()}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Dimensions</dt>
          <dd>{artwork.dimensions.original}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Format</dt>
          <dd>{artwork.format}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Size</dt>
          <dd>{artwork.fileSize}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">License</dt>
          <dd>{artwork.license}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Views</dt>
          <dd>{artwork.views}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Downloads</dt>
          <dd>{artwork.downloads}</dd>
        </div>
      </dl>
    </div>
  )
}

