"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Large 404 */}
          <div className="space-y-4">
            <motion.h1 
              className="text-8xl md:text-9xl font-black tracking-tighter text-muted-foreground/20"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              404
            </motion.h1>
            <div className="w-full h-px bg-border"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              PAGE NOT FOUND
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/">
              <Button size="lg" className="px-8 py-4 text-sm font-bold tracking-wide">
                <Home className="mr-2 w-4 h-4" />
                GO HOME
              </Button>
            </Link>
            <Link href="/explore">
              <Button size="lg" variant="outline" className="px-8 py-4 text-sm font-bold tracking-wide">
                <Search className="mr-2 w-4 h-4" />
                EXPLORE PROBLEMS
              </Button>
            </Link>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-sm font-medium"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 