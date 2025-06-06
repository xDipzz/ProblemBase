"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SubmitProblemPage() {
  const { toast } = useToast()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [urgency, setUrgency] = useState("")
  const [techStack, setTechStack] = useState<string[]>([])
  const [newTech, setNewTech] = useState("")

  const categories = [
    "PRODUCTIVITY",
    "AI",
    "DEVTOOLS",
    "WEB3",
    "E-COMMERCE",
    "HEALTHCARE",
    "EDUCATION",
    "FINANCE",
    "SOCIAL",
    "OTHER",
  ]

  const urgencyLevels = [
    { value: "low", label: "LOW", description: "Nice to have" },
    { value: "medium", label: "MEDIUM", description: "Important" },
    { value: "high", label: "HIGH", description: "Critical" },
  ]

  const addTechStack = () => {
    if (newTech.trim() && !techStack.includes(newTech.trim())) {
      setTechStack([...techStack, newTech.trim()])
      setNewTech("")
    }
  }

  const removeTechStack = (tech: string) => {
    setTechStack(techStack.filter((t) => t !== tech))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !description || !category || !urgency) {
      toast({
        title: "MISSING FIELDS",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    console.log({
      title,
      description,
      category,
      urgency,
      techStack,
    })

    toast({
      title: "PROBLEM SUBMITTED!",
      description: "Your problem has been posted to the community.",
    })

    // Reset form
    setTitle("")
    setDescription("")
    setCategory("")
    setUrgency("")
    setTechStack([])
  }

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black tracking-tight">SUBMIT A PROBLEM</h1>
          <p className="text-base font-medium mt-2">Share a real-world problem that needs an innovative solution from our community</p>
        </div>

        <div className="border-2 border-black p-8">
          <div className="mb-8">
            <h2 className="text-xl font-black tracking-tight">PROBLEM DETAILS</h2>
            <p className="text-base font-medium mt-1">Provide clear details about the problem you want solved</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div className="space-y-3">
              <Label htmlFor="title" className="text-sm font-bold tracking-wide">
                PROBLEM TITLE *
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Better project management for remote teams"
                className="bg-white border-2 border-black text-black placeholder-black/50 py-3 text-base font-medium"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-sm font-bold tracking-wide">
                PROBLEM DESCRIPTION *
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the problem in detail. What pain points exist? Who is affected? What would an ideal solution look like?"
                className="bg-white border-2 border-black text-black placeholder-black/50 min-h-[150px] text-base font-medium"
                required
              />
              <p className="text-xs font-mono">SUPPORTS MARKDOWN FORMATTING</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Category */}
              <div className="space-y-3">
                <Label className="text-sm font-bold tracking-wide">CATEGORY *</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger className="bg-white border-2 border-black text-black py-3 text-base font-medium">
                    <SelectValue placeholder="SELECT A CATEGORY" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-black">
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat.toLowerCase()} className="text-black font-medium">
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Urgency */}
              <div className="space-y-3">
                <Label className="text-sm font-bold tracking-wide">URGENCY LEVEL *</Label>
                <Select value={urgency} onValueChange={setUrgency} required>
                  <SelectTrigger className="bg-white border-2 border-black text-black py-3 text-base font-medium">
                    <SelectValue placeholder="SELECT URGENCY" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-black">
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value} className="text-black font-medium">
                        <div>
                          <div className="font-bold">{level.label}</div>
                          <div className="text-sm">{level.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <Label className="text-sm font-bold tracking-wide">PREFERRED TECH STACK (OPTIONAL)</Label>
              <div className="flex gap-3">
                <Input
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  placeholder="e.g., React, Node.js, Python"
                  className="bg-white border-2 border-black text-black placeholder-black/50 py-3 text-base font-medium"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechStack())}
                />
                <Button
                  type="button"
                  onClick={addTechStack}
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white py-3 px-4"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {techStack.map((tech) => (
                    <div
                      key={tech}
                      className="border-2 border-black px-3 py-1 flex items-center gap-2 font-mono text-sm"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTechStack(tech)}
                        className="hover:bg-black hover:text-white p-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <Button
                type="submit"
                className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-8 py-3 text-sm font-bold tracking-wide"
              >
                SUBMIT PROBLEM
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </DashboardLayout>
  )
}
