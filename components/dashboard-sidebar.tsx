"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/hooks/use-auth"
import { signOut } from "next-auth/react"
import { 
  Home, 
  Plus, 
  Search, 
  User, 
  Rocket, 
  Settings, 
  LogOut, 
  Shield 
} from "lucide-react"
import { cn } from "@/lib/utils"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user } = useAuth()

  const navigation = [
    { name: "DASHBOARD", href: "/dashboard", icon: Home },
    { name: "SUBMIT", href: "/submit", icon: Plus },
    { name: "EXPLORE", href: "/explore", icon: Search },
    { name: "PROFILE", href: "/profile", icon: User },
    { name: "SHOWCASE", href: "/showcase", icon: Rocket },
  ]

  const adminNavigation = [
    { name: "ADMIN", href: "/admin", icon: Shield }
  ]

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:top-16">
      <div className="flex flex-col flex-grow border-r-2 border-border bg-background">
        {/* Navigation */}
        <nav className="flex-1 py-6 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 text-sm font-bold tracking-wide transition-colors rounded-md",
                  isActive 
                    ? "bg-foreground text-background" 
                    : "text-foreground hover:bg-foreground hover:text-background"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}

          {user?.role === "admin" && (
            <>
              <div className="border-t border-border my-3"></div>
              {adminNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 text-sm font-bold tracking-wide transition-colors rounded-md",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-foreground hover:bg-foreground hover:text-background"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </>
          )}
        </nav>

        {/* User Section */}
        {user && (
          <div className="p-4 border-t-2 border-border">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  {user.image ? (
                    <img 
                      src={user.image} 
                      alt={user.name || ""} 
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <span className="text-sm font-bold">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
              </div>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-full justify-start hover:bg-foreground hover:text-background text-sm font-bold tracking-wide"
                >
                  <Link href="/profile">
                    <Settings className="w-4 h-4 mr-2" />
                    SETTINGS
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="w-full justify-start hover:bg-foreground hover:text-background text-sm font-bold tracking-wide"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  SIGN OUT
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 