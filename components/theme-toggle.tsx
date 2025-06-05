"use client"

import { Moon, Sun, Monitor, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleToggle = async () => {
    setIsTransitioning(true)
    
    // Small delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 150))
    
    toggleTheme()
    
    // Wait for transition to complete
    await new Promise(resolve => setTimeout(resolve, 300))
    setIsTransitioning(false)
  }

  const getIcon = () => {
    if (isTransitioning) {
      return <Loader2 className="h-4 w-4 animate-spin" />
    }
    
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4 animate-in spin-in-180 duration-300" />
      case "dark":
        return <Moon className="h-4 w-4 animate-in spin-in-180 duration-300" />
      case "auto":
        return <Monitor className="h-4 w-4 animate-in spin-in-180 duration-300" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    if (isTransitioning) return "Switching theme..."
    
    switch (theme) {
      case "light":
        return "Switch to dark theme"
      case "dark":
        return "Switch to auto theme"
      case "auto":
        return "Switch to light theme"
      default:
        return "Toggle theme"
    }
  }

  const getNextTheme = () => {
    switch (theme) {
      case "light":
        return "dark"
      case "dark":
        return "auto"
      case "auto":
        return "light"
      default:
        return "auto"
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      disabled={isTransitioning}
      className="border-2 border-current hover:bg-current hover:text-background transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label={getLabel()}
      title={isTransitioning ? "Switching theme..." : `Current: ${theme} theme. Click to switch to ${getNextTheme()}`}
    >
      {getIcon()}
      <span className="sr-only">{getLabel()}</span>
    </Button>
  )
}
