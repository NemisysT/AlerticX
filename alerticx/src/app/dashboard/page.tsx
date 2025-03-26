import { Suspense } from "react"
import { Bell, CloudLightning, Droplets, Flame, Shield, ThermometerSun, Wind } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { WeatherCard } from "@/components/weather-card"
import { AlertsList } from "@/components/alerts-list"
import { ClimateChart } from "@/components/climate-chart"
import { LoadingDashboard } from "@/components/loading-dashboard"

export default function DashboardPage() {
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
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Customize
            </Button>
            <Button size="sm">Subscribe to Alerts</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Suspense fallback={<LoadingDashboard />}>
                <WeatherCard
                  icon={<ThermometerSun className="h-5 w-5" />}
                  title="Temperature"
                  value="24°C"
                  description="2°C above average"
                  trend="up"
                />
                <WeatherCard
                  icon={<Droplets className="h-5 w-5" />}
                  title="Humidity"
                  value="65%"
                  description="High humidity"
                  trend="neutral"
                />
                <WeatherCard
                  icon={<Wind className="h-5 w-5" />}
                  title="Wind Speed"
                  value="12 km/h"
                  description="Light breeze"
                  trend="down"
                />
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Air Quality</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Good</div>
                    <p className="text-xs text-muted-foreground">AQI: 42</p>
                  </CardContent>
                </Card>
              </Suspense>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Climate Trends</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Suspense
                    fallback={<div className="h-[300px] flex items-center justify-center">Loading chart...</div>}
                  >
                    <ClimateChart />
                  </Suspense>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Active Alerts</CardTitle>
                  <CardDescription>Recent warnings for your area</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading alerts...</div>}>
                    <AlertsList />
                  </Suspense>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Alerts
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Alert Settings</CardTitle>
                <CardDescription>Configure which alerts you want to receive and how</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CloudLightning className="h-5 w-5 text-primary" />
                      <span>Severe Weather Alerts</span>
                    </div>
                    <Badge>Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Flame className="h-5 w-5 text-destructive" />
                      <span>Wildfire Alerts</span>
                    </div>
                    <Badge>Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-5 w-5 text-blue-500" />
                      <span>Flood Warnings</span>
                    </div>
                    <Badge>Enabled</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Update Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

