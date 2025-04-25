"use client"

import { useState } from "react"
import { CheckCircle, Plus, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// Mock data for bills
const bills = [
  {
    id: 1,
    name: "Electricity Bill",
    company: "Power Co.",
    amount: 145.3,
    dueDate: "2023-05-15",
    status: "pending",
    icon: "⚡",
  },
  {
    id: 2,
    name: "Water Bill",
    company: "Water Works",
    amount: 78.5,
    dueDate: "2023-05-20",
    status: "pending",
    icon: "💧",
  },
  { id: 3, name: "Internet", company: "Fast Net", amount: 89.99, dueDate: "2023-05-18", status: "pending", icon: "🌐" },
  {
    id: 4,
    name: "Phone Bill",
    company: "Mobile Inc.",
    amount: 65.0,
    dueDate: "2023-05-22",
    status: "pending",
    icon: "📱",
  },
]

export default function PayBillsPage() {
  const { toast } = useToast()
  const [selectedBill, setSelectedBill] = useState<number | null>(null)
  const [paymentStep, setPaymentStep] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    fromAccount: "checking",
    amount: "",
    scheduleDate: new Date().toISOString().split("T")[0],
  })

  const filteredBills = bills.filter(
    (bill) =>
      bill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSelectBill = (id: number) => {
    setSelectedBill(id)
    const bill = bills.find((b) => b.id === id)
    if (bill) {
      setFormData((prev) => ({ ...prev, amount: bill.amount.toString() }))
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayBill = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setPaymentStep(2)
    toast({
      title: "Payment Successful",
      description: "Your bill payment has been processed.",
    })
  }

  const handleNewPayment = () => {
    setSelectedBill(null)
    setPaymentStep(1)
    setFormData({
      fromAccount: "checking",
      amount: "",
      scheduleDate: new Date().toISOString().split("T")[0],
    })
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">Pay Bills</h1>
        <p className="text-white/90">Manage and pay your bills in one place</p>
      </div>

      <Tabs defaultValue="pay" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="pay">Pay Bills</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="pay" className="space-y-6">
          {paymentStep === 1 ? (
            <>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search bills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="h-4 w-4 mr-2" /> Add New Biller
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {filteredBills.map((bill) => (
                  <Card
                    key={bill.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedBill === bill.id ? "ring-2 ring-indigo-500 shadow-md" : "hover:border-indigo-200"
                    }`}
                    onClick={() => handleSelectBill(bill.id)}
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                        {bill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-800">{bill.name}</h3>
                        <p className="text-sm text-slate-500">{bill.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-800">${bill.amount.toFixed(2)}</p>
                        <p className="text-xs text-slate-500">Due: {new Date(bill.dueDate).toLocaleDateString()}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedBill && (
                <Card className="mt-6 border-t-4 border-t-indigo-500 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>Complete the information below to pay your bill</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-2">
                      <Label htmlFor="fromAccount">Pay From</Label>
                      <Select
                        value={formData.fromAccount}
                        onValueChange={(value) => handleChange("fromAccount", value)}
                      >
                        <SelectTrigger id="fromAccount">
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="checking">Checking Account - $12,456.78</SelectItem>
                          <SelectItem value="savings">Savings Account - $45,678.90</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-slate-500">$</span>
                        </div>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0.00"
                          className="pl-8"
                          value={formData.amount}
                          onChange={(e) => handleChange("amount", e.target.value)}
                          min="0.01"
                          step="0.01"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="scheduleDate">Payment Date</Label>
                      <Input
                        id="scheduleDate"
                        type="date"
                        value={formData.scheduleDate}
                        onChange={(e) => handleChange("scheduleDate", e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="bg-slate-50 border-t">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700" onClick={handlePayBill}>
                      Pay Bill Now
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </>
          ) : (
            <Card className="shadow-lg border-t-4 border-t-green-500">
              <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <CardTitle>Payment Successful</CardTitle>
                </div>
                <CardDescription>Your bill payment has been processed successfully</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-slate-50 p-4 rounded-lg border mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Biller</p>
                      <p className="font-medium">{bills.find((b) => b.id === selectedBill)?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Amount</p>
                      <p className="font-medium text-green-600">${Number.parseFloat(formData.amount).toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">From Account</p>
                      <p className="font-medium">
                        {formData.fromAccount === "checking" ? "Checking Account" : "Savings Account"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Payment Date</p>
                      <p className="font-medium">{new Date(formData.scheduleDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-green-800 text-sm">
                  <p>A confirmation has been sent to your email address.</p>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50 border-t flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                  onClick={handleNewPayment}
                >
                  Pay Another Bill
                </Button>
                <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">View Receipt</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Payments</CardTitle>
              <CardDescription>View and manage your upcoming bill payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="p-4 text-center text-slate-500">
                  <p>You don't have any scheduled payments.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your past bill payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="p-4 text-center text-slate-500">
                  <p>No payment history available.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
