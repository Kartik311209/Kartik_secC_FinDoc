"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, Download, Filter, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TransactionsPage() {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      date: "May 5, 2023",
      description: "Grocery Store",
      category: "Shopping",
      type: "debit",
      amount: 78.45,
      status: "completed",
      account: "Checking",
    },
    {
      id: 2,
      date: "May 3, 2023",
      description: "Salary Deposit",
      category: "Income",
      type: "credit",
      amount: 2500.0,
      status: "completed",
      account: "Checking",
    },
    {
      id: 3,
      date: "May 2, 2023",
      description: "Electric Bill",
      category: "Utilities",
      type: "debit",
      amount: 145.3,
      status: "completed",
      account: "Checking",
    },
    {
      id: 4,
      date: "May 1, 2023",
      description: "Online Shopping",
      category: "Shopping",
      type: "debit",
      amount: 34.99,
      status: "completed",
      account: "Credit Card",
    },
    {
      id: 5,
      date: "Apr 30, 2023",
      description: "Refund",
      category: "Income",
      type: "credit",
      amount: 29.99,
      status: "completed",
      account: "Checking",
    },
    {
      id: 6,
      date: "Apr 28, 2023",
      description: "Restaurant",
      category: "Dining",
      type: "debit",
      amount: 65.75,
      status: "completed",
      account: "Credit Card",
    },
    {
      id: 7,
      date: "Apr 25, 2023",
      description: "Gas Station",
      category: "Transportation",
      type: "debit",
      amount: 45.0,
      status: "completed",
      account: "Checking",
    },
    {
      id: 8,
      date: "Apr 20, 2023",
      description: "Movie Tickets",
      category: "Entertainment",
      type: "debit",
      amount: 28.5,
      status: "completed",
      account: "Credit Card",
    },
    {
      id: 9,
      date: "Apr 15, 2023",
      description: "Transfer to Savings",
      category: "Transfer",
      type: "debit",
      amount: 500.0,
      status: "completed",
      account: "Checking",
    },
    {
      id: 10,
      date: "Apr 15, 2023",
      description: "Transfer from Checking",
      category: "Transfer",
      type: "credit",
      amount: 500.0,
      status: "completed",
      account: "Savings",
    },
  ]

  // Filter transactions
  const filteredTransactions = transactions.filter((transaction) => {
    // Filter by type
    if (filter === "income" && transaction.type !== "credit") return false
    if (filter === "expenses" && transaction.type !== "debit") return false

    // Filter by search term
    if (searchTerm && !transaction.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }

    return true
  })

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
        <p className="text-white/90">View and manage all your transactions</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            placeholder="Search transactions..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter transactions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="income">Income Only</SelectItem>
              <SelectItem value="expenses">Expenses Only</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-1">
            <Filter className="h-4 w-4" /> More Filters
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-1">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <Card className="shadow-md">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View all your recent transactions</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 border-b">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Date</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Description</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Category</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Account</th>
                  <th className="px-4 py-3 text-right font-medium text-slate-700">Amount</th>
                  <th className="px-4 py-3 text-right font-medium text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-700">{transaction.date}</td>
                    <td className="px-4 py-3 text-slate-700">{transaction.description}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          transaction.category === "Income"
                            ? "bg-green-100 text-green-800"
                            : transaction.category === "Transfer"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {transaction.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{transaction.account}</td>
                    <td
                      className={`px-4 py-3 text-right font-medium ${
                        transaction.type === "credit" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <div className="flex items-center justify-end gap-1">
                        {transaction.type === "credit" ? (
                          <ArrowDown className="h-3 w-3" />
                        ) : (
                          <ArrowUp className="h-3 w-3" />
                        )}
                        ${transaction.amount.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="sm">
                        Details
                      </Button>
                    </td>
                  </tr>
                ))}

                {filteredTransactions.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                      No transactions found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
