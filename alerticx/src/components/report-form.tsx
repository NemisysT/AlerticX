"use client"

import type React from "react"

import { useState } from "react"
import { CloudLightning, Droplets, Flame, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export function ReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Report submitted successfully!")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Report Title</Label>
        <Input id="title" placeholder="Brief title describing the incident" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="type">Incident Type</Label>
        <RadioGroup defaultValue="wildfire" className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="wildfire" id="wildfire" />
            <Label htmlFor="wildfire" className="flex items-center gap-2 cursor-pointer">
              <Flame className="h-4 w-4 text-red-500" />
              Wildfire
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="flood" id="flood" />
            <Label htmlFor="flood" className="flex items-center gap-2 cursor-pointer">
              <Droplets className="h-4 w-4 text-blue-500" />
              Flooding
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="storm" id="storm" />
            <Label htmlFor="storm" className="flex items-center gap-2 cursor-pointer">
              <CloudLightning className="h-4 w-4 text-yellow-500" />
              Storm
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other" className="cursor-pointer">
              Other
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Provide details about what you're observing"
          className="min-h-[120px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <div className="flex gap-2">
          <Input id="location" placeholder="Enter location" className="flex-1" required />
          <Button type="button" variant="outline" size="icon">
            <MapPin className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Enter an address or use the pin button to use your current location
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Upload Image (Optional)</Label>
        <Input id="image" type="file" accept="image/*" />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Report"}
      </Button>
    </form>
  )
}

