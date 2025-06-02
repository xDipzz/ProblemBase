"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { User, DollarSign, MessageCircle, Calendar, Flag } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function ProblemDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [newComment, setNewComment] = useState("")
  const [isClaimDialogOpen, setIsClaimDialogOpen] = useState(false)

  // Mock data - in real app, this would be fetched based on params.id
  const problem = {
    id: 1,
    title: "Better project management for remote teams",
    description: `## The Problem

Current project management tools are either too complex for small teams or too simple for growing organizations. Most tools don't integrate well with existing workflows and require extensive setup.

## What We Need

A project management solution that:
- **Simple Setup**: Get started in under 5 minutes
- **Smart Integration**: Works with existing tools (Slack, GitHub, etc.)
- **Remote-First**: Built specifically for distributed teams
- **Flexible Workflows**: Adapts to different team structures

## Current Pain Points

1. **Tool Fragmentation**: Using 5+ different tools for project management
2. **Context Switching**: Constantly jumping between platforms
3. **Poor Mobile Experience**: Most tools are desktop-only
4. **Expensive**: Current solutions cost $20+ per user per month

## Success Metrics

- Reduce tool count from 5+ to 2-3
- Improve team productivity by 30%
- Mobile-first experience
- Under $10 per user per month`,
    category: "Productivity",
    urgency: "High",
    bounty: 500,
    submitter: {
      name: "Sarah Chen",
      username: "sarahc",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "Product Manager at TechCorp",
    },
    createdAt: "2 days ago",
    claims: 3,
    status: "unclaimed",
    techStack: ["React", "Node.js", "PostgreSQL", "Docker"],
    claimedBy: null,
  }

  const comments = [
    {
      id: 1,
      author: {
        name: "Alex Kim",
        username: "alexk",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content:
        "This is exactly what our team needs! I've been working on something similar. Would love to collaborate on this.",
      createdAt: "1 day ago",
      replies: [],
    },
    {
      id: 2,
      author: {
        name: "Marcus Rodriguez",
        username: "marcusr",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content:
        "Have you considered integrating with Linear? They have a great API that could solve some of the workflow issues.",
      createdAt: "18 hours ago",
      replies: [
        {
          id: 3,
          author: {
            name: "Sarah Chen",
            username: "sarahc",
            avatar: "/placeholder.svg?height=32&width=32",
          },
          content: "Good point! Linear integration would be valuable. We're currently using Jira but it's too heavy.",
          createdAt: "12 hours ago",
        },
      ],
    },
    {
      id: 4,
      author: {
        name: "Emma Wilson",
        username: "emmaw",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content: "I built something similar for my startup. Happy to share some insights on what worked and what didn't.",
      createdAt: "8 hours ago",
      replies: [],
    },
  ]

  const handleClaimProblem = () => {
    // Claim logic would go here
    console.log("Claiming problem:", problem.id)
    setIsClaimDialogOpen(false)
    toast({
      title: "Problem claimed!",
      description: "You've successfully claimed this problem. Start building!",
    })
  }

  const handleAddComment = () => {
    if (!newComment.trim()) return

    // Add comment logic would go here
    console.log("Adding comment:", newComment)
    setNewComment("")
    toast({
      title: "Comment added!",
      description: "Your comment has been posted.",
    })
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
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-white mb-2">{problem.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {problem.category}
                      </Badge>
                      <Badge variant="outline" className={`border-gray-600 ${getUrgencyColor(problem.urgency)}`}>
                        {problem.urgency} Priority
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {problem.status}
                      </Badge>
                    </div>
                  </div>
                  {problem.bounty && (
                    <div className="flex items-center space-x-1 text-green-400 bg-green-500/20 px-4 py-2 rounded-xl">
                      <DollarSign className="w-5 h-5" />
                      <span className="font-semibold text-lg">{problem.bounty}</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 whitespace-pre-wrap">{problem.description}</div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Discussion ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add Comment */}
                <div className="space-y-3">
                  <Textarea
                    placeholder="Share your thoughts, ask questions, or offer insights..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-xl"
                  />
                  <div className="flex justify-end">
                    <Button
                      onClick={handleAddComment}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl"
                    >
                      Post Comment
                    </Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="space-y-3">
                      <div className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-xl">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={comment.author.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-white">{comment.author.name}</span>
                            <span className="text-sm text-gray-400">@{comment.author.username}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{comment.createdAt}</span>
                          </div>
                          <p className="text-gray-300">{comment.content}</p>
                        </div>
                      </div>

                      {/* Replies */}
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="ml-8 flex items-start space-x-3 p-4 bg-gray-800/30 rounded-xl">
                          <Avatar className="w-7 h-7">
                            <AvatarImage src={reply.author.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-white text-sm">{reply.author.name}</span>
                              <span className="text-xs text-gray-400">@{reply.author.username}</span>
                              <span className="text-xs text-gray-500">•</span>
                              <span className="text-xs text-gray-500">{reply.createdAt}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Action Card */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Take Action</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {problem.status === "unclaimed" ? (
                  <Dialog open={isClaimDialogOpen} onOpenChange={setIsClaimDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl py-3">
                        Claim This Problem
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 border-gray-800 text-white">
                      <DialogHeader>
                        <DialogTitle>Claim Problem</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          By claiming this problem, you commit to working on a solution. You can update your progress
                          and showcase your MVP when ready.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-800 rounded-xl">
                          <h4 className="font-medium text-white mb-2">What happens next?</h4>
                          <ul className="text-sm text-gray-400 space-y-1">
                            <li>• You'll be marked as the builder for this problem</li>
                            <li>• You can update your progress in your dashboard</li>
                            <li>• Share your MVP when ready for community feedback</li>
                            <li>• Earn reputation points for successful solutions</li>
                          </ul>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            onClick={() => setIsClaimDialogOpen(false)}
                            className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleClaimProblem}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          >
                            Claim Problem
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl">
                    <p className="text-blue-400 text-sm font-medium">
                      This problem has been claimed by {problem.claimedBy || "another builder"}
                    </p>
                  </div>
                )}

                <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 rounded-xl">
                  <Flag className="w-4 h-4 mr-2" />
                  Report Issue
                </Button>
              </CardContent>
            </Card>

            {/* Problem Details */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Problem Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Posted by</span>
                    <Link
                      href={`/profile/${problem.submitter.username}`}
                      className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                    >
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={problem.submitter.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{problem.submitter.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-white">{problem.submitter.name}</span>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Created</span>
                    <div className="flex items-center space-x-1 text-white">
                      <Calendar className="w-4 h-4" />
                      <span>{problem.createdAt}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Claims</span>
                    <div className="flex items-center space-x-1 text-white">
                      <User className="w-4 h-4" />
                      <span>{problem.claims}</span>
                    </div>
                  </div>

                  {problem.bounty && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Bounty</span>
                      <div className="flex items-center space-x-1 text-green-400">
                        <DollarSign className="w-4 h-4" />
                        <span>${problem.bounty}</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Suggested Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {problem.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Submitter Profile */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">About the Submitter</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={problem.submitter.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{problem.submitter.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{problem.submitter.name}</h4>
                    <p className="text-sm text-gray-400">@{problem.submitter.username}</p>
                    <p className="text-sm text-gray-300 mt-2">{problem.submitter.bio}</p>
                    <Link href={`/profile/${problem.submitter.username}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg"
                      >
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
