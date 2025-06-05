"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "auto"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  systemTheme: "light" | "dark"
}

const initialState: ThemeProviderState = {
  theme: "auto",
  setTheme: () => null,
  toggleTheme: () => null,
  systemTheme: "dark",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "auto",
  storageKey = "problembase-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("dark")

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemTheme(mediaQuery.matches ? "dark" : "light")

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark" || storedTheme === "auto")) {
      setTheme(storedTheme)
    } else {
      // If no stored theme, use the default theme
      setTheme(defaultTheme)
    }
  }, [storageKey, defaultTheme])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    
    const effectiveTheme = theme === "auto" ? systemTheme : theme
    root.classList.add(effectiveTheme)
    localStorage.setItem(storageKey, theme)
  }, [theme, systemTheme, storageKey])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("auto")
    } else {
      setTheme("light")
    }
  }

  const value = {
    theme,
    setTheme,
    toggleTheme,
    systemTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
