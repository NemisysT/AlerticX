import { NextResponse } from "next/server"
import prisma from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get("location")
    const type = searchParams.get("type")

    const whereClause: any = {}

    if (location) {
      whereClause.location = location
    }

    if (type) {
      whereClause.type = type
    }

    const reports = await prisma.report.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    })

    return NextResponse.json(reports)
  } catch (error) {
    console.error("Error fetching reports:", error)
    return NextResponse.json({ error: "Failed to fetch reports" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, type, location, latitude, longitude, imageUrl, userId } = body

    const report = await prisma.report.create({
      data: {
        title,
        description,
        type,
        location,
        latitude,
        longitude,
        imageUrl,
        userId,
      },
    })

    return NextResponse.json(report, { status: 201 })
  } catch (error) {
    console.error("Error creating report:", error)
    return NextResponse.json({ error: "Failed to create report" }, { status: 500 })
  }
}

