import { CloudLightning, Droplets, Flame, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function ReportsList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          <Badge className="bg-red-500 hover:bg-red-600">Wildfire</Badge>
        </div>
        <div className="rounded-md border p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Flame className="h-4 w-4 text-red-500" />
            <p className="font-medium">Smoke Visible from Highway 101</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Heavy smoke visible from Highway 101 near Santa Barbara. Fire appears to be growing in the hills.
          </p>
          <div className="mt-2 text-xs text-muted-foreground">Location: Santa Barbara, CA</div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Michael Chen</p>
              <p className="text-xs text-muted-foreground">5 hours ago</p>
            </div>
          </div>
          <Badge className="bg-blue-500 hover:bg-blue-600">Flooding</Badge>
        </div>
        <div className="rounded-md border p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <p className="font-medium">Street Flooding in Downtown</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Several streets in downtown are flooded after heavy rainfall. Avoid 5th and Main intersection.
          </p>
          <div className="mt-2 text-xs text-muted-foreground">Location: Downtown Los Angeles, CA</div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Emily Rodriguez</p>
              <p className="text-xs text-muted-foreground">Yesterday</p>
            </div>
          </div>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Storm</Badge>
        </div>
        <div className="rounded-md border p-4">
          <div className="flex items-center space-x-2 mb-2">
            <CloudLightning className="h-4 w-4 text-yellow-500" />
            <p className="font-medium">Power Outage After Lightning Strike</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Lightning struck a transformer in our neighborhood. Power is out for several blocks.
          </p>
          <div className="mt-2 text-xs text-muted-foreground">Location: Riverside, CA</div>
        </div>
      </div>
    </div>
  )
}

