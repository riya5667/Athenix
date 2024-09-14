'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Calendar } from "~/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"
import { cn } from "~/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, CheckIcon } from "lucide-react"
import { Textarea } from "~/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Progress } from "~/components/ui/progress"
import { toast } from "~/hooks/use-toast"

const steps = [
  { title: "Event Details", description: "Enter the basic details of your event" },
  { title: "Date and Time", description: "Select the date and time for your event" },
  { title: "Location", description: "Choose the location for your event" },
  { title: "Guests", description: "Add guests to your event" },
]

export default function EventCreationWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [eventDetails, setEventDetails] = useState({
    name: "",
    description: "",
    date: null,
    time: "",
    location: "",
    locationType: "",
    guests: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEventDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateSelect = (date) => {
    setEventDetails((prev) => ({ ...prev, date }))
  }

  const handleLocationTypeChange = (value) => {
    setEventDetails((prev) => ({ ...prev, locationType: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      if (validateStep()) {
        setCurrentStep((prev) => prev + 1)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const validateStep = () => {
    switch (currentStep) {
      case 0:
        if (!eventDetails.name.trim()) {
          toast({ title: "Error", description: "Event name is required", variant: "destructive" })
          return false
        }
        break
      case 1:
        if (!eventDetails.date || !eventDetails.time) {
          toast({ title: "Error", description: "Date and time are required", variant: "destructive" })
          return false
        }
        break
      case 2:
        if (!eventDetails.locationType) {
          toast({ title: "Error", description: "Location type is required", variant: "destructive" })
          return false
        }
        if (eventDetails.locationType === "physical" && !eventDetails.location.trim()) {
          toast({ title: "Error", description: "Physical location is required", variant: "destructive" })
          return false
        }
        break
      case 3:
        if (!eventDetails.guests.trim()) {
          toast({ title: "Error", description: "At least one guest is required", variant: "destructive" })
          return false
        }
        break
    }
    return true
  }

  const createEvent = () => {
    if (validateStep()) {
      console.log("Event created:", eventDetails)
      toast({ title: "Success", description: "Event created successfully!", icon: <CheckIcon className="h-4 w-4" /> })
      // Here you would typically send the data to your backend
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Event Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={eventDetails.name} 
                onChange={handleInputChange} 
                placeholder="Enter event name" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                value={eventDetails.description} 
                onChange={handleInputChange} 
                placeholder="Enter event description" 
                rows={4}
              />
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !eventDetails.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {eventDetails.date ? format(eventDetails.date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={eventDetails.date}
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Event Time</Label>
              <Input 
                id="time" 
                name="time" 
                type="time" 
                value={eventDetails.time} 
                onChange={handleInputChange} 
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="locationType">Location Type</Label>
              <Select onValueChange={handleLocationTypeChange} value={eventDetails.locationType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="physical">Physical Location</SelectItem>
                  <SelectItem value="virtual">Virtual Meeting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {eventDetails.locationType === "physical" && (
              <div className="space-y-2">
                <Label htmlFor="location">Physical Location</Label>
                <Input 
                  id="location" 
                  name="location" 
                  value={eventDetails.location} 
                  onChange={handleInputChange} 
                  placeholder="Enter physical location" 
                />
              </div>
            )}
            {eventDetails.locationType === "virtual" && (
              <div className="space-y-2">
                <Label htmlFor="location">Meeting Link</Label>
                <Input 
                  id="location" 
                  name="location" 
                  value={eventDetails.location} 
                  onChange={handleInputChange} 
                  placeholder="Enter virtual meeting link" 
                />
              </div>
            )}
          </div>
        )
      case 3:
        return (
          <div className="space-y-2">
            <Label htmlFor="guests">Guest List</Label>
            <Textarea 
              id="guests" 
              name="guests" 
              value={eventDetails.guests} 
              onChange={handleInputChange} 
              placeholder="Enter guest emails (one per line)" 
              rows={4}
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{steps[currentStep].title}</CardTitle>
        <CardDescription>{steps[currentStep].description}</CardDescription>
      </CardHeader>
      <CardContent>
        {renderStepContent()}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Progress value={(currentStep + 1) / steps.length * 100} className="w-full" />
        <div className="flex justify-between w-full">
          <Button onClick={prevStep} disabled={currentStep === 0} variant="outline">Previous</Button>
          {currentStep === steps.length - 1 ? (
            <Button onClick={createEvent}>Create Event</Button>
          ) : (
            <Button onClick={nextStep}>Next</Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}