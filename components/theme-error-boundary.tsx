"use client"

import React from "react"

interface ThemeErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ThemeErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export class ThemeErrorBoundary extends React.Component<
  ThemeErrorBoundaryProps,
  ThemeErrorBoundaryState
> {
  constructor(props: ThemeErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ThemeErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Theme Error Boundary caught an error:", error, errorInfo)
    
    // Reset theme to system default if there's an error
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("problembase-theme")
        document.documentElement.classList.remove("light", "dark")
        
        // Apply system theme as fallback
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        document.documentElement.classList.add(prefersDark ? "dark" : "light")
      } catch (e) {
        console.error("Failed to reset theme:", e)
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
            <div className="text-center space-y-4">
              <h2 className="text-xl font-bold">Theme Error</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Something went wrong with the theme system. The page has been reset to system defaults.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition-opacity"
              >
                Reload Page
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
} 