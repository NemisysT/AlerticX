import { NextResponse } from "next/server"
import prisma from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get("location")

    // If no location is provided, return the latest climate data
    if (!location) {
      const latestData = await prisma.climateData.findFirst({
        orderBy: {
          timestamp: "desc",
        },
      })

      return NextResponse.json(latestData)
    }

    // Get climate data for the specified location
    const climateData = await prisma.climateData.findMany({
      where: {
        location,
      },
      orderBy: {
        timestamp: "desc",
      },
      take: 1,
    })

    if (climateData.length === 0) {
      return NextResponse.json({ error: "No climate data found for this location" }, { status: 404 })
    }

    return NextResponse.json(climateData[0])
  } catch (error) {
    console.error("Error fetching climate data:", error)
    return NextResponse.json({ error: "Failed to fetch climate data" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { location, temperature, humidity, windSpeed, airQuality } = body

    const climateData = await prisma.climateData.create({
      data: {
        location,
        temperature,
        humidity,
        windSpeed,
        airQuality,
      },
    })

    return NextResponse.json(climateData, { status: 201 })
  } catch (error) {
    console.error("Error creating climate data:", error)
    return NextResponse.json({ error: "Failed to create climate data" }, { status: 500 })
  }
}

