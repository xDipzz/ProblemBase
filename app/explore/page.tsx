"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProblemVoting } from "@/components/problem-voting"
import { Search, Clock, User, MessageCircle } from "lucide-react"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [urgencyFilter, setUrgencyFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data - in real app this would come from your database
  const problems = [
    {
      id: 1,
      title: "Smart home energy optimization",
      description: "Build an AI-powered system that learns household patterns and optimizes energy consumption automatically.",
      category: "PRODUCTIVITY",
      urgency: "HIGH",
      submitter: "Sarah Johnson",
      createdAt: "2 DAYS AGO",
      claims: 12,
      comments: 34,
      status: "UNCLAIMED",
      votes: 24,
      techStack: ["PYTHON", "REACT", "IOT", "MACHINE LEARNING"],
    },
    {
      id: 2,
      title: "Video call fatigue detector",
      description: "Create an app that monitors video call behavior and suggests breaks when fatigue is detected.",
      category: "AI",
      urgency: "MEDIUM",
      submitter: "Mike Chen",
      createdAt: "1 WEEK AGO",
      claims: 7,
      comments: 24,
      status: "CLAIMED",
      votes: 18,
      techStack: ["PYTHON", "TENSORFLOW", "DOCKER"],
    },
    {
      id: 3,
      title: "Simplified deployment pipeline",
      description: "Current CI/CD setup is too complex for small teams. Need a one-click deployment solution.",
      category: "DEVTOOLS",
      urgency: "LOW",
      submitter: "Alex Kim",
      createdAt: "2 WEEKS AGO",
      claims: 2,
      comments: 8,
      status: "UNCLAIMED",
      votes: 7,
      techStack: ["DOCKER", "KUBERNETES", "GITHUB ACTIONS"],
    },
    {
      id: 4,
      title: "Smart expense tracking for freelancers",
      description: "Automatically categorize expenses and generate tax reports for freelancers and contractors.",
      category: "FINANCE",
      urgency: "MEDIUM",
      submitter: "Emma Wilson",
      createdAt: "3 DAYS AGO",
      claims: 5,
      comments: 15,
      status: "UNCLAIMED",
      votes: 31,
      techStack: ["REACT NATIVE", "FIREBASE", "STRIPE"],
    },
  ]

  const categories = ["all", "productivity", "ai", "devtools", "finance", "social", "web3", "healthcare", "education"]
  const urgencyLevels = ["all", "low", "medium", "high"]
  const statusOptions = ["all", "unclaimed", "claimed", "completed"]

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || problem.category.toLowerCase() === categoryFilter
    const matchesUrgency = urgencyFilter === "all" || problem.urgency.toLowerCase() === urgencyFilter
    const matchesStatus = statusFilter === "all" || problem.status.toLowerCase() === statusFilter

    return matchesSearch && matchesCategory && matchesUrgency && matchesStatus
  })

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black tracking-tight">EXPLORE PROBLEMS</h1>
          <p className="text-base font-medium mt-2">Discover real-world problems waiting for innovative solutions</p>
        </div>

        {/* Filters */}
        <div className="border-2 border-black p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
              <Input
                placeholder="SEARCH PROBLEMS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-2 border-black text-black placeholder-black/50 py-3 text-base font-medium"
              />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full lg:w-40 bg-white border-2 border-black text-black py-3 text-base font-medium">
                <SelectValue placeholder="CATEGORY" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-black">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-black font-medium uppercase">
                    {category === "all" ? "ALL CATEGORIES" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Urgency Filter */}
            <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
              <SelectTrigger className="w-full lg:w-40 bg-white border-2 border-black text-black py-3 text-base font-medium">
                <SelectValue placeholder="URGENCY" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-black">
                {urgencyLevels.map((urgency) => (
                  <SelectItem key={urgency} value={urgency} className="text-black font-medium uppercase">
                    {urgency === "all" ? "ALL URGENCY" : urgency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-40 bg-white border-2 border-black text-black py-3 text-base font-medium">
                <SelectValue placeholder="STATUS" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-black">
                {statusOptions.map((status) => (
                  <SelectItem key={status} value={status} className="text-black font-medium uppercase">
                    {status === "all" ? "ALL STATUS" : status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-base font-medium">
              {filteredProblems.length} PROBLEM{filteredProblems.length !== 1 ? "S" : ""} FOUND
            </p>
          </div>

          <div className="grid gap-6">
            {filteredProblems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Link href={`/problem/${problem.id}`}>
                        <h3 className="text-lg font-black tracking-tight hover:underline">{problem.title}</h3>
                      </Link>
                      <p className="text-sm font-medium mt-2 leading-relaxed">{problem.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ProblemVoting 
                        problemId={problem.id} 
                        initialVotes={problem.votes}
                        onVote={(id, voteType) => console.log(`Voted ${voteType} on problem ${id}`)}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <div className="border border-current px-2 py-1 font-mono text-xs">{problem.category}</div>
                    <div className="border border-current px-2 py-1 font-mono text-xs">{problem.urgency}</div>
                    <div className="border border-current px-2 py-1 font-mono text-xs">{problem.status}</div>
                    {problem.techStack.slice(0, 3).map((tech) => (
                      <div key={tech} className="border border-current px-2 py-1 font-mono text-xs">
                        {tech}
                      </div>
                    ))}
                    {problem.techStack.length > 3 && (
                      <div className="border border-current px-2 py-1 font-mono text-xs">
                        +{problem.techStack.length - 3}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-current">
                    <div className="flex items-center space-x-4 text-xs font-mono">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-current"></div>
                        <span>{problem.submitter}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{problem.createdAt}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{problem.claims} CLAIMS</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{problem.comments}</span>
                      </div>
                    </div>
                    <Link href={`/problem/${problem.id}`}>
                      <Button
                        variant={problem.status === "UNCLAIMED" ? "default" : "outline"}
                        className={
                          problem.status === "UNCLAIMED"
                            ? "bg-white text-black hover:bg-black hover:text-white border-2 border-white px-4 py-2 text-sm font-bold tracking-wide"
                            : "border-2 border-current hover:bg-current hover:text-white px-4 py-2 text-sm font-bold tracking-wide"
                        }
                      >
                        {problem.status === "UNCLAIMED" ? "CLAIM THIS" : "VIEW DETAILS"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  )
}
