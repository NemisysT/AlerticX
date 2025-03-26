// This file would be used in a separate Node.js server deployment
// It's included here for reference

import { Server } from "socket.io"
import { createServer } from "http"
import express from "express"
import cors from "cors"
import { getAlerts, getWeatherData } from "./weather-api"

const app = express()
app.use(cors())

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

// Store connected clients and their subscribed locations
const clients = new Map()

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)

  // Handle client subscribing to a location
  socket.on("subscribe", (location) => {
    clients.set(socket.id, location)
    console.log(`Client ${socket.id} subscribed to ${location}`)

    // Send initial data
    sendInitialData(socket, location)
  })

  // Handle client disconnection
  socket.on("disconnect", () => {
    clients.delete(socket.id)
    console.log("Client disconnected:", socket.id)
  })
})

async function sendInitialData(socket, location) {
  try {
    const [weatherData, alerts] = await Promise.all([getWeatherData(location), getAlerts(location)])

    socket.emit("weather_update", weatherData)
    socket.emit("alerts_update", alerts)
  } catch (error) {
    console.error("Error sending initial data:", error)
  }
}

// Simulate real-time updates
function startSimulation() {
  // Update weather data every minute
  setInterval(async () => {
    for (const [socketId, location] of clients.entries()) {
      const socket = io.sockets.sockets.get(socketId)
      if (socket) {
        try {
          const weatherData = await getWeatherData(location)
          socket.emit("weather_update", weatherData)
        } catch (error) {
          console.error("Error sending weather update:", error)
        }
      }
    }
  }, 60000)

  // Update alerts every 5 minutes
  setInterval(async () => {
    for (const [socketId, location] of clients.entries()) {
      const socket = io.sockets.sockets.get(socketId)
      if (socket) {
        try {
          const alerts = await getAlerts(location)
          socket.emit("alerts_update", alerts)
        } catch (error) {
          console.error("Error sending alerts update:", error)
        }
      }
    }
  }, 300000)
}

// Start the server
const PORT = process.env.PORT || 4000
httpServer.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`)
  startSimulation()
})

