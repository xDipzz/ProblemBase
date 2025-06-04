// phase1.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

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
            <Link href="/explore" className="text-sm font-medium px-3 py-2">
              EXPLORE
            </Link>
            <Link href="/showcase" className="text-sm font-medium px-3 py-2">
              SHOWCASE
            </Link>
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" className="text-sm">SIGN IN</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">REAL<br />PROBLEMS</h1>
          <div className="w-full h-px bg-border" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">REAL<br />BUILDERS</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-12">
            Connect problems with builders to power the next wave of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link href="/submit"><Button size="lg">SUBMIT PROBLEM</Button></Link>
            <Link href="/explore"><Button size="lg" variant="outline">EXPLORE PROBLEMS</Button></Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">HOW IT WORKS</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Each Step Card */}
            {["SUBMIT", "BUILD", "SHOWCASE"].map((step, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 border-2 mx-auto flex items-center justify-center">
                  <span className="text-2xl font-black">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-black">{step}</h3>
                <p className="text-sm leading-relaxed">
                  {step === "SUBMIT" ? "Share real-world problems." :
                   step === "BUILD" ? "Developers build MVPs." :
                   "Showcase and get feedback."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">WHY PROBLEMBASE?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Cards - no icons in this phase */}
            <div className="border-2 p-8">REAL PROBLEMS</div>
            <div className="border-2 p-8">COMMUNITY BUILDERS</div>
            <div className="border-2 p-8">MVP SHOWCASES</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {["247", "89", "156", "42"].map((num, i) => (
            <div key={i}>
              <div className="text-3xl font-black mb-2">{num}</div>
              <div className="text-sm font-medium">
                {["PROBLEMS SUBMITTED", "ACTIVE BUILDERS", "MVPS BUILT", "COMPANIES STARTED"][i]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-black tracking-tight">PROBLEMBASE</div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm font-medium">GITHUB</a>
              <a href="#" className="text-sm font-medium">TWITTER</a>
              <a href="#" className="text-sm font-medium">DISCORD</a>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t text-center">
            <p className="text-sm font-medium">&copy; 2024 PROBLEMBASE.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
