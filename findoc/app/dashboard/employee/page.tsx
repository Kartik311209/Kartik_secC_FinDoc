import { redirect } from "next/navigation"
import { requireAuth } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function EmployeeDashboardPage() {
  const session = await requireAuth(["employee"])

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Employee Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {session.username}! Here's your work overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
            <CardDescription>Tasks that require your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Customer verification pending</p>
                    <p className="text-xs text-muted-foreground">Assigned 3 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
            <CardDescription>Customers you've recently interacted with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs font-medium">JD</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Account #12345678</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Appointments</CardTitle>
          <CardDescription>Scheduled customer meetings for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-md border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Loan application discussion - 2:30 PM</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                    Confirmed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
