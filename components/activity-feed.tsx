"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Rocket, Plus, User } from "lucide-react"
import Link from "next/link"

interface ActivityItem {
  id: string
  action: string
  item: string
  time: string
  type: "problem" | "comment" | "showcase" | "claim"
}

const mockActivity: ActivityItem[] = [
  { id: "1", action: "PROBLEM CLAIMED", item: "AI-powered code review assistant", time: "2 HOURS AGO", type: "claim" },
  { id: "2", action: "NEW COMMENT", item: "Better project management for remote teams", time: "5 HOURS AGO", type: "comment" },
  { id: "3", action: "MVP SHOWCASED", item: "Task automation tool", time: "1 DAY AGO", type: "showcase" },
  { id: "4", action: "PROBLEM SUBMITTED", item: "Simplified deployment pipeline", time: "3 DAYS AGO", type: "problem" },
  { id: "5", action: "PROBLEM CLAIMED", item: "Mobile app performance optimization", time: "1 WEEK AGO", type: "claim" },
]

function getActivityIcon(type: ActivityItem["type"]) {
  switch (type) {
    case "problem":
      return Plus
    case "comment":
      return MessageCircle
    case "showcase":
      return Rocket
    case "claim":
      return User
    default:
      return Plus
  }
}

function getActivityColor(type: ActivityItem["type"]) {
  switch (type) {
    case "problem":
      return "text-blue-600"
    case "comment":
      return "text-green-600"
    case "showcase":
      return "text-purple-600"
    case "claim":
      return "text-orange-600"
    default:
      return "text-gray-600"
  }
}

export function ActivityFeed() {
  return (
    <div className="border-2 border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-black tracking-tight">RECENT ACTIVITY</h2>
        <Button
          variant="ghost"
          className="text-sm font-bold tracking-wide hover:bg-foreground hover:text-background px-3 py-2"
        >
          VIEW ALL
          <ArrowRight className="w-3 h-3 ml-1" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {mockActivity.map((activity, index) => {
          const Icon = getActivityIcon(activity.type)
          const colorClass = getActivityColor(activity.type)
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 border border-border hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className={`p-2 rounded-full bg-muted ${colorClass}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold mb-1">{activity.action}</p>
                <p className="text-sm text-muted-foreground truncate mb-2">
                  {activity.item}
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      {mockActivity.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground text-sm">No recent activity</p>
          <Button asChild className="mt-4">
            <Link href="/submit">
              <Plus className="w-4 h-4 mr-2" />
              Submit Your First Problem
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
} 