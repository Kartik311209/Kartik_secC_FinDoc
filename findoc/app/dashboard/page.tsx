import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  // Redirect to role-specific dashboard
  if (session.role === "admin") {
    redirect("/dashboard/admin")
  } else if (session.role === "employee") {
    redirect("/dashboard/employee")
  } else if (session.role === "customer") {
    redirect("/dashboard/customer")
  }

  return null
}
