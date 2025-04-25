import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for branches
const branches = [
  {
    id: 1,
    name: "Downtown Financial Center",
    address: "123 Main Street, New York, NY 10001",
    phone: "(212) 555-1234",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM",
    services: ["ATM", "Safe Deposit Boxes", "Mortgage Services", "Investment Services"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Westside Branch",
    address: "456 West Avenue, New York, NY 10023",
    phone: "(212) 555-5678",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM",
    services: ["ATM", "Drive-Through Banking", "Loan Services"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Eastside Branch",
    address: "789 East Boulevard, New York, NY 10028",
    phone: "(212) 555-9012",
    hours: "Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM",
    services: ["ATM", "Safe Deposit Boxes", "Wealth Management"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Midtown Branch",
    address: "321 Central Park, New York, NY 10022",
    phone: "(212) 555-3456",
    hours: "Mon-Fri: 9:00 AM - 7:00 PM, Sat: 10:00 AM - 4:00 PM, Sun: 11:00 AM - 2:00 PM",
    services: ["ATM", "Business Banking", "Foreign Currency Exchange"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BranchesPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">Branch Locations</h1>
        <p className="text-white/90">Find a Findoc branch near you</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input placeholder="Enter zip code or city" className="pl-10" />
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">Find Branches</Button>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch) => (
              <Card key={branch.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img
                    src={branch.image || "/placeholder.svg"}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle className="text-teal-700">{branch.name}</CardTitle>
                  <CardDescription className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>{branch.hours}</span>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {branch.services.map((service, idx) => (
                        <span key={idx} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <Button variant="outline" className="flex-1 border-teal-200 text-teal-600 hover:bg-teal-50">
                      Get Directions
                    </Button>
                    <Button className="flex-1 bg-teal-600 hover:bg-teal-700">Schedule Appointment</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-slate-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-lg font-medium text-slate-800 mb-2">Interactive Map</h3>
                  <p className="text-slate-500 mb-4">View all branch locations on a map</p>
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <ExternalLink className="h-4 w-4 mr-2" /> Open Full Map
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
