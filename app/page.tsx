"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight, Plus, Search, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted text-foreground font-sans antialiased relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-accent/10 blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur border-b border-border transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-black tracking-tight hover:opacity-90 transition-all">
            PROBLEMBASE
          </Link>
          <div className="flex items-center space-x-6">
            {[
              ["/explore", "EXPLORE"],
              ["/showcase", "SHOWCASE"]
            ].map(([href, label]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium px-3 py-2 rounded-md hover:bg-muted hover:text-primary transition-all"
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" className="text-sm font-semibold shadow hover:scale-105 transition-transform">
                SIGN IN
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center space-y-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-primary to-foreground text-transparent bg-clip-text">
              REAL<br />PROBLEMS
            </h1>
            <div className="w-20 mx-auto h-1 bg-border rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              REAL<br />BUILDERS
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
              Connect problems with builders to power the next wave of innovation.
              Submit challenges, discover opportunities, and build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Link href="/submit">
                <Button size="lg" className="px-8 py-4 text-sm font-bold tracking-wide shadow-md hover:scale-105 transition-transform">
                  SUBMIT PROBLEM
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/explore">
                <Button size="lg" variant="outline" className="px-8 py-4 text-sm font-bold tracking-wide hover:scale-105 transition-transform">
                  EXPLORE PROBLEMS
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/10 text-foreground py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tighter">
              HOW IT WORKS
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {["SUBMIT", "BUILD", "SHOWCASE"].map((step, i) => (
                <div
                  key={step}
                  className="text-center space-y-6 hover:bg-primary/5 p-6 rounded-lg transition-all shadow hover:shadow-lg"
                >
                  <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center mx-auto text-xl font-black">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{step}</h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    {step === "SUBMIT"
                      ? "Share your real-world problems."
                      : step === "BUILD"
                      ? "Develop MVPs for real challenges."
                      : "Showcase solutions and gain feedback."}
                  </p>
                </div>
              ))}
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
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tighter">
              WHY PROBLEMBASE?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                [<Plus className="w-8 h-8" />, "REAL PROBLEMS", "Work on actual challenges that matter."],
                [<Users className="w-8 h-8" />, "COMMUNITY BUILDERS", "Connect and collaborate meaningfully."],
                [<Search className="w-8 h-8" />, "MVP SHOWCASES", "Display solutions, get community feedback."]
              ].map(([icon, title, desc], i) => (
                <div
                  key={i}
                  className="p-8 border border-border rounded-xl shadow hover:shadow-xl hover:bg-muted/10 transition-all group"
                >
                  <div className="space-y-4 text-center">
                    <div className="text-primary group-hover:scale-110 transition-transform">{icon}</div>
                    <h3 className="text-lg font-black tracking-tight">{title}</h3>
                    <p className="text-sm leading-relaxed opacity-80">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-12 text-center"
          >
            {[
              ["247", "PROBLEMS SUBMITTED"],
              ["89", "ACTIVE BUILDERS"],
              ["156", "MVPS BUILT"],
              ["42", "COMPANIES STARTED"]
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-4xl font-black mb-2 animate-fade-in">{stat}</div>
                <div className="text-sm font-medium tracking-wide opacity-90">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background/70 backdrop-blur relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-lg font-black tracking-tight">PROBLEMBASE</div>
            <div className="flex items-center space-x-6">
              {["GITHUB", "TWITTER", "DISCORD"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-sm font-medium px-3 py-2 hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border text-center">
            <p className="text-sm font-medium">&copy; 2024 PROBLEMBASE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
