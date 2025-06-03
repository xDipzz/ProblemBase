import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Github, Star, Calendar, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ShowcasePage() {
  const showcases = [
    {
      id: 1,
      title: "TaskFlow - Smart Project Management",
      description:
        "A simplified project management tool built specifically for remote teams. Features real-time collaboration, smart notifications, and seamless integrations.",
      githubUrl: "https://github.com/builder/taskflow",
      liveUrl: "https://taskflow-demo.vercel.app",
      problemTitle: "Better project management for remote teams",
      problemId: 1,
      builder: {
        name: "Alex Kim",
        username: "alexk",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      techStack: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      stars: 127,
      createdAt: "1 week ago",
      featured: true,
    },
    {
      id: 2,
      title: "CodeReview AI",
      description:
        "AI-powered code review assistant that catches bugs, suggests improvements, and maintains code quality standards automatically.",
      githubUrl: "https://github.com/builder/codereview-ai",
      liveUrl: "https://codereview-ai.com",
      problemTitle: "AI-powered code review assistant",
      problemId: 2,
      builder: {
        name: "George  Martinez",
        username: "George m",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      techStack: ["Python", "TensorFlow", "FastAPI", "Docker"],
      stars: 89,
      createdAt: "2 weeks ago",
      featured: false,
    },
    {
      id: 3,
      title: "ExpenseTracker Pro",
      description:
        "Smart expense tracking for freelancers with automatic categorization, tax report generation, and multi-currency support.",
      githubUrl: "https://github.com/builder/expense-tracker",
      liveUrl: "https://expensetracker-pro.app",
      problemTitle: "Smart expense tracking for freelancers",
      problemId: 4,
      builder: {
        name: "Marcus Chen",
        username: "marcusc",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      techStack: ["React Native", "Firebase", "Stripe", "ML Kit"],
      stars: 156,
      createdAt: "3 weeks ago",
      featured: true,
    },
    {
      id: 4,
      title: "DeployEasy",
      description:
        "One-click deployment solution for small teams. Simplified CI/CD pipeline with automatic scaling and monitoring.",
      githubUrl: "https://github.com/builder/deploy-easy",
      liveUrl: null,
      problemTitle: "Simplified deployment pipeline",
      problemId: 3,
      builder: {
        name: "Emma Wilson",
        username: "emmaw",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      techStack: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
      stars: 73,
      createdAt: "1 month ago",
      featured: false,
    },
    {
      id: 5,
      title: "CollabBoard",
      description:
        "Real-time collaboration whiteboard with low latency, infinite canvas, and seamless team synchronization.",
      githubUrl: "https://github.com/builder/collab-board",
      liveUrl: "https://collabboard.io",
      problemTitle: "Real-time collaboration whiteboard",
      problemId: 5,
      builder: {
        name: "David Park",
        username: "davidp",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      techStack: ["WebRTC", "Canvas API", "WebSockets", "Redis"],
      stars: 203,
      createdAt: "2 months ago",
      featured: true,
    },
    {
      id: 6,
      title: "SocialScheduler AI",
      description:
        "Automated social media content scheduler with AI-generated posts, optimal timing, and cross-platform publishing.",
      githubUrl: "https://github.com/builder/social-scheduler",
      liveUrl: "https://socialscheduler-ai.com",
      problemTitle: "Automated social media content scheduler",
      problemId: 6,
      builder: {
        name: "Lisa Zhang",
        username: "lisaz",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      techStack: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
      stars: 91,
      createdAt: "3 weeks ago",
      featured: false,
    },
  ]

  const featuredShowcases = showcases.filter((showcase) => showcase.featured)
  const regularShowcases = showcases.filter((showcase) => !showcase.featured)

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Showcase</h1>
          <p className="text-gray-400 mt-1">Discover amazing MVPs built by our community from real problems</p>
        </div>

        {/* Featured Section */}
        {featuredShowcases.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredShowcases.map((showcase) => (
                <Card
                  key={showcase.id}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border-yellow-500/30 backdrop-blur-sm rounded-2xl hover:border-yellow-500/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{showcase.title}</CardTitle>
                        <CardDescription className="text-gray-400 line-clamp-2">{showcase.description}</CardDescription>
                      </div>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Featured</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {showcase.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {showcase.techStack.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                          +{showcase.techStack.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Builder Info */}
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={showcase.builder.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{showcase.builder.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-400">by {showcase.builder.name}</span>
                      <div className="flex items-center space-x-1 ml-auto">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-400">{showcase.stars}</span>
                      </div>
                    </div>

                    {/* Problem Link */}
                    <div className="text-xs text-gray-500">
                      Built from:{" "}
                      <Link href={`/problem/${showcase.problemId}`} className="text-blue-400 hover:text-blue-300">
                        {showcase.problemTitle}
                      </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      {showcase.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg"
                        >
                          <a href={showcase.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg"
                      >
                        <a href={showcase.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularShowcases.map((showcase) => (
              <Card
                key={showcase.id}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl hover:border-gray-700 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg mb-2">{showcase.title}</CardTitle>
                  <CardDescription className="text-gray-400 line-clamp-2">{showcase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {showcase.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {showcase.techStack.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                        +{showcase.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Builder Info */}
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={showcase.builder.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{showcase.builder.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-400">by {showcase.builder.name}</span>
                    <div className="flex items-center space-x-1 ml-auto">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">{showcase.stars}</span>
                    </div>
                  </div>

                  {/* Problem Link */}
                  <div className="text-xs text-gray-500">
                    Built from:{" "}
                    <Link href={`/problem/${showcase.problemId}`} className="text-blue-400 hover:text-blue-300">
                      {showcase.problemTitle}
                    </Link>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{showcase.createdAt}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    {showcase.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg"
                      >
                        <a href={showcase.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg"
                    >
                      <a href={showcase.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 backdrop-blur-sm rounded-2xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Built Something Amazing?</h3>
            <p className="text-gray-400 mb-6">Share your MVP with the community and get valuable feedback</p>
            <Link href="/submit">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl">
                Submit Your Project
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
