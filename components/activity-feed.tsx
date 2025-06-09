"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, ThumbsUp, Plus, Eye, Clock } from "lucide-react"

interface ActivityItem {
  id: string
  type: "vote" | "comment" | "submit" | "view"
  user: string
  avatar?: string
  action: string
  target: string
  timestamp: string
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "submit",
    user: "Alex Chen",
    action: "submitted a new problem",
    target: "Smart contract auditing tool",
    timestamp: "2 minutes ago"
  },
  {
    id: "2", 
    type: "vote",
    user: "Sarah Kim",
    action: "upvoted",
    target: "Video call fatigue detector",
    timestamp: "5 minutes ago"
  },
  {
    id: "3",
    type: "comment",
    user: "Mike Johnson",
    action: "commented on",
    target: "Smart home energy optimization",
    timestamp: "12 minutes ago"
  },
  {
    id: "4",
    type: "view",
    user: "Emma Wilson",
    action: "started working on",
    target: "Deployment pipeline simplification",
    timestamp: "18 minutes ago"
  },
  {
    id: "5",
    type: "vote",
    user: "David Lee", 
    action: "upvoted",
    target: "Freelancer expense tracking",
    timestamp: "25 minutes ago"
  }
]

export function ActivityFeed() {
  const getIcon = (type: string) => {
    switch (type) {
      case "vote": return <ThumbsUp className="w-4 h-4 text-green-600" />
      case "comment": return <MessageSquare className="w-4 h-4 text-blue-600" />
      case "submit": return <Plus className="w-4 h-4 text-purple-600" />
      case "view": return <Eye className="w-4 h-4 text-orange-600" />
      default: return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase()
  }

  return (
    <Card className="border-2 border-black">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5" />
          <h3 className="font-black text-lg tracking-tight">RECENT ACTIVITY</h3>
        </div>
        
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Avatar className="w-8 h-8 border-2 border-black">
                <AvatarImage src={activity.avatar} />
                <AvatarFallback className="bg-white text-black font-bold text-xs">
                  {getInitials(activity.user)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {getIcon(activity.type)}
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-gray-600 ml-1">{activity.action}</span>
                    <span className="font-medium ml-1">"{activity.target}"</span>
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            View all activity →
          </button>
        </div>
      </CardContent>
    </Card>
  )
} 