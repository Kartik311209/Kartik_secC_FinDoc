import { redirect } from "next/navigation"
import { ArrowDown, ArrowUp, CreditCard, DollarSign, PiggyBank } from "lucide-react"
import { requireAuth } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function CustomerDashboardPage() {
  const session = await requireAuth(["customer"])

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Your Dashboard</h1>
        <p className="text-white/90">Hello, {session.username}! Here's an overview of your accounts.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-l-4 border-l-indigo-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-indigo-50 to-white">
            <CardTitle className="text-sm font-medium text-indigo-700">Checking Account</CardTitle>
            <DollarSign className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">$12,456.78</div>
            <p className="text-xs text-slate-500">Account #1234567890</p>
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                Transfer
              </Button>
              <Button size="sm" variant="outline" className="text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                Pay Bills
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-purple-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-50 to-white">
            <CardTitle className="text-sm font-medium text-purple-700">Savings Account</CardTitle>
            <PiggyBank className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">$45,678.90</div>
            <p className="text-xs text-slate-500">Account #0987654321</p>
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Deposit
              </Button>
              <Button size="sm" variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-50 to-white">
            <CardTitle className="text-sm font-medium text-blue-700">Credit Card</CardTitle>
            <CreditCard className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">$2,345.67</div>
            <p className="text-xs text-slate-500">Available Credit: $7,654.33</p>
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                View Statement
              </Button>
              <Button size="sm" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                Pay Balance
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
          <CardTitle className="text-slate-800">Recent Transactions</CardTitle>
          <CardDescription>Your recent account activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 1,
                type: "debit",
                description: "Grocery Store",
                amount: 78.45,
                date: "Today",
              },
              {
                id: 2,
                type: "credit",
                description: "Salary Deposit",
                amount: 2500.0,
                date: "Yesterday",
              },
              {
                id: 3,
                type: "debit",
                description: "Electric Bill",
                amount: 145.3,
                date: "May 1, 2023",
              },
              {
                id: 4,
                type: "debit",
                description: "Online Shopping",
                amount: 34.99,
                date: "Apr 29, 2023",
              },
              {
                id: 5,
                type: "credit",
                description: "Refund",
                amount: 29.99,
                date: "Apr 28, 2023",
              },
            ].map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center gap-4 p-3 rounded-md border hover:bg-slate-50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === "credit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "credit" ? <ArrowDown className="h-5 w-5" /> : <ArrowUp className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800">{transaction.description}</p>
                  <p className="text-sm text-slate-500">{transaction.date}</p>
                </div>
                <div className={`font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
