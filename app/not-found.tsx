import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto p-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold">404</h1>
          <div className="w-full h-px bg-black"></div>
          <h2 className="text-2xl font-bold">PAGE NOT FOUND</h2>
        </div>
        
        <p className="text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black">
              GO HOME
            </Button>
          </Link>
          
          <div className="text-sm">
            <Link href="/explore" className="text-black underline hover:no-underline">
              Explore Problems
            </Link>
            {" • "}
            <Link href="/submit" className="text-black underline hover:no-underline">
              Submit Problem
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 