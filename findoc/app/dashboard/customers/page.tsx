"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CustomersPage() {
  const router = useRouter()
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication on the client side
    const checkAuth = async () => {
      try {
        // In a real app, you would fetch the session from an API
        // For this demo, we'll simulate a successful auth check
        setSession({ role: "admin" })
        setLoading(false)
      } catch (error) {
        console.error("Authentication error:", error)
        router.push("/login")
      }
    }

    checkAuth()
  }, [router])

  const [currentPage, setCurrentPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const itemsPerPage = 10

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  // Mock customer data
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      accountNumber: "1234567890",
      status: "Active",
      balance: 12456.78,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      accountNumber: "0987654321",
      status: "Active",
      balance: 45678.9,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      accountNumber: "5678901234",
      status: "Inactive",
      balance: 0,
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      accountNumber: "4321098765",
      status: "Active",
      balance: 7890.12,
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie.wilson@example.com",
      accountNumber: "9876543210",
      status: "Active",
      balance: 34567.89,
    },
    {
      id: 6,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      accountNumber: "2468013579",
      status: "Active",
      balance: 23456.78,
    },
    {
      id: 7,
      name: "Michael Rodriguez",
      email: "michael.rodriguez@example.com",
      accountNumber: "1357924680",
      status: "Active",
      balance: 18765.43,
    },
    {
      id: 8,
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      accountNumber: "8642097531",
      status: "Active",
      balance: 56789.01,
    },
    {
      id: 9,
      name: "William Taylor",
      email: "william.taylor@example.com",
      accountNumber: "7531902468",
      status: "Inactive",
      balance: 0,
    },
    {
      id: 10,
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      accountNumber: "9753108642",
      status: "Active",
      balance: 29876.54,
    },
    {
      id: 11,
      name: "James Anderson",
      email: "james.anderson@example.com",
      accountNumber: "3698521470",
      status: "Active",
      balance: 41234.56,
    },
    {
      id: 12,
      name: "Ava Thomas",
      email: "ava.thomas@example.com",
      accountNumber: "1472583690",
      status: "Active",
      balance: 15678.9,
    },
    {
      id: 13,
      name: "Robert White",
      email: "robert.white@example.com",
      accountNumber: "2583691470",
      status: "Inactive",
      balance: 0,
    },
    {
      id: 14,
      name: "Isabella Harris",
      email: "isabella.harris@example.com",
      accountNumber: "3691472580",
      status: "Active",
      balance: 32109.87,
    },
    {
      id: 15,
      name: "David Clark",
      email: "david.clark@example.com",
      accountNumber: "4567890123",
      status: "Active",
      balance: 67890.12,
    },
  ]

  // Filter customers based on status and search query
  const filteredCustomers = customers.filter((customer) => {
    // Filter by status
    if (statusFilter !== "all" && customer.status.toLowerCase() !== statusFilter.toLowerCase()) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !customer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !customer.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !customer.accountNumber.includes(searchQuery)
    ) {
      return false
    }

    return true
  })

  // Paginate customers
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage)
  const paginatedCustomers = filteredCustomers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
        <Button>Add Customer</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
          <CardDescription>View and manage all customer accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 flex gap-4">
              <Input
                placeholder="Search customers..."
                className="max-w-sm"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1) // Reset to first page on search
                }}
              />
              <Select
                value={statusFilter}
                onValueChange={(value) => {
                  setStatusFilter(value)
                  setCurrentPage(1) // Reset to first page on filter change
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="gap-1">
              <Filter className="h-4 w-4" /> Advanced Filters
            </Button>
            <Button>Add Customer</Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Account Number</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedCustomers.length > 0 ? (
                  paginatedCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.accountNumber}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            customer.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {customer.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">${customer.balance.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      No customers found matching your criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          {filteredCustomers.length > 0 && (
            <div className="flex items-center justify-between px-4 py-4 border-t">
              <div className="text-sm text-slate-500">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredCustomers.length)} of {filteredCustomers.length} customers
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous Page</span>
                </Button>
                <div className="text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next Page</span>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
