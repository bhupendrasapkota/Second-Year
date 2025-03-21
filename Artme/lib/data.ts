// This file simulates a database connection
// In a real application, this would connect to a database like PostgreSQL

// Sample data for artworks
const artworksData = [
  {
    id: 1,
    title: "Urban Landscape",
    description:
      "A striking black and white cityscape capturing the essence of modern urban architecture with dramatic shadows and contrasts.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-02-15T12:00:00Z",
    likes: 124,
    views: 1872,
    downloads: 43,
    format: "JPEG",
    fileSize: "8.2 MB",
    license: "Creative Commons",
    category: "Urban",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Urban", "Architecture", "Black and White"],
    artist: {
      id: 1,
      name: "Alex Morgan",
      title: "Professional Photographer",
      bio: "Capturing urban landscapes and architectural marvels for over a decade.",
      avatarUrl: null,
      followers: 245,
    },
  },
  {
    id: 2,
    title: "Minimalist Portrait",
    description:
      "A powerful minimalist portrait that explores human emotion through stark contrasts and negative space.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-02-10T15:30:00Z",
    likes: 89,
    views: 1243,
    downloads: 27,
    format: "JPEG",
    fileSize: "5.7 MB",
    license: "Creative Commons",
    category: "Portrait",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Portrait", "Minimalist", "Monochrome"],
    artist: {
      id: 2,
      name: "Sarah Chen",
      title: "Portrait Artist",
      bio: "Exploring human emotions through minimalist black and white portraits.",
      avatarUrl: null,
      followers: 189,
    },
  },
  {
    id: 3,
    title: "Abstract Geometry",
    description:
      "A complex geometric composition that plays with perception and spatial relationships through bold lines and shapes.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-02-05T09:15:00Z",
    likes: 156,
    views: 2105,
    downloads: 62,
    format: "JPEG",
    fileSize: "7.1 MB",
    license: "Creative Commons",
    category: "Abstract",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Abstract", "Geometric", "Modern"],
    artist: {
      id: 3,
      name: "Marcus Williams",
      title: "Abstract Artist",
      bio: "Creating geometric abstractions that challenge perception and spatial understanding.",
      avatarUrl: null,
      followers: 312,
    },
  },
  {
    id: 4,
    title: "Shadows and Light",
    description: "An exploration of natural light and shadow creating dramatic patterns across everyday objects.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-01-28T14:45:00Z",
    likes: 72,
    views: 986,
    downloads: 19,
    format: "JPEG",
    fileSize: "6.3 MB",
    license: "Creative Commons",
    category: "Still Life",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Light", "Shadow", "Still Life"],
    artist: {
      id: 1,
      name: "Alex Morgan",
      title: "Professional Photographer",
      bio: "Capturing urban landscapes and architectural marvels for over a decade.",
      avatarUrl: null,
      followers: 245,
    },
  },
  {
    id: 5,
    title: "Textural Study",
    description: "A detailed examination of natural and man-made textures in high contrast black and white.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-01-20T11:30:00Z",
    likes: 94,
    views: 1432,
    downloads: 38,
    format: "JPEG",
    fileSize: "9.5 MB",
    license: "Creative Commons",
    category: "Texture",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Texture", "Detail", "Nature"],
    artist: {
      id: 4,
      name: "Elena Rodriguez",
      title: "Texture Artist",
      bio: "Finding beauty in the details and textures that surround us in everyday life.",
      avatarUrl: null,
      followers: 167,
    },
  },
  {
    id: 6,
    title: "Negative Space",
    description:
      "A composition that leverages negative space to create a powerful visual narrative about absence and presence.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-01-15T16:20:00Z",
    likes: 118,
    views: 1765,
    downloads: 45,
    format: "JPEG",
    fileSize: "4.8 MB",
    license: "Creative Commons",
    category: "Conceptual",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Negative Space", "Minimalist", "Conceptual"],
    artist: {
      id: 2,
      name: "Sarah Chen",
      title: "Portrait Artist",
      bio: "Exploring human emotions through minimalist black and white portraits.",
      avatarUrl: null,
      followers: 189,
    },
  },
  {
    id: 7,
    title: "Industrial Forms",
    description: "A study of industrial architecture and machinery, highlighting the beauty in functional design.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-01-10T10:00:00Z",
    likes: 67,
    views: 876,
    downloads: 21,
    format: "JPEG",
    fileSize: "7.9 MB",
    license: "Creative Commons",
    category: "Industrial",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Industrial", "Architecture", "Machinery"],
    artist: {
      id: 5,
      name: "David Kim",
      title: "Industrial Photographer",
      bio: "Finding beauty in industrial landscapes and the intersection of form and function.",
      avatarUrl: null,
      followers: 134,
    },
  },
  {
    id: 8,
    title: "Motion Blur",
    description: "Capturing the essence of movement through intentional motion blur in an urban setting.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-01-05T13:15:00Z",
    likes: 83,
    views: 1123,
    downloads: 29,
    format: "JPEG",
    fileSize: "6.7 MB",
    license: "Creative Commons",
    category: "Street",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Motion", "Urban", "Street"],
    artist: {
      id: 1,
      name: "Alex Morgan",
      title: "Professional Photographer",
      bio: "Capturing urban landscapes and architectural marvels for over a decade.",
      avatarUrl: null,
      followers: 245,
    },
  },
  {
    id: 9,
    title: "Reflections",
    description: "A series exploring reflections in water and glass, creating abstract interpretations of reality.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2025-01-01T09:30:00Z",
    likes: 105,
    views: 1587,
    downloads: 37,
    format: "JPEG",
    fileSize: "8.4 MB",
    license: "Creative Commons",
    category: "Abstract",
    dimensions: {
      small: "1200 × 800",
      medium: "2400 × 1600",
      original: "4800 × 3200",
    },
    tags: ["Reflections", "Water", "Abstract"],
    artist: {
      id: 3,
      name: "Marcus Williams",
      title: "Abstract Artist",
      bio: "Creating geometric abstractions that challenge perception and spatial understanding.",
      avatarUrl: null,
      followers: 312,
    },
  },
]

// Categories
const categoriesData = [
  { id: "abstract", name: "Abstract" },
  { id: "portrait", name: "Portrait" },
  { id: "landscape", name: "Landscape" },
  { id: "urban", name: "Urban" },
  { id: "nature", name: "Nature" },
  { id: "architecture", name: "Architecture" },
  { id: "street", name: "Street" },
  { id: "conceptual", name: "Conceptual" },
  { id: "minimalist", name: "Minimalist" },
]

// Licenses
const licensesData = [
  { id: "cc0", name: "CC0 - Public Domain" },
  { id: "cc-by", name: "CC BY - Attribution" },
  { id: "cc-by-sa", name: "CC BY-SA - Attribution-ShareAlike" },
  { id: "cc-by-nc", name: "CC BY-NC - Attribution-NonCommercial" },
  { id: "cc-by-nd", name: "CC BY-ND - Attribution-NoDerivs" },
  { id: "cc-by-nc-sa", name: "CC BY-NC-SA - Attribution-NonCommercial-ShareAlike" },
  { id: "cc-by-nc-nd", name: "CC BY-NC-ND - Attribution-NonCommercial-NoDerivs" },
]

// Collections
const collectionsData = [
  {
    id: 1,
    name: "Urban Exploration",
    slug: "urban-exploration",
    description: "A collection of urban landscapes and architectural photography in striking black and white.",
    coverImage: "/placeholder.svg?height=400&width=600",
    artworkCount: 12,
  },
  {
    id: 2,
    name: "Minimalist Portraits",
    slug: "minimalist-portraits",
    description: "Powerful portraits that explore human emotion through stark contrasts and negative space.",
    coverImage: "/placeholder.svg?height=400&width=600",
    artworkCount: 8,
  },
  {
    id: 3,
    name: "Abstract Geometry",
    slug: "abstract-geometry",
    description:
      "Geometric compositions that play with perception and spatial relationships through bold lines and shapes.",
    coverImage: "/placeholder.svg?height=400&width=600",
    artworkCount: 15,
  },
  {
    id: 4,
    name: "Light & Shadow",
    slug: "light-and-shadow",
    description: "Explorations of natural light and shadow creating dramatic patterns across various subjects.",
    coverImage: "/placeholder.svg?height=400&width=600",
    artworkCount: 10,
  },
  {
    id: 5,
    name: "Textural Studies",
    slug: "textural-studies",
    description: "Detailed examinations of natural and man-made textures in high contrast black and white.",
    coverImage: "/placeholder.svg?height=400&width=600",
    artworkCount: 7,
  },
  {
    id: 6,
    name: "Industrial Beauty",
    slug: "industrial-beauty",
    description: "Studies of industrial architecture and machinery, highlighting the beauty in functional design.",
    coverImage: "/placeholder.svg?height=400&width=600",
    artworkCount: 9,
  },
]

// Artists
const artistsData = [
  {
    id: 1,
    name: "Alex Morgan",
    title: "Professional Photographer",
    bio: "Capturing urban landscapes and architectural marvels for over a decade.",
    fullBio:
      "Alex Morgan is a renowned photographer specializing in urban landscapes and architectural photography. With over a decade of experience, Alex has developed a distinctive style characterized by dramatic contrasts and meticulous attention to composition. Based in New York City, Alex finds inspiration in the interplay of light and shadow across urban environments, transforming ordinary cityscapes into compelling visual narratives.",
    avatarUrl: null,
    followers: 245,
    artworkCount: 37,
    totalViews: 24560,
    featuredArtworks: [
      { id: 1, title: "Urban Landscape", imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 4, title: "Shadows and Light", imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 8, title: "Motion Blur", imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 12, title: "City Reflections", imageUrl: "/placeholder.svg?height=300&width=300" },
    ],
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Portrait Artist",
    bio: "Exploring human emotions through minimalist black and white portraits.",
    fullBio:
      "Sarah Chen is a portrait artist whose work delves into the depths of human emotion through a minimalist black and white aesthetic. Her portraits strip away distractions, focusing on the essential elements that convey feeling and character. With a background in psychology, Sarah approaches each portrait as a collaboration between artist and subject, seeking to reveal inner truths through careful observation and artistic interpretation.",
    avatarUrl: null,
    followers: 189,
    artworkCount: 24,
    totalViews: 18750,
    featuredArtworks: [
      { id: 2, title: "Minimalist Portrait", imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 6, title: "Negative Space", imageUrl: "/placeholder.svg?height=300&width=300" },
    ],
  },
  {
    id: 3,
    name: "Marcus Williams",
    title: "Abstract Artist",
    bio: "Creating geometric abstractions that challenge perception and spatial understanding.",
    fullBio:
      "Marcus Williams is an abstract artist whose work focuses on geometric compositions that challenge conventional perceptions of space and form. Drawing inspiration from architectural principles and mathematical concepts, Marcus creates visually complex pieces that invite viewers to reconsider their understanding of spatial relationships. His work has been featured in galleries across Europe and North America, earning recognition for its innovative approach to abstract expression.",
    avatarUrl: null,
    followers: 312,
    artworkCount: 42,
    totalViews: 31200,
    featuredArtworks: [
      { id: 3, title: "Abstract Geometry", imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 9, title: "Reflections", imageUrl: "/placeholder.svg?height=300&width=300" },
    ],
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    title: "Texture Artist",
    bio: "Finding beauty in the details and textures that surround us in everyday life.",
    fullBio:
      "Elena Rodriguez is a texture artist who finds extraordinary beauty in the overlooked details of everyday objects and surfaces. Her macro photography reveals the intricate patterns and textures that exist just beyond our normal perception, transforming the mundane into the magnificent. Elena's work encourages viewers to slow down and appreciate the complexity and beauty that exists in the smallest details of our world.",
    avatarUrl: null,
    followers: 167,
    artworkCount: 29,
    totalViews: 15800,
    featuredArtworks: [{ id: 5, title: "Textural Study", imageUrl: "/placeholder.svg?height=300&width=300" }],
  },
  {
    id: 5,
    name: "David Kim",
    title: "Industrial Photographer",
    bio: "Finding beauty in industrial landscapes and the intersection of form and function.",
    fullBio:
      "David Kim is an industrial photographer who specializes in documenting the aesthetic qualities of functional spaces and machinery. With a background in engineering, David brings a unique perspective to his work, highlighting the inherent beauty in designs created primarily for utility. His photographs of factories, power plants, and industrial complexes reveal the unexpected elegance of these environments, celebrating human ingenuity and the visual impact of industrial design.",
    avatarUrl: null,
    followers: 134,
    artworkCount: 18,
    totalViews: 12400,
    featuredArtworks: [{ id: 7, title: "Industrial Forms", imageUrl: "/placeholder.svg?height=300&width=300" }],
  },
]

// Comments
const commentsData = [
  {
    id: 1,
    artworkId: 1,
    user: {
      id: 101,
      name: "Jamie Smith",
      avatarUrl: null,
    },
    content:
      "The contrast in this image is absolutely stunning. I love how you've captured the interplay of light and shadow across the urban landscape.",
    createdAt: "2025-03-10T14:23:00Z",
  },
  {
    id: 2,
    artworkId: 1,
    user: {
      id: 102,
      name: "Taylor Johnson",
      avatarUrl: null,
    },
    content: "This reminds me of the architectural photography of Berenice Abbott. The composition is masterful.",
    createdAt: "2025-03-09T18:45:00Z",
  },
  {
    id: 3,
    artworkId: 1,
    user: {
      id: 103,
      name: "Jordan Lee",
      avatarUrl: null,
    },
    content:
      "I'm always amazed by how black and white photography can convey so much emotion. This piece is no exception.",
    createdAt: "2025-03-08T09:12:00Z",
  },
]

// Trending tags
const trendingTagsData = [
  { id: "abstract", name: "Abstract", slug: "abstract" },
  { id: "nature", name: "Nature", slug: "nature" },
  { id: "digital-art", name: "Digital Art", slug: "digital-art" },
  { id: "photography", name: "Photography", slug: "photography" },
  { id: "illustrations", name: "Illustrations", slug: "illustrations" },
  { id: "minimalist", name: "Minimalist", slug: "minimalist" },
  { id: "portrait", name: "Portrait", slug: "portrait" },
]

// Featured collections
const featuredCollectionsData = collectionsData.slice(0, 3)

// Dashboard data
const dashboardData = {
  stats: {
    totalArtworks: 12,
    totalViews: 8745,
    totalLikes: 342,
    totalDownloads: 87,
  },
  artworks: [
    {
      id: 1,
      title: "Urban Landscape",
      imageUrl: "/placeholder.svg?height=100&width=100",
      category: "Urban",
      views: 1872,
      likes: 124,
      publishedAt: "2025-02-15T12:00:00Z",
    },
    {
      id: 4,
      title: "Shadows and Light",
      imageUrl: "/placeholder.svg?height=100&width=100",
      category: "Still Life",
      views: 986,
      likes: 72,
      publishedAt: "2025-01-28T14:45:00Z",
    },
    {
      id: 8,
      title: "Motion Blur",
      imageUrl: "/placeholder.svg?height=100&width=100",
      category: "Street",
      views: 1123,
      likes: 83,
      publishedAt: "2025-01-05T13:15:00Z",
    },
  ],
  activities: [
    {
      id: 1,
      user: {
        id: 101,
        name: "Jamie Smith",
        avatarUrl: null,
      },
      action: "liked your artwork",
      artwork: {
        id: 1,
        title: "Urban Landscape",
      },
      createdAt: "2025-03-10T14:23:00Z",
    },
    {
      id: 2,
      user: {
        id: 102,
        name: "Taylor Johnson",
        avatarUrl: null,
      },
      action: "commented on your artwork",
      artwork: {
        id: 1,
        title: "Urban Landscape",
      },
      createdAt: "2025-03-09T18:45:00Z",
    },
    {
      id: 3,
      user: {
        id: 103,
        name: "Jordan Lee",
        avatarUrl: null,
      },
      action: "downloaded your artwork",
      artwork: {
        id: 4,
        title: "Shadows and Light",
      },
      createdAt: "2025-03-08T09:12:00Z",
    },
  ],
}

// Data access functions
export async function getArtworks() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return artworksData
}

export async function getArtworkById(id: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return artworksData.find((artwork) => artwork.id === id) || null
}

export async function getSimilarArtworks(id: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Get the current artwork
  const artwork = artworksData.find((a) => a.id === id)
  if (!artwork) return []

  // Find artworks with similar tags or by the same artist
  return artworksData
    .filter(
      (a) =>
        a.id !== id && (a.artist.id === artwork.artist.id || a.tags.some((tag: string) => artwork.tags.includes(tag))),
    )
    .slice(0, 3)
}

export async function getArtworkComments(id: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return commentsData.filter((comment) => comment.artworkId === id)
}

export async function getCategories() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 50))
  return categoriesData
}

export async function getLicenses() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 50))
  return licensesData
}

export async function getCollections() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return collectionsData
}

export async function getFeaturedCollections() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return featuredCollectionsData
}

export async function getCollectionBySlug(slug: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return collectionsData.find((collection) => collection.slug === slug) || null
}

export async function getArtworksByCollection(collectionId: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // In a real app, this would query artworks by collection
  // For now, we'll just return a subset of artworks
  return artworksData.slice(0, 6)
}

export async function getArtists() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return artistsData
}

export async function getArtistById(id: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return artistsData.find((artist) => artist.id === id) || null
}

export async function getArtworksByArtist(artistId: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Filter artworks by artist ID
  return artworksData.filter((artwork) => artwork.artist.id === artistId)
}

export async function getFeaturedArtist() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // For now, just return the first artist
  return artistsData[0]
}

export async function getTrendingTags() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 50))
  return trendingTagsData
}

export async function getUserDashboard() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 150))
  return dashboardData
}

