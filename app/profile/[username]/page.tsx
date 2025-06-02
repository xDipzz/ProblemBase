import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Github, Twitter, Globe, Star, ExternalLink } from "lucide-react"

export default function ProfilePage({ params }: { params: { username: string } }) {
  // Mock user data - in real app, this would be fetched based on params.username
  const user = {
    name: "Sarah Chen",
    username: "sarahc",
    avatar: "/placeholder.svg?height=120&width=120",
    bio: "Product Manager at TechCorp. Passionate about building tools that solve real problems for remote teams.",
    location: "San Francisco, CA",
    joinedAt: "January 2023",
    website: "https://sarahchen.dev",
    github: "sarahc",
    twitter: "sarahc_dev",
    stats: {
      problemsSubmitted: 12,
      projectsClaimed: 5,
      mvpsShowcased: 3,
      communityPoints: 847,
    },
  }

  const submittedProblems = [
    {
      id: 1,
      title: "Better project management for remote teams",
      description: "Current tools are too complex and don't integrate well with existing workflows.",
      category: "Productivity",
      urgency: "High",
      claims: 3,
      comments: 12,
      createdAt: "2 days ago",
      status: "unclaimed",
    },
    {
      id: 2,
      title: "Smart expense tracking for freelancers",
      description: "Automatically categorize expenses and generate tax reports.",
      category: "Finance",
      urgency: "Medium",
      claims: 5,
      comments: 8,
      createdAt: "1 week ago",
      status: "claimed",
    },
    {
      id: 3,
      title: "Real-time team communication tool",
      description: "Slack alternative with better threading and search capabilities.",
      category: "Productivity",
      urgency: "Low",
      claims: 1,
      comments: 4,
      createdAt: "2 weeks ago",
      status: "unclaimed",
    },
  ]

  const claimedProjects = [
    {
      id: 1,
      title: "AI-powered code review assistant",
      originalProblem: "Automate code reviews to catch bugs early",
      status: "building",
      progress: 75,
      startedAt: "3 weeks ago",
      techStack: ["Python", "TensorFlow", "Docker"],
    },
    {
      id: 2,
      title: "Simplified deployment pipeline",
      originalProblem: "One-click deployment for small teams",
      status: "completed",
      progress: 100,
      startedAt: "2 months ago",
      completedAt: "1 month ago",
      techStack: ["Docker", "Kubernetes", "GitHub Actions"],
    },
  ]

  const showcasedMVPs = [
    {
      id: 1,
      title: "TaskFlow - Smart Project Management",
      description: "A simplified project management tool built specifically for remote teams.",
      githubUrl: "https://github.com/sarahc/taskflow",
      liveUrl: "https://taskflow-demo.vercel.app",
      stars: 127,
      techStack: ["React", "Node.js", "PostgreSQL"],
      createdAt: "1 month ago",
    },
    {
      id: 2,
      title: "ExpenseTracker Pro",
      description: "Smart expense tracking with automatic categorization.",
      githubUrl: "https://github.com/sarahc/expense-tracker",
      liveUrl: "https://expensetracker-pro.app",
      stars: 89,
      techStack: ["React Native", "Firebase", "Stripe"],
      createdAt: "2 months ago",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "building":
        return "bg-blue-500/20 text-blue-400 border-blue-400"
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-400"
      case "claimed":
        return "bg-purple-500/20 text-purple-400 border-purple-400"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-400"
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case "high":
        return "text-red-400 border-red-400"
      case "medium":
        return "text-yellow-400 border-yellow-400"
      case "low":
        return "text-green-400 border-green-400"
      default:
        return "text-gray-400 border-gray-400"
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profile Header */}
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="w-32 h-32 mx-auto md:mx-0">
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                  <p className="text-gray-400">@{user.username}</p>
                </div>

                <p className="text-gray-300 max-w-2xl">{user.bio}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {user.joinedAt}</span>
                  </div>
                  {user.website && (
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Website</span>
                    </a>
                  )}
                  {user.github && (
                    <a
                      href={`https://github.com/${user.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {user.twitter && (
                    <a
                      href={`https://twitter.com/${user.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl">
                  Follow
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{user.stats.problemsSubmitted}</div>
              <div className="text-sm text-gray-400">Problems Submitted</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{user.stats.projectsClaimed}</div>
              <div className="text-sm text-gray-400">Projects Claimed</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{user.stats.mvpsShowcased}</div>
              <div className="text-sm text-gray-400">MVPs Showcased</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{user.stats.communityPoints}</div>
              <div className="text-sm text-gray-400">Community Points</div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="problems" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800 rounded-xl p-1">
            <TabsTrigger
              value="problems"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white rounded-lg"
            >
              Submitted Problems
            </TabsTrigger>
            <TabsTrigger
              value="claimed"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white rounded-lg"
            >
              Claimed Projects
            </TabsTrigger>
            <TabsTrigger
              value="showcases"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white rounded-lg"
            >
              Showcased MVPs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="problems" className="space-y-4">
            {submittedProblems.map((problem) => (
              <Card key={problem.id} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                        <p className="text-gray-400">{problem.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {problem.category}
                      </Badge>
                      <Badge variant="outline" className={`border-gray-600 ${getUrgencyColor(problem.urgency)}`}>
                        {problem.urgency}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(problem.status)}>
                        {problem.status}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span>{problem.claims} claims</span>
                        <span>{problem.comments} comments</span>
                        <span>{problem.createdAt}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="claimed" className="space-y-4">
            {claimedProjects.map((project) => (
              <Card key={project.id} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                        <p className="text-gray-400 text-sm">From: {project.originalProblem}</p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>

                    {project.status === "building" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span>Started {project.startedAt}</span>
                        {project.completedAt && <span>Completed {project.completedAt}</span>}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="showcases" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {showcasedMVPs.map((mvp) => (
                <Card key={mvp.id} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{mvp.title}</h3>
                      <p className="text-gray-400 text-sm">{mvp.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {mvp.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{mvp.stars}</span>
                      </div>
                      <span>{mvp.createdAt}</span>
                    </div>

                    <div className="flex gap-2">
                      {mvp.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg"
                        >
                          <a href={mvp.liveUrl} target="_blank" rel="noopener noreferrer">
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
                        <a href={mvp.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
