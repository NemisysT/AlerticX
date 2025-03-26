"use client"

import { useEffect, useState } from "react"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

// Fix for Leaflet marker icons in Next.js
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/marker-icon-2x.png",
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
  })
}

// Sample disaster data
const disasterData = [
  {
    id: 1,
    type: "wildfire",
    position: [34.05, -118.24],
    title: "Active Wildfire",
    description: "Sierra National Forest wildfire. Evacuation orders in place.",
    radius: 20000,
    color: "#ef4444",
  },
  {
    id: 2,
    type: "flood",
    position: [34.15, -118.5],
    title: "Flood Warning",
    description: "Flash flood warning for coastal areas. Heavy rainfall expected.",
    radius: 15000,
    color: "#3b82f6",
  },
  {
    id: 3,
    type: "storm",
    position: [33.9, -118.1],
    title: "Severe Thunderstorm",
    description: "Severe thunderstorm warning for Riverside County until 8:00 PM.",
    radius: 25000,
    color: "#eab308",
  },
]

export default function MapComponent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    fixLeafletIcon()
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <MapContainer center={[34.05, -118.24]} zoom={9} style={{ height: "600px", width: "100%" }} className="z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {disasterData.map((disaster) => (
        <div key={disaster.id}>
          <Circle
            center={disaster.position as [number, number]}
            radius={disaster.radius}
            pathOptions={{
              color: disaster.color,
              fillColor: disaster.color,
              fillOpacity: 0.2,
            }}
          />
          <Marker position={disaster.position as [number, number]}>
            <Popup>
              <div className="p-1">
                <h3 className="font-medium">{disaster.title}</h3>
                <p className="text-sm">{disaster.description}</p>
              </div>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  )
}

