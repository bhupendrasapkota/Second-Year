"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { uploadArtwork } from "@/lib/actions"
import { useRouter } from "next/navigation"

export function UploadForm({
  categories,
  licenses,
}: {
  categories: { id: string; name: string }[]
  licenses: { id: string; name: string }[]
}) {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    license: "",
    tags: "",
  })
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // Create preview
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      alert("Please select an image to upload")
      return
    }

    try {
      setIsUploading(true)

      const formDataToSend = new FormData()
      formDataToSend.append("file", file)
      formDataToSend.append("title", formData.title)
      formDataToSend.append("description", formData.description)
      formDataToSend.append("category", formData.category)
      formDataToSend.append("license", formData.license)
      formDataToSend.append("tags", formData.tags)

      const artworkId = await uploadArtwork(formDataToSend)

      // Redirect to the artwork page
      router.push(`/artwork/${artworkId}`)
    } catch (error) {
      console.error("Upload failed:", error)
      alert("Failed to upload artwork. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-2 border-dashed rounded-xl p-12 mb-8 text-center border-gray-200 dark:border-gray-800">
        {preview ? (
          <div className="space-y-4">
            <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-80 mx-auto object-contain" />
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFile(null)
                setPreview(null)
              }}
            >
              Remove image
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
              <Upload className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Drag and drop your artwork here</h3>
              <p className="text-muted-foreground mb-4">Supports JPG, PNG, GIF files. Max file size 20MB.</p>
              <Button type="button" variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                Select from computer
              </Button>
              <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Artwork Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter a descriptive title"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Tell the story behind your artwork"
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="license">License</Label>
            <Select value={formData.license} onValueChange={(value) => handleSelectChange("license", value)}>
              <SelectTrigger id="license">
                <SelectValue placeholder="Select license" />
              </SelectTrigger>
              <SelectContent>
                {licenses.map((license) => (
                  <SelectItem key={license.id} value={license.id}>
                    {license.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Tags (separated by commas)</Label>
          <Input
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="art, digital, abstract"
          />
        </div>

        <div className="pt-6 flex justify-end gap-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Publish Artwork"}
          </Button>
        </div>
      </div>
    </form>
  )
}

