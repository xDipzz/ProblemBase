"use client"

import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Plus, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const stats = [
    { label: "PROBLEMS SUBMITTED", value: "12" },
    { label: "PROJECTS CLAIMED", value: "5" },
    { label: "MVPS SHOWCASED", value: "3" },
    { label: "COMMUNITY POINTS", value: "847" },
  ]

  const recentProblems = [
    {
      id: 1,
      title: "Better project management for remote teams",
      category: "PRODUCTIVITY",
      urgency: "HIGH",
      claims: 3,
      createdAt: "2 DAYS AGO",
    },
    {
      id: 2,
      title: "AI-powered code review assistant",
      category: "AI",
      urgency: "MEDIUM",
      claims: 7,
      createdAt: "1 WEEK AGO",
    },
    {
      id: 3,
      title: "Simplified deployment pipeline",
      category: "DEVTOOLS",
      urgency: "LOW",
      claims: 2,
      createdAt: "2 WEEKS AGO",
    },
  ]

  const recentActivity = [
    { action: "PROBLEM CLAIMED", item: "AI-powered code review assistant", time: "2 HOURS AGO" },
    { action: "NEW COMMENT", item: "Better project management for remote teams", time: "5 HOURS AGO" },
    { action: "MVP SHOWCASED", item: "Task automation tool", time: "1 DAY AGO" },
    { action: "PROBLEM SUBMITTED", item: "Simplified deployment pipeline", time: "3 DAYS AGO" },
  ]

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight">DASHBOARD</h1>
            <p className="text-base font-medium mt-2">Welcome back! Here's what's happening with your projects.</p>
          </div>
          <Link href="/submit">
            <Button className="px-6 py-3 text-sm font-bold tracking-wide">
              <Plus className="w-4 h-4 mr-2" />
              SUBMIT PROBLEM
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-2 border-border p-6 hover:bg-foreground hover:text-background transition-colors cursor-pointer"
            >
              <div className="text-2xl font-black mb-1">{stat.value}</div>
              <div className="text-xs font-bold tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Problems */}
          <div className="border-2 border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black tracking-tight">YOUR RECENT PROBLEMS</h2>
              <Link href="/explore">
                <Button
                  variant="ghost"
                  className="text-sm font-bold tracking-wide hover:bg-foreground hover:text-background px-3 py-2"
                >
                  VIEW ALL
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {recentProblems.map((problem) => (
                <div
                  key={problem.id}
                  className="border border-border p-4 hover:bg-foreground hover:text-background transition-colors cursor-pointer"
                >
                  <h3 className="font-bold text-base mb-2">{problem.title}</h3>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="border border-current px-2 py-1">{problem.category}</span>
                    <span className="border border-current px-2 py-1">{problem.urgency}</span>
                    <span className="border border-current px-2 py-1">{problem.claims} CLAIMS</span>
                    <span className="ml-auto">{problem.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="border-2 border-border p-6">
            <h2 className="text-lg font-black tracking-tight mb-6">RECENT ACTIVITY</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 border border-border hover:bg-foreground hover:text-background transition-colors"
                >
                  <div className="w-2 h-2 bg-foreground border border-foreground mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">
                      {activity.action} on {activity.item}
                    </p>
                    <p className="text-xs font-mono mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  )
}
