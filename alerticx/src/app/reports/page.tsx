import { Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ReportsList } from "@/components/reports-list"
import { ReportForm } from "@/components/report-form"

export default function ReportsPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Community Reports</h1>
          <Button>Submit New Report</Button>
        </div>
        <Tabs defaultValue="browse" className="space-y-4">
          <TabsList>
            <TabsTrigger value="browse">Browse Reports</TabsTrigger>
            <TabsTrigger value="submit">Submit Report</TabsTrigger>
            <TabsTrigger value="my-reports">My Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="browse" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Community Reports</CardTitle>
                <CardDescription>View reports submitted by community members in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <ReportsList />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Load More
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="submit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Submit a New Report</CardTitle>
                <CardDescription>Share information about local climate incidents or conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <ReportForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="my-reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Submitted Reports</CardTitle>
                <CardDescription>View and manage reports you have submitted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  You haven&apos;t submitted any reports yet.
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit Your First Report</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

