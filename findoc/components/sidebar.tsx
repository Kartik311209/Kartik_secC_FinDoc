"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  BarChart3,
  Building,
  CreditCard,
  Home,
  LogOut,
  Settings,
  Users,
  FileText,
  PiggyBank,
  Receipt,
  ArrowDownUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { logout } from "@/lib/auth"

export function Sidebar() {
  const pathname = usePathname()
  const { toast } = useToast()

  const handleLogout = async () => {
    await logout()
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
    window.location.href = "/login"
  }

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-slate-900 text-white">
      <div className="flex h-14 items-center border-b border-slate-800 px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Image
            src="/images/findoc-logo.png"
            alt="Findoc Logo"
            width={100}
            height={30}
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>
      </div>
      <nav className="flex-1 overflow-auto p-2">
        <ul className="grid gap-1">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard") &&
                !isActive("/dashboard/customers") &&
                !isActive("/dashboard/transactions") &&
                !isActive("/dashboard/branches") &&
                !isActive("/dashboard/reports") &&
                !isActive("/dashboard/settings")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
          </li>

          <li className="mt-4 px-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Banking</div>
          </li>
          <li>
            <Link
              href="/dashboard/transfer"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/transfer")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <ArrowDownUp className="h-4 w-4" />
              Transfer Money
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/pay-bills"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/pay-bills")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Receipt className="h-4 w-4" />
              Pay Bills
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/deposit"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/deposit")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <PiggyBank className="h-4 w-4" />
              Deposit
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/view-statement"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/view-statement")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              Statements
            </Link>
          </li>

          <li className="mt-4 px-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Management</div>
          </li>
          <li>
            <Link
              href="/dashboard/customers"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/customers")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/transactions"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/transactions")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              Transactions
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/branches"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/branches")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Building className="h-4 w-4" />
              Branches
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/reports"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/reports")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              Reports
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/dashboard/settings")
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-t border-slate-800 p-4">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
