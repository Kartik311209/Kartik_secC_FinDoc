"use client"

import { useState } from "react"
import { Download, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportsPage() {
  const [reportPeriod, setReportPeriod] = useState("month")
  const [reportType, setReportType] = useState("transactions")

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
        <p className="text-white/90">Gain insights into your financial data</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Report Type</label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="transactions">Transaction History</SelectItem>
                <SelectItem value="balance">Balance Summary</SelectItem>
                <SelectItem value="spending">Spending Analysis</SelectItem>
                <SelectItem value="income">Income Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Time Period</label>
            <Select value={reportPeriod} onValueChange={setReportPeriod}>
              <SelectTrigger>
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Filter className="h-4 w-4" /> More Filters
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 gap-1">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="charts" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="charts">Charts</TabsTrigger>
          <TabsTrigger value="tables">Tables</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="charts">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
                <CardTitle>Spending by Category</CardTitle>
                <CardDescription>Breakdown of your expenses by category</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-square bg-slate-50 rounded-md flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-slate-500">Pie chart visualization will appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
                <CardTitle>Monthly Transactions</CardTitle>
                <CardDescription>Transaction volume over time</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-square bg-slate-50 rounded-md flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-slate-500">Line chart visualization will appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md md:col-span-2">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
                <CardTitle>Income vs. Expenses</CardTitle>
                <CardDescription>Comparison of income and expenses over time</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-video bg-slate-50 rounded-md flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-slate-500">Bar chart visualization will appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tables">
          <Card className="shadow-md">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
              <CardTitle>Transaction Details</CardTitle>
              <CardDescription>Detailed list of all transactions</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="rounded-md border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b">
                      <th className="px-4 py-3 text-left font-medium text-slate-700">Date</th>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">Description</th>
                      <th className="px-4 py-3 text-left font-medium text-slate-700">Category</th>
                      <th className="px-4 py-3 text-right font-medium text-slate-700">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: "2023-05-01", description: "Grocery Store", category: "Food", amount: -78.45 },
                      { date: "2023-05-01", description: "Salary Deposit", category: "Income", amount: 2500.0 },
                      { date: "2023-05-02", description: "Electric Bill", category: "Utilities", amount: -145.3 },
                      { date: "2023-05-03", description: "Online Shopping", category: "Shopping", amount: -34.99 },
                      { date: "2023-05-04", description: "Refund", category: "Income", amount: 29.99 },
                      { date: "2023-05-05", description: "Restaurant", category: "Dining", amount: -65.75 },
                      { date: "2023-05-06", description: "Gas Station", category: "Transportation", amount: -45.0 },
                      { date: "2023-05-07", description: "Movie Tickets", category: "Entertainment", amount: -28.5 },
                    ].map((transaction, idx) => (
                      <tr key={idx} className="border-b hover:bg-slate-50">
                        <td className="px-4 py-3 text-slate-700">{transaction.date}</td>
                        <td className="px-4 py-3 text-slate-700">{transaction.description}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              transaction.category === "Income"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {transaction.category}
                          </span>
                        </td>
                        <td
                          className={`px-4 py-3 text-right font-medium ${
                            transaction.amount >= 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {transaction.amount >= 0 ? "+" : ""}
                          {transaction.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
                <CardTitle>Financial Summary</CardTitle>
                <CardDescription>Overview of your financial status</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-md bg-slate-50 border">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-slate-700">Total Income</h4>
                      <span className="text-green-600 font-bold">$2,529.99</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 border">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-slate-700">Total Expenses</h4>
                      <span className="text-red-600 font-bold">$397.99</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "15.7%" }}></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-green-50 border border-green-100">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-green-800">Net Balance</h4>
                      <span className="text-green-600 font-bold">+$2,132.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
                <CardTitle>Top Spending Categories</CardTitle>
                <CardDescription>Where your money is going</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { category: "Utilities", amount: 145.3, percentage: 36.5 },
                    { category: "Food", amount: 78.45, percentage: 19.7 },
                    { category: "Dining", amount: 65.75, percentage: 16.5 },
                    { category: "Transportation", amount: 45.0, percentage: 11.3 },
                    { category: "Shopping", amount: 34.99, percentage: 8.8 },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-md bg-slate-50 border">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-slate-700">{item.category}</h4>
                        <span className="text-slate-700 font-bold">${item.amount.toFixed(2)}</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                      <div className="mt-1 text-right text-xs text-slate-500">{item.percentage}% of total expenses</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
