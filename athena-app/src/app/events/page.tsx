import Link from 'next/link'
import { CalendarDays, MapPin, Users, PlusCircle } from 'lucide-react'

import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

// Mock data for events
const events = [
  {
    id: 1,
    title: "TechConf 2023",
    type: "Conference",
    date: "2023-09-15",
    location: "San Francisco, CA",
    attendees: 500,
    price: 299,
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Johnson Wedding",
    type: "Wedding",
    date: "2023-10-22",
    location: "New York, NY",
    attendees: 150,
    price: 25000,
    status: "Planning"
  },
  {
    id: 3,
    title: "Annual Corporate Retreat",
    type: "Corporate Event",
    date: "2023-11-05",
    location: "Aspen, CO",
    attendees: 75,
    price: 15000,
    status: "Confirmed"
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    type: "Networking",
    date: "2023-08-30",
    location: "Austin, TX",
    attendees: 200,
    price: 50,
    status: "Upcoming"
  }
]

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Event
        </Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" /> 
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 opacity-70" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 opacity-70" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-lg font-semibold">
                ${event.price.toLocaleString()}
              </div>
              <div className={`px-2 py-1 rounded-full text-sm ${
                event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                event.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {event.status}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}