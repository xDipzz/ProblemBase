"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, Plus, Search, User, Rocket, Settings, LogOut, Menu, Bell, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "DASHBOARD", href: "/dashboard", icon: Home },
    { name: "SUBMIT", href: "/submit", icon: Plus },
    { name: "EXPLORE", href: "/explore", icon: Search },
    { name: "PROFILE", href: "/profile/George c", icon: User },
    { name: "SHOWCASE", href: "/showcase", icon: Rocket },
    { name: "SETTINGS", href: "/settings", icon: Settings },
  ]

  const adminNavigation = [{ name: "ADMIN", href: "/admin", icon: Shield }]

  // Mock user data
  const user = {
    name: "George Sharma",
    email: "George @example.com",
    role: "user", // or "admin"
  }

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigation.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => mobile && setIsMobileMenuOpen(false)}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 text-sm font-bold tracking-wide transition-colors",
              isActive ? "bg-foreground text-background" : "text-foreground hover:bg-foreground hover:text-background",
            )}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </Link>
        )
      })}

      {user.role === "admin" && (
        <>
          <div className="border-t border-border my-3"></div>
          {adminNavigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => mobile && setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 text-sm font-bold tracking-wide transition-colors",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-foreground hover:bg-foreground hover:text-background",
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </>
      )}
    </>
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow border-r-2 border-border">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b-2 border-border">
            <Link href="/" className="text-lg font-black tracking-tight">
              PROBLEMBASE
            </Link>
            <ThemeToggle />
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 space-y-1">
            <NavItems />
          </nav>

          {/* User Menu */}
          <div className="p-4 border-t-2 border-border">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 px-3 py-2">
                <div className="w-8 h-8 border-2 border-border"></div>
                <div className="flex-1">
                  <p className="font-bold text-base">{user.name}</p>
                  <p className="text-xs font-mono">{user.email}</p>
                </div>
              </div>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-foreground hover:text-background text-sm font-bold tracking-wide"
                >
                  <User className="w-4 h-4 mr-2" />
                  PROFILE
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-foreground hover:text-background text-sm font-bold tracking-wide"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  SETTINGS
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-foreground hover:text-background text-sm font-bold tracking-wide"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  SIGN OUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between h-14 px-4 border-b-2 border-border">
          <Link href="/" className="text-base font-black tracking-tight">
            PROBLEMBASE
          </Link>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="ghost" className="hover:bg-foreground hover:text-background p-2">
              <Bell className="w-4 h-4" />
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="hover:bg-foreground hover:text-background p-2">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-background border-l-2 border-border p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center h-16 px-6 border-b-2 border-border">
                    <div className="text-lg font-black tracking-tight">PROBLEMBASE</div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 py-6 space-y-1">
                    <NavItems mobile />
                  </nav>

                  {/* User Menu */}
                  <div className="p-4 border-t-2 border-border">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 px-3 py-2">
                        <div className="w-8 h-8 border-2 border-border"></div>
                        <div className="flex-1">
                          <p className="font-bold text-base">{user.name}</p>
                          <p className="text-xs font-mono">{user.email}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-start hover:bg-foreground hover:text-background text-sm font-bold tracking-wide"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          SETTINGS
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start hover:bg-foreground hover:text-background text-sm font-bold tracking-wide"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          SIGN OUT
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="p-6">
          {children}
        </motion.main>
      </div>
    </div>
  )
}
