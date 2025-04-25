import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Findoc</span>
            <span className="text-sm text-muted-foreground">Bank Management System</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Findoc</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-6">
                Findoc is a comprehensive bank management system designed to streamline banking operations and provide a
                seamless experience for customers, employees, and administrators.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              <p>
                At Findoc, our mission is to revolutionize the banking industry by providing cutting-edge technology
                solutions that simplify complex banking operations. We believe in making banking accessible, secure, and
                efficient for everyone.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
              <p>
                Founded in 2023, Findoc was born out of the need for a modern banking solution that addresses the
                challenges faced by financial institutions in the digital age. Our team of experienced developers and
                banking professionals came together to create a platform that combines technical excellence with deep
                industry knowledge.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Our Values</h3>
                  <ul className="space-y-2">
                    <li>Security and trust</li>
                    <li>Innovation and excellence</li>
                    <li>Customer-centric approach</li>
                    <li>Transparency and integrity</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Our Approach</h3>
                  <ul className="space-y-2">
                    <li>User-friendly interfaces</li>
                    <li>Robust security measures</li>
                    <li>Scalable architecture</li>
                    <li>Continuous improvement</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Leadership Team</h2>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">JD</span>
                  </div>
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">CEO & Founder</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">JS</span>
                  </div>
                  <h3 className="font-bold">Jane Smith</h3>
                  <p className="text-sm text-muted-foreground">CTO</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">RJ</span>
                  </div>
                  <h3 className="font-bold">Robert Johnson</h3>
                  <p className="text-sm text-muted-foreground">Head of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Findoc</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern banking management solution for financial institutions of all sizes.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="text-lg font-medium">Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:underline">
                Contact
              </Link>
              <Link href="/privacy" className="text-sm hover:underline">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Findoc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
