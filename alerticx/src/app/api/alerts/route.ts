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

    const alerts = await prisma.alert.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    })

    return NextResponse.json(alerts)
  } catch (error) {
    console.error("Error fetching alerts:", error)
    return NextResponse.json({ error: "Failed to fetch alerts" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, type, severity, location, latitude, longitude } = body

    const alert = await prisma.alert.create({
      data: {
        title,
        description,
        type,
        severity,
        location,
        latitude,
        longitude,
      },
    })

    return NextResponse.json(alert, { status: 201 })
  } catch (error) {
    console.error("Error creating alert:", error)
    return NextResponse.json({ error: "Failed to create alert" }, { status: 500 })
  }
}

