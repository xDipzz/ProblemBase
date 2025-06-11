"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Plus, Search, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            PROBLEMBASE
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="/explore"
              className="text-sm font-medium hover:bg-foreground hover:text-background px-3 py-2 transition-colors"
            >
              EXPLORE
            </Link>
            <Link
              href="/showcase"
              className="text-sm font-medium hover:bg-foreground hover:text-background px-3 py-2 transition-colors"
            >
              SHOWCASE
            </Link>
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" className="text-sm">
                SIGN IN
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-black leading-none tracking-tighter">
              REAL
              <br />
              PROBLEMS
            </h1>
            <div className="w-full h-px bg-border"></div>
            <h2 className="text-3xl md:text-4xl font-black leading-none tracking-tighter">
              REAL
              <br />
              BUILDERS
            </h2>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed mt-12">
              Connect problems with builders to power the next wave of innovation. Submit your challenges, discover
              opportunities, and build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link href="/submit">
                <Button size="lg" className="px-8 py-4 text-sm font-bold tracking-wide">
                  SUBMIT PROBLEM
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/explore">
                <Button size="lg" variant="outline" className="px-8 py-4 text-sm font-bold tracking-wide">
                  EXPLORE PROBLEMS
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Inverted Section */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tighter">HOW IT WORKS</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 border-2 border-background flex items-center justify-center mx-auto">
                  <span className="text-2xl font-black">01</span>
                </div>
                <h3 className="text-xl font-black tracking-tight">SUBMIT</h3>
                <p className="text-sm leading-relaxed">
                  Share your real-world problems and challenges that need innovative solutions from the community.
                </p>
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 border-2 border-background flex items-center justify-center mx-auto">
                  <span className="text-2xl font-black">02</span>
                </div>
                <h3 className="text-xl font-black tracking-tight">BUILD</h3>
                <p className="text-sm leading-relaxed">
                  Developers explore problems and create MVPs to solve real challenges that matter.
                </p>
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 border-2 border-background flex items-center justify-center mx-auto">
                  <span className="text-2xl font-black">03</span>
                </div>
                <h3 className="text-xl font-black tracking-tight">SHOWCASE</h3>
                <p className="text-sm leading-relaxed">
                  Share your solutions, get feedback, and build your reputation in the community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tighter">WHY PROBLEMBASE?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-border p-8 hover:bg-foreground hover:text-background transition-colors cursor-pointer">
                <div className="space-y-4">
                  <Plus className="w-8 h-8" />
                  <h3 className="text-lg font-black tracking-tight">REAL PROBLEMS</h3>
                  <p className="text-sm leading-relaxed">
                    Work on actual challenges that matter to real people and businesses.
                  </p>
                </div>
              </div>
              <div className="border-2 border-border p-8 hover:bg-foreground hover:text-background transition-colors cursor-pointer">
                <div className="space-y-4">
                  <Users className="w-8 h-8" />
                  <h3 className="text-lg font-black tracking-tight">COMMUNITY BUILDERS</h3>
                  <p className="text-sm leading-relaxed">
                    Connect with talented developers and collaborate on meaningful projects.
                  </p>
                </div>
              </div>
              <div className="border-2 border-border p-8 hover:bg-foreground hover:text-background transition-colors cursor-pointer">
                <div className="space-y-4">
                  <Search className="w-8 h-8" />
                  <h3 className="text-lg font-black tracking-tight">MVP SHOWCASES</h3>
                  <p className="text-sm leading-relaxed">
                    Display your solutions and get valuable feedback from the community.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Inverted Section */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-12 text-center"
          >
            <div>
              <div className="text-3xl font-black mb-2">247</div>
              <div className="text-sm font-medium tracking-wide">PROBLEMS SUBMITTED</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">89</div>
              <div className="text-sm font-medium tracking-wide">ACTIVE BUILDERS</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">156</div>
              <div className="text-sm font-medium tracking-wide">MVPS BUILT</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">42</div>
              <div className="text-sm font-medium tracking-wide">COMPANIES STARTED</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-lg font-black tracking-tight">PROBLEMBASE</div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm font-medium hover:bg-foreground hover:text-background px-3 py-2 transition-colors"
              >
                GITHUB
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:bg-foreground hover:text-background px-3 py-2 transition-colors"
              >
                TWITTER
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:bg-foreground hover:text-background px-3 py-2 transition-colors"
              >
                DISCORD
              </a>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border text-center">
            <p className="text-sm font-medium">&copy; 2025 PROBLEMBASE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
