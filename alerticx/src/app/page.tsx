import Link from "next/link"
import { ArrowRight, CloudLightning, Droplets, Flame, Shield } from "lucide-react"
import  Hyperspeed  from "../blocks/Backgrounds/Hyperspeed"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Alertic</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Dashboard
            </Link>
            <Link href="/alerts" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Alerts
            </Link>
            <Link href="/map" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Map
            </Link>
            <Link href="/reports" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Community Reports
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <Hyperspeed  />
          <div className="relative z-10 container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Real-time Climate Monitoring & Disaster Alerts
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Stay informed about climate conditions and potential disasters in your area with accurate, real-time
                    data and alerts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="gap-1.5">
                      View Dashboard
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/map">
                    <Button size="lg" variant="outline">
                      Explore Map
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <CloudLightning className="h-5 w-5 text-primary" />
                        Storm Alerts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Get real-time notifications about approaching storms and severe weather conditions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Flame className="h-5 w-5 text-destructive" />
                        Wildfire Tracking
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Monitor active wildfires and receive evacuation alerts for affected areas.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-blue-500" />
                        Flood Warnings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Stay ahead of potential flooding with early warnings and precipitation forecasts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        Community Reports
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Contribute and access local climate incident reports from community members.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Hyperspeed/>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Alertic provides comprehensive climate monitoring and disaster alert features to keep you informed and
                  safe.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CloudLightning className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Live Climate Data</h3>
                <p className="text-center text-muted-foreground">
                  Real-time weather details including temperature, humidity, wind speed, and air quality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Disaster Alerts</h3>
                <p className="text-center text-muted-foreground">
                  Timely warnings for earthquakes, hurricanes, wildfires, and other natural disasters.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Interactive Map</h3>
                <p className="text-center text-muted-foreground">
                  Visualize ongoing climate events and risk zones with our interactive mapping system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">Alertic</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Alertic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

