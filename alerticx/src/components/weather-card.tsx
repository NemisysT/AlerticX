import type { ReactNode } from "react"
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WeatherCardProps {
  icon: ReactNode
  title: string
  value: string
  description: string
  trend: "up" | "down" | "neutral"
}

export function WeatherCard({ icon, title, value, description, trend }: WeatherCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center">
          {description}
          {trend === "up" && <ArrowUp className="ml-1 h-4 w-4 text-red-500" />}
          {trend === "down" && <ArrowDown className="ml-1 h-4 w-4 text-green-500" />}
          {trend === "neutral" && <ArrowRight className="ml-1 h-4 w-4 text-muted-foreground" />}
        </p>
      </CardContent>
    </Card>
  )
}

