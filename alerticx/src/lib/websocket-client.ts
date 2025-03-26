"use client"

import { useEffect, useState } from "react"
import { io, type Socket } from "socket.io-client"
import type { WeatherData, AlertData } from "./weather-api"

let socket: Socket | null = null

export function useWebSocket(location: string) {
  const [isConnected, setIsConnected] = useState(false)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [alerts, setAlerts] = useState<AlertData[]>([])

  useEffect(() => {
    // Initialize socket connection if it doesn't exist
    if (!socket) {
      const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL || "http://localhost:4000"
      socket = io(WEBSOCKET_URL)
    }

    // Set up event listeners
    socket.on("connect", () => {
      setIsConnected(true)
      console.log("Connected to WebSocket server")

      // Subscribe to updates for the specified location
      socket.emit("subscribe", location)
    })

    socket.on("disconnect", () => {
      setIsConnected(false)
      console.log("Disconnected from WebSocket server")
    })

    socket.on("weather_update", (data: WeatherData) => {
      console.log("Received weather update:", data)
      setWeatherData(data)
    })

    socket.on("alerts_update", (data: AlertData[]) => {
      console.log("Received alerts update:", data)
      setAlerts(data)
    })

    // Clean up event listeners on unmount
    return () => {
      if (socket) {
        socket.off("connect")
        socket.off("disconnect")
        socket.off("weather_update")
        socket.off("alerts_update")
      }
    }
  }, [location])

  return { isConnected, weatherData, alerts }
}

