import Link from "next/link"
import { ArrowRight, UserPlus } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/findoc-logo.png" alt="Findoc Logo" width={120} height={40} className="h-8 w-auto" />
            <span className="text-sm font-medium text-indigo-600">Bank Management System</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/about" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              Contact
            </Link>
            <Link href="/signup" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Login</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Modern Banking Management Solution
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Streamline your banking operations with our comprehensive management system. Secure, efficient, and
                  user-friendly.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1.5 bg-white text-indigo-600 hover:bg-white/90">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" className="gap-1.5 bg-indigo-800 text-white hover:bg-indigo-900">
                      Login
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] overflow-hidden rounded-lg shadow-2xl bg-white p-8">
                  <Image
                    src="/images/findoc-logo.png"
                    alt="FinDoc Banking Solution"
                    width={400}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                  <div className="mt-6 text-center">
                    <h2 className="text-2xl font-bold text-indigo-600">AI-Powered Banking</h2>
                    <p className="text-slate-600 mt-2">Revolutionizing financial management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-600">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your banking operations efficiently
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover:border-indigo-200 hover:bg-indigo-50">
                <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-600">Customer Management</h3>
                <p className="text-center text-sm text-slate-600">
                  Manage customer accounts, profiles, and transactions with ease.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover:border-purple-200 hover:bg-purple-50">
                <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 12h7" />
                    <path d="M12 20V4" />
                    <path d="M5 12h7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-600">Transaction Processing</h3>
                <p className="text-center text-sm text-slate-600">
                  Process deposits, withdrawals, and transfers securely and efficiently.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:bg-blue-50">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-600">Reporting & Analytics</h3>
                <p className="text-center text-sm text-slate-600">
                  Generate comprehensive reports and gain insights into your operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-900 text-white">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/findoc-logo.png"
                alt="Findoc Logo"
                width={100}
                height={30}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-slate-300">
              Modern banking management solution for financial institutions of all sizes.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="text-lg font-medium">Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-slate-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-sm text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-slate-800 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-400 md:text-left">
              © {new Date().getFullYear()} Findoc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
