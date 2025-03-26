"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Shield, Flame, CloudLightning } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

// Dynamically import the Map component to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => <div className="flex h-[600px] w-full items-center justify-center bg-muted">Loading map...</div>,
})

export default function MapPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 mr-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Alertic</span>
          </div>
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Interactive Map</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Share
            </Button>
            <Button size="sm">Save Location</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-5">
            <CardContent className="p-0">{mounted && <MapComponent />}</CardContent>
          </Card>
          <div className="space-y-4 md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Map Layers</CardTitle>
                <CardDescription>Toggle different data layers on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="disasters" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="disasters">Disasters</TabsTrigger>
                    <TabsTrigger value="weather">Weather</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="disasters" className="space-y-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-red-500"></div>
                      <span className="text-sm">Wildfires</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Floods</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Storms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                      <span className="text-sm">Earthquakes</span>
                    </div>
                  </TabsContent>
                  <TabsContent value="weather" className="space-y-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-sky-300"></div>
                      <span className="text-sm">Precipitation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-orange-300"></div>
                      <span className="text-sm">Temperature</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-green-300"></div>
                      <span className="text-sm">Air Quality</span>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Alerts</CardTitle>
                <CardDescription>Current alerts in the visible area</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-red-500/10 p-3 border border-red-500/20">
                  <div className="font-medium text-red-500 flex items-center gap-2">
                    <Flame className="h-4 w-4" />
                    Wildfire Alert
                  </div>
                  <div className="text-sm mt-1">
                    Active wildfire in Sierra National Forest. Evacuation orders in place.
                  </div>
                </div>
                <div className="rounded-md bg-yellow-500/10 p-3 border border-yellow-500/20">
                  <div className="font-medium text-yellow-500 flex items-center gap-2">
                    <CloudLightning className="h-4 w-4" />
                    Severe Thunderstorm
                  </div>
                  <div className="text-sm mt-1">Severe thunderstorm warning for Riverside County until 8:00 PM.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

