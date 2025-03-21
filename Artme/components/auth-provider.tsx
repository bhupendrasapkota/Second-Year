"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: number
  name: string
  email: string
} | null

type AuthContextType = {
  user: User
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // In a real app, this would be an API call to check the session
        // For now, we'll just simulate it
        const storedUser = localStorage.getItem("user")

        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

