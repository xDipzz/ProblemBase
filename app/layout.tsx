import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeErrorBoundary } from "@/components/theme-error-boundary"
import { AuthProvider } from "@/components/auth-provider"

export const metadata: Metadata = {
  title: "ProblemBase - Connect Problems with Builders",
  description: "A platform to connect real problems with real builders to power the next wave of innovation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <AuthProvider>
          <ThemeErrorBoundary>
            <ThemeProvider defaultTheme="auto" storageKey="problembase-theme">
              {children}
            </ThemeProvider>
          </ThemeErrorBoundary>
        </AuthProvider>
      </body>
    </html>
  )
}
