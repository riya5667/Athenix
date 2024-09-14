'use client'

import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { CalendarIcon, Clock, MapPin, Trash2 } from 'lucide-react'
import 'react-big-calendar/lib/css/react-big-calendar.css'

// Set up the localizer for react-big-calendar
const localizer = momentLocalizer(moment)

export default function SchedulePage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Conference Kickoff',
      start: new Date(2023, 5, 15, 9, 0),
      end: new Date(2023, 5, 15, 13, 0),
      location: 'Main Hall',
      description: 'Opening ceremony and keynote speeches'
    },
    {
      id: 2,
      title: 'Networking Lunch',
      start: new Date(2023, 5, 15, 13, 0),
      end: new Date(2023, 5, 15, 14, 30),
      location: 'Dining Area',
      description: 'Lunch and networking opportunity'
    }
  ])

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    location: '',
    description: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewEvent(prev => ({ ...prev, [name]: value }))
  }

  const handleAddEvent = (e) => {
    e.preventDefault()
    const eventToAdd = {
      ...newEvent,
      id: events.length + 1,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end)
    }
    setEvents([...events, eventToAdd])
    setNewEvent({ title: '', start: '', end: '', location: '', description: '' })
  }

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Event Schedule</h1>
      <Tabs defaultValue="calendar">
        <TabsList className="mb-4">
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="add">Add Event</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar">
          <Card>
            <CardContent>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>View and manage your scheduled events</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                {events.map(event => (
                  <Card key={event.id} className="mb-4">
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {moment(event.start).format('MMMM D, YYYY')}
                        </div>
                        <div className="flex items-center mt-1">
                          <Clock className="mr-2 h-4 w-4" />
                          {moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="mr-2 h-4 w-4" />
                          {event.location}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="destructive" onClick={() => handleDeleteEvent(event.id)}>
                        <Trash2 className="mr-2 h-4 w-4" /> Delete Event
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New Event</CardTitle>
              <CardDescription>Fill in the details to add a new event to your schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div>
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newEvent.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start">Start Date & Time</Label>
                    <Input
                      id="start"
                      name="start"
                      type="datetime-local"
                      value={newEvent.start}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="end">End Date & Time</Label>
                    <Input
                      id="end"
                      name="end"
                      type="datetime-local"
                      value={newEvent.end}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={newEvent.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newEvent.description}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
                <Button type="submit">Add Event</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}