"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Plus, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-background border-b">
        <div className="max-w-6xl px-4 py-6 flex justify-around items-start">
          <Link href="/" className="font-bold text-xl">
            PROBLEMBASE
          </Link>
          <div className="flex gap-4">
            <Link href="/explore">
              <span>EXPLORE</span>
            </Link>
            <Link href="/showcase">
              <span>SHOWCASE</span>
            </Link>
            {/* Bug: ThemeToggle visually misaligned */}
            <ThemeToggle />
            {/* Bug: No <Link> wrapping button, won't route */}
            <Button variant="outline" size="sm">SIGN IN</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold tracking-tight">REAL PROBLEMS</h1>
          <p className="mt-4 text-md max-w-xl mx-auto">
            Connect with builders to solve meaningful challenges. Build the future now.
          </p>

          {/* Bug: Buttons overlap on small screens */}
          <div className="flex gap-3 mt-8 justify-center">
            <Link href="/submit">
              <Button size="lg">
                SUBMIT
                {/* Bug: Icon doesn't align vertically */}
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline" size="lg">
                EXPLORE
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-4">
          {/* Bug: Inconsistent spacing & icon color doesn't change on hover */}
          <div className="p-6 border rounded-lg hover:bg-muted cursor-pointer">
            <Plus className="w-6 h-6 mb-4" />
            <h3 className="font-semibold text-lg">Real Problems</h3>
            <p className="text-sm mt-2">Work on real-life problems shared by the community.</p>
          </div>
          <div className="p-6 border rounded-lg hover:bg-muted cursor-pointer">
            <Users className="w-6 h-6 mb-4" />
            <h3 className="font-semibold text-lg">Community Builders</h3>
            <p className="text-sm mt-2">Collaborate with others to build impactful solutions.</p>
          </div>
          <div className="p-6 border rounded-lg hover:bg-muted cursor-pointer">
            {/* Bug: Icon missing, not imported */}
            {/* <Search className="w-6 h-6 mb-4" /> */}
            <h3 className="font-semibold text-lg">Showcase MVPs</h3>
            <p className="text-sm mt-2">Get feedback on your solutions and gain exposure.</p>
          </div>
        </div>
      </section>

      {/* Bug: No footer, abrupt ending */}
    </div>
  )
}
