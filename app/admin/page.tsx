"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple password check (you should use proper authentication in production)
    if (password === "triignite2024") {
      // Store auth in sessionStorage (simple approach)
      sessionStorage.setItem("admin-auth", "true")
      router.push("/admin/messages")
    } else {
      setError("Invalid password")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Lock className="h-12 w-12 mx-auto mb-4 text-primary" />
          <CardTitle>Admin Access</CardTitle>
          <CardDescription>Enter password to view contact messages</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && <div className="text-sm text-red-600 dark:text-red-400">{error}</div>}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Checking..." : "Access Messages"}
            </Button>
          </form>
          <div className="mt-4 text-xs text-muted-foreground text-center">Default password: triignite2024</div>
        </CardContent>
      </Card>
    </div>
  )
}
