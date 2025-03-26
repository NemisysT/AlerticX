import { CloudLightning, Droplets, Flame } from "lucide-react"

export function AlertsList() {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-4">
        <div className="mt-0.5">
          <Flame className="h-5 w-5 text-red-500" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Wildfire Alert</p>
          <p className="text-sm text-muted-foreground">
            Active wildfire in Sierra National Forest. Evacuation orders in place.
          </p>
          <p className="text-xs text-muted-foreground">30 minutes ago</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="mt-0.5">
          <CloudLightning className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Severe Thunderstorm</p>
          <p className="text-sm text-muted-foreground">
            Severe thunderstorm warning for Riverside County until 8:00 PM.
          </p>
          <p className="text-xs text-muted-foreground">1 hour ago</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="mt-0.5">
          <Droplets className="h-5 w-5 text-blue-500" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Flood Warning</p>
          <p className="text-sm text-muted-foreground">
            Flash flood warning for coastal areas. Heavy rainfall expected.
          </p>
          <p className="text-xs text-muted-foreground">2 hours ago</p>
        </div>
      </div>
    </div>
  )
}

