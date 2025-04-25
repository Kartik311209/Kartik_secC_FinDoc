"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function TransferPage() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
    description: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setStep(2)
  }

  const handleNewTransfer = () => {
    setFormData({
      fromAccount: "",
      toAccount: "",
      amount: "",
      description: "",
    })
    setStep(1)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Transfer Money</h1>
        <p className="text-slate-600">Transfer funds between your accounts or to other recipients</p>
      </div>

      {step === 1 ? (
        <Card className="shadow-lg border-t-4 border-t-indigo-500">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
            <CardTitle>New Transfer</CardTitle>
            <CardDescription>Fill in the details to make a transfer</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="fromAccount">From Account</Label>
                <Select
                  value={formData.fromAccount}
                  onValueChange={(value) => handleChange("fromAccount", value)}
                  required
                >
                  <SelectTrigger id="fromAccount" className="w-full">
                    <SelectValue placeholder="Select source account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Checking Account - $12,456.78</SelectItem>
                    <SelectItem value="savings">Savings Account - $45,678.90</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="toAccount">To Account</Label>
                <Select value={formData.toAccount} onValueChange={(value) => handleChange("toAccount", value)} required>
                  <SelectTrigger id="toAccount" className="w-full">
                    <SelectValue placeholder="Select destination account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="savings">My Savings Account</SelectItem>
                    <SelectItem value="credit">My Credit Card</SelectItem>
                    <SelectItem value="external">External Account</SelectItem>
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
                    required
                    min="0.01"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input
                  id="description"
                  placeholder="Enter a description for this transfer"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t">
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isLoading}>
                {isLoading ? "Processing..." : "Continue to Review"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <Card className="shadow-lg border-t-4 border-t-green-500">
          <CardHeader className="bg-gradient-to-r from-green-50 to-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <CardTitle>Transfer Successful</CardTitle>
            </div>
            <CardDescription>Your transfer has been processed successfully</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-slate-50 p-4 rounded-lg border mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">From</p>
                  <p className="font-medium">
                    {formData.fromAccount === "checking" ? "Checking Account" : "Savings Account"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">To</p>
                  <p className="font-medium">
                    {formData.toAccount === "savings"
                      ? "Savings Account"
                      : formData.toAccount === "credit"
                        ? "Credit Card"
                        : "External Account"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Amount</p>
                  <p className="font-medium text-green-600">${Number.parseFloat(formData.amount).toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
                {formData.description && (
                  <div className="col-span-2">
                    <p className="text-sm text-slate-500">Description</p>
                    <p className="font-medium">{formData.description}</p>
                  </div>
                )}
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
              onClick={handleNewTransfer}
            >
              New Transfer
            </Button>
            <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">View Receipt</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
