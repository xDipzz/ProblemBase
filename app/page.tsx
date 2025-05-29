"use client"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      
      <nav className="border-b-2 border-black p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">PROBLEMBASE</h1>
          <div className="space-x-4">
            <a href="/explore" className="hover:underline">
              EXPLORE
            </a>
            <a href="/login" className="hover:underline">
              LOGIN
            </a>
          </div>
        </div>
      </nav>

   
      <main className="max-w-6xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">REAL PROBLEMS</h1>
        <div className="w-full h-px bg-black mb-4"></div>
        <h2 className="text-3xl font-bold mb-8">REAL BUILDERS</h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Connect problems with builders to power the next wave of innovation.
        </p>

        <div className="space-x-4">
          <Link href="/submit">
            <button className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black">
              SUBMIT PROBLEM
            </button>
          </Link>
          <Link href="/explore">
            <button className="bg-white text-black px-6 py-3 border-2 border-black hover:bg-black hover:text-white">
              EXPLORE PROBLEMS
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
