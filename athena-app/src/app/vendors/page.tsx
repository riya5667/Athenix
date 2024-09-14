import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Star, MapPin, DollarSign } from "lucide-react"

// Mock data for vendors
const vendors = [
  { id: 1, name: "Elegant Catering", type: "Catering", rating: 4.8, location: "New York, NY", priceRange: "$$$" },
  { id: 2, name: "Floral Fantasy", type: "Florist", rating: 4.5, location: "Los Angeles, CA", priceRange: "$$" },
  { id: 3, name: "Sound Masters", type: "DJ/Music", rating: 4.7, location: "Chicago, IL", priceRange: "$$" },
  { id: 4, name: "Picture Perfect", type: "Photography", rating: 4.9, location: "Miami, FL", priceRange: "$$$" },
  { id: 5, name: "Dream Venues", type: "Venue", rating: 4.6, location: "Las Vegas, NV", priceRange: "$$$$" },
  { id: 6, name: "Decor Delights", type: "Decoration", rating: 4.4, location: "San Francisco, CA", priceRange: "$$" },
]

export default function VendorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Vendors</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input placeholder="Search vendors..." className="md:w-1/3" />
        <Select>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Vendor type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="catering">Catering</SelectItem>
            <SelectItem value="florist">Florist</SelectItem>
            <SelectItem value="music">DJ/Music</SelectItem>
            <SelectItem value="photography">Photography</SelectItem>
            <SelectItem value="venue">Venue</SelectItem>
            <SelectItem value="decoration">Decoration</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Price range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="$">$</SelectItem>
            <SelectItem value="$$">$$</SelectItem>
            <SelectItem value="$$$">$$$</SelectItem>
            <SelectItem value="$$$$">$$$$</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {vendors.map((vendor) => (
          <Card key={vendor.id}>
            <CardHeader>
              <CardTitle>{vendor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{vendor.type}</p>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{vendor.rating}</span>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{vendor.location}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                <span className="text-sm">{vendor.priceRange}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  )
}