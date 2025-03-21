"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/lib/actions"
import { ArrowRight, Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    try {
      setIsLoading(true)
      setMessage(null)

      const success = await subscribeToNewsletter(email)

      if (success) {
        setMessage({ type: "success", text: "Thank you for subscribing!" })
        setEmail("")
      } else {
        setMessage({ type: "error", text: "Failed to subscribe. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="border border-gray-200 dark:border-gray-800 p-12 text-center diagonal-split">
      <div className="flex justify-center mb-8">
        <div className="h-16 w-16 flex items-center justify-center border-2 border-black dark:border-white">
          <Mail className="h-8 w-8" />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">Stay updated</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Subscribe to our newsletter to get updates on new artwork, featured artists, and exclusive content.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 border-2 hover:border-black dark:hover:border-white transition-colors duration-300"
        />
        <Button type="submit" disabled={isLoading} className="group">
          {isLoading ? "Subscribing..." : "Subscribe"}
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>

      {message && (
        <div
          className={`mt-6 p-3 text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  )
}

