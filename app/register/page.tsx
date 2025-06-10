"use client"

import { signIn, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function RegisterPage() {
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

  const handleSignUp = async (provider: "github" | "google") => {
    setIsLoading(true)
    try {
      await signIn(provider, { 
        callbackUrl: "/dashboard",
        redirect: true 
      })
    } catch (error) {
      console.error("Sign up error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="text-2xl font-bold text-white">
            PROBLEMBASE
          </a>
        </div>

        {/* Register Form */}
        <div className="border-2 border-white p-8">
          <h1 className="text-2xl font-bold text-center mb-8">JOIN PROBLEMBASE</h1>

          <div className="space-y-4">
            <button 
              onClick={() => handleSignUp("github")}
              disabled={isLoading}
              className="w-full bg-white text-black py-3 border-2 border-white hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "SIGNING UP..." : "SIGN UP WITH GITHUB"}
            </button>

            <button 
              onClick={() => handleSignUp("google")}
              disabled={isLoading}
              className="w-full bg-black text-white py-3 border-2 border-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "SIGNING UP..." : "SIGN UP WITH GOOGLE"}
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/login" className="underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
