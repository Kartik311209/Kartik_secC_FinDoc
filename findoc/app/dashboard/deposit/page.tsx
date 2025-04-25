"use client"

import { useState } from "react"
import { Camera, CheckCircle, Upload } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function DepositPage() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [depositMethod, setDepositMethod] = useState("mobile")
  const [formData, setFormData] = useState({
    toAccount: "checking",
    amount: "",
    description: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setStep(2)
    toast({
      title: "Deposit Successful",
      description: "Your deposit has been processed successfully.",
    })
  }

  const handleNewDeposit = () => {
    setFormData({
      toAccount: "checking",
      amount: "",
      description: "",
    })
    setStep(1)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">Make a Deposit</h1>
        <p className="text-white/90">Deposit funds into your account</p>
      </div>

      {step === 1 ? (
        <>
          <Tabs defaultValue={depositMethod} value={depositMethod} onValueChange={setDepositMethod} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="mobile">Mobile Deposit</TabsTrigger>
              <TabsTrigger value="transfer">Bank Transfer</TabsTrigger>
              <TabsTrigger value="wire">Wire Transfer</TabsTrigger>
            </TabsList>

            <TabsContent value="mobile" className="space-y-6">
              <Card className="shadow-md border-t-4 border-t-green-500">
                <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                  <div className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-green-500" />
                    <CardTitle>Mobile Check Deposit</CardTitle>
                  </div>
                  <CardDescription>Deposit a check by taking a photo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="toAccount">Deposit To</Label>
                    <Select value={formData.toAccount} onValueChange={(value) => handleChange("toAccount", value)}>
                      <SelectTrigger id="toAccount">
                        <SelectValue placeholder="Select account" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checking">Checking Account - $12,456.78</SelectItem>
                        <SelectItem value="savings">Savings Account - $45,678.90</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Check Amount</Label>
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
                    <Label>Check Images</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-slate-400 mb-2" />
                        <p className="text-sm font-medium text-slate-700">Front of Check</p>
                        <p className="text-xs text-slate-500 mt-1">Click to upload or drag and drop</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Upload Image
                        </Button>
                      </div>
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-slate-400 mb-2" />
                        <p className="text-sm font-medium text-slate-700">Back of Check</p>
                        <p className="text-xs text-slate-500 mt-1">Click to upload or drag and drop</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Upload Image
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Memo (Optional)</Label>
                    <Input
                      id="description"
                      placeholder="Enter a description for this deposit"
                      value={formData.description}
                      onChange={(e) => handleChange("description", e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 border-t">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={handleSubmit}
                    disabled={isLoading || !formData.amount}
                  >
                    {isLoading ? "Processing..." : "Deposit Check"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="transfer" className="space-y-6">
              <Card className="shadow-md border-t-4 border-t-green-500">
                <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                  <CardTitle>Bank Transfer</CardTitle>
                  <CardDescription>Transfer funds from another bank</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="toAccountTransfer">Deposit To</Label>
                    <Select defaultValue="checking">
                      <SelectTrigger id="toAccountTransfer">
                        <SelectValue placeholder="Select account" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checking">Checking Account - $12,456.78</SelectItem>
                        <SelectItem value="savings">Savings Account - $45,678.90</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-md border border-blue-100 text-blue-800 text-sm">
                    <p>To set up a bank transfer, you'll need:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Your Findoc account and routing numbers</li>
                      <li>Access to your external bank account</li>
                    </ul>
                  </div>

                  <div className="border rounded-md p-4">
                    <h3 className="font-medium text-slate-800 mb-2">Your Account Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-500">Account Number</p>
                        <p className="font-medium">1234567890</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Routing Number</p>
                        <p className="font-medium">987654321</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 border-t">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Set Up Bank Transfer</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="wire" className="space-y-6">
              <Card className="shadow-md border-t-4 border-t-green-500">
                <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                  <CardTitle>Wire Transfer</CardTitle>
                  <CardDescription>Receive funds via wire transfer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="p-4 bg-amber-50 rounded-md border border-amber-100 text-amber-800 text-sm">
                    <p>For wire transfers, please provide the sender with the following information:</p>
                  </div>

                  <div className="border rounded-md p-4">
                    <h3 className="font-medium text-slate-800 mb-2">Wire Transfer Instructions</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-slate-500">Bank Name</p>
                        <p className="font-medium">Findoc Financial Institution</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Account Number</p>
                        <p className="font-medium">1234567890</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Routing Number</p>
                        <p className="font-medium">987654321</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">SWIFT Code (for international wires)</p>
                        <p className="font-medium">FINDOCUS</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Bank Address</p>
                        <p className="font-medium">123 Finance Street, New York, NY 10001</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 border-t">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Download Wire Instructions</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <Card className="shadow-lg border-t-4 border-t-green-500">
          <CardHeader className="bg-gradient-to-r from-green-50 to-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <CardTitle>Deposit Successful</CardTitle>
            </div>
            <CardDescription>Your deposit has been submitted successfully</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-slate-50 p-4 rounded-lg border mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Deposit Amount</p>
                  <p className="font-medium text-green-600">${Number.parseFloat(formData.amount).toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">To Account</p>
                  <p className="font-medium">
                    {formData.toAccount === "checking" ? "Checking Account" : "Savings Account"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="font-medium text-amber-600">Pending Review</p>
                </div>
                {formData.description && (
                  <div className="col-span-2">
                    <p className="text-sm text-slate-500">Memo</p>
                    <p className="font-medium">{formData.description}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-green-800 text-sm">
              <p>
                Your deposit has been submitted and is pending review. Funds will be available in your account within
                1-2 business days.
              </p>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 border-t flex gap-4">
            <Button
              variant="outline"
              className="flex-1 border-green-200 text-green-600 hover:bg-green-50"
              onClick={handleNewDeposit}
            >
              Make Another Deposit
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700">View Receipt</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
