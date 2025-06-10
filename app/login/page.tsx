"use client"

import { signIn, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user is already logged in
    getSession().then((session) => {
      if (session) {
        router.push("/dashboard")
      }
    })
  }, [router])

  const handleSignIn = async (provider: "github" | "google") => {
    setIsLoading(true)
    try {
      await signIn(provider, { 
        callbackUrl: "/dashboard",
        redirect: true 
      })
    } catch (error) {
      console.error("Sign in error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="text-2xl font-bold">
            PROBLEMBASE
          </a>
        </div>

        {/* Login Form */}
        <div className="border-2 border-black p-8">
          <h1 className="text-2xl font-bold text-center mb-8">WELCOME BACK</h1>

          <div className="space-y-4">
            <button 
              onClick={() => handleSignIn("github")}
              disabled={isLoading}
              className="w-full bg-black text-white py-3 border-2 border-black hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "SIGNING IN..." : "CONTINUE WITH GITHUB"}
            </button>

            <button 
              onClick={() => handleSignIn("google")}
              disabled={isLoading}
              className="w-full bg-white text-black py-3 border-2 border-black hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "SIGNING IN..." : "CONTINUE WITH GOOGLE"}
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="/register" className="underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
