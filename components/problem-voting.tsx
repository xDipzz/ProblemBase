"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

interface ProblemVotingProps {
  problemId: number
  initialVotes?: number
  userVote?: "up" | "down" | null
  onVote?: (problemId: number, voteType: "up" | "down" | null) => void
}

export function ProblemVoting({ 
  problemId, 
  initialVotes = 0, 
  userVote = null, 
  onVote 
}: ProblemVotingProps) {
  const [votes, setVotes] = useState(initialVotes)
  const [currentVote, setCurrentVote] = useState<"up" | "down" | null>(userVote)

  const handleVote = (voteType: "up" | "down") => {
    let newVotes = votes
    let newCurrentVote: "up" | "down" | null = voteType

    // If clicking the same vote, remove it
    if (currentVote === voteType) {
      newCurrentVote = null
      newVotes = voteType === "up" ? votes - 1 : votes + 1
    } else {
      // If switching from one vote to another
      if (currentVote === "up" && voteType === "down") {
        newVotes = votes - 2
      } else if (currentVote === "down" && voteType === "up") {
        newVotes = votes + 2
      } else {
        // First time voting
        newVotes = voteType === "up" ? votes + 1 : votes - 1
      }
    }

    setVotes(newVotes)
    setCurrentVote(newCurrentVote)
    onVote?.(problemId, newCurrentVote)
  }

  return (
    <div className="flex flex-col items-center space-y-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleVote("up")}
        className={`p-1 h-8 w-8 hover:bg-green-100 ${
          currentVote === "up" 
            ? "bg-green-500 text-white hover:bg-green-600" 
            : "hover:text-green-600"
        }`}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
      
      <motion.div
        key={votes}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        className={`text-sm font-bold min-w-[2rem] text-center ${
          votes > 0 ? "text-green-600" : votes < 0 ? "text-red-600" : "text-gray-600"
        }`}
      >
        {votes > 0 ? `+${votes}` : votes}
      </motion.div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleVote("down")}
        className={`p-1 h-8 w-8 hover:bg-red-100 ${
          currentVote === "down" 
            ? "bg-red-500 text-white hover:bg-red-600" 
            : "hover:text-red-600"
        }`}
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )
} 