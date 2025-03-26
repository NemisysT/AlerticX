"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    date: "Jan",
    temperature: 22,
    humidity: 65,
    rainfall: 12,
  },
  {
    date: "Feb",
    temperature: 24,
    humidity: 63,
    rainfall: 10,
  },
  {
    date: "Mar",
    temperature: 25,
    humidity: 68,
    rainfall: 15,
  },
  {
    date: "Apr",
    temperature: 26,
    humidity: 70,
    rainfall: 20,
  },
  {
    date: "May",
    temperature: 28,
    humidity: 72,
    rainfall: 22,
  },
  {
    date: "Jun",
    temperature: 30,
    humidity: 75,
    rainfall: 18,
  },
  {
    date: "Jul",
    temperature: 32,
    humidity: 78,
    rainfall: 15,
  },
]

export function ClimateChart() {
  return (
    <ChartContainer
      config={{
        temperature: {
          label: "Temperature (°C)",
          color: "hsl(var(--chart-1))",
        },
        humidity: {
          label: "Humidity (%)",
          color: "hsl(var(--chart-2))",
        },
        rainfall: {
          label: "Rainfall (mm)",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="var(--color-temperature)"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="humidity" stroke="var(--color-humidity)" strokeWidth={2} />
          <Line type="monotone" dataKey="rainfall" stroke="var(--color-rainfall)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

