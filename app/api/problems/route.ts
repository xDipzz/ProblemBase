import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const createProblemSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  urgency: z.enum(["low", "medium", "high", "critical"]),
  techStack: z.array(z.string()).min(1, "At least one tech stack item required"),
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const category = searchParams.get("category")
    const urgency = searchParams.get("urgency")
    const status = searchParams.get("status")

    const skip = (page - 1) * limit

    const where = {
      ...(category && { category }),
      ...(urgency && { urgency }),
      ...(status && { status }),
    }

    const [problems, total] = await Promise.all([
      prisma.problem.findMany({
        where,
        skip,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          _count: {
            select: {
              claims: true,
              comments: true,
              votes: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.problem.count({ where }),
    ])

    return NextResponse.json({
      problems,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching problems:", error)
    return NextResponse.json(
      { error: "Failed to fetch problems" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validatedData = createProblemSchema.parse(body)

    const problem = await prisma.problem.create({
      data: {
        ...validatedData,
        userId: session.user.id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    })

    return NextResponse.json(problem, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      )
    }

    console.error("Error creating problem:", error)
    return NextResponse.json(
      { error: "Failed to create problem" },
      { status: 500 }
    )
  }
} 