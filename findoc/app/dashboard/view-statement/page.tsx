"use client"

import { useState } from "react"
import { Download, FileText, Filter, Printer } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ViewStatementPage() {
  const [selectedAccount, setSelectedAccount] = useState("checking")
  const [selectedPeriod, setSelectedPeriod] = useState("april2023")

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">Account Statements</h1>
        <p className="text-white/90">View and download your account statements</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Select Account</label>
            <Select value={selectedAccount} onValueChange={setSelectedAccount}>
              <SelectTrigger>
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="checking">Checking Account</SelectItem>
                <SelectItem value="savings">Savings Account</SelectItem>
                <SelectItem value="credit">Credit Card</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Statement Period</label>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger>
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="april2023">April 2023</SelectItem>
                <SelectItem value="march2023">March 2023</SelectItem>
                <SelectItem value="february2023">February 2023</SelectItem>
                <SelectItem value="january2023">January 2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Printer className="h-4 w-4" /> Print
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 gap-1">
            <Download className="h-4 w-4" /> Download PDF
          </Button>
        </div>
      </div>

      <Card className="shadow-md">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-white flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              <span>Statement: April 1-30, 2023</span>
            </CardTitle>
            <CardDescription>Checking Account - #1234567890</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-3 w-3" /> Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-6 border-b bg-blue-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-slate-500">Opening Balance</p>
                <p className="text-lg font-bold text-slate-800">$10,245.67</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Closing Balance</p>
                <p className="text-lg font-bold text-slate-800">$12,456.78</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Total Deposits</p>
                <p className="text-lg font-bold text-green-600">+$3,500.00</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Total Withdrawals</p>
                <p className="text-lg font-bold text-red-600">-$1,288.89</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 border-b">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Date</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Description</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Reference</th>
                  <th className="px-4 py-3 text-right font-medium text-slate-700">Amount</th>
                  <th className="px-4 py-3 text-right font-medium text-slate-700">Balance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "Apr 30, 2023",
                    description: "End of Month Balance",
                    reference: "-",
                    amount: 0,
                    balance: 12456.78,
                  },
                  {
                    date: "Apr 28, 2023",
                    description: "Refund",
                    reference: "REF123456",
                    amount: 29.99,
                    balance: 12456.78,
                  },
                  {
                    date: "Apr 25, 2023",
                    description: "Online Shopping",
                    reference: "AMZN*123456",
                    amount: -34.99,
                    balance: 12426.79,
                  },
                  {
                    date: "Apr 20, 2023",
                    description: "Electric Bill",
                    reference: "UTIL*POWER",
                    amount: -145.3,
                    balance: 12461.78,
                  },
                  {
                    date: "Apr 15, 2023",
                    description: "Salary Deposit",
                    reference: "PAYROLL",
                    amount: 2500.0,
                    balance: 12607.08,
                  },
                  {
                    date: "Apr 10, 2023",
                    description: "Grocery Store",
                    reference: "GROC*STORE",
                    amount: -78.45,
                    balance: 10107.08,
                  },
                  {
                    date: "Apr 05, 2023",
                    description: "Restaurant",
                    reference: "REST*DINER",
                    amount: -65.75,
                    balance: 10185.53,
                  },
                  {
                    date: "Apr 03, 2023",
                    description: "Gas Station",
                    reference: "FUEL*STOP",
                    amount: -45.0,
                    balance: 10251.28,
                  },
                  {
                    date: "Apr 01, 2023",
                    description: "Opening Balance",
                    reference: "-",
                    amount: 0,
                    balance: 10245.67,
                  },
                ].map((transaction, idx) => (
                  <tr key={idx} className="border-b hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-700">{transaction.date}</td>
                    <td className="px-4 py-3 text-slate-700">{transaction.description}</td>
                    <td className="px-4 py-3 text-slate-500">{transaction.reference}</td>
                    <td
                      className={`px-4 py-3 text-right font-medium ${
                        transaction.amount > 0
                          ? "text-green-600"
                          : transaction.amount < 0
                            ? "text-red-600"
                            : "text-slate-700"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}
                      {transaction.amount !== 0 ? transaction.amount.toFixed(2) : "-"}
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-slate-700">
                      {transaction.balance.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="bg-slate-50 border-t flex justify-between items-center">
          <p className="text-sm text-slate-500">This statement was generated on May 1, 2023</p>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            View Full Statement
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
