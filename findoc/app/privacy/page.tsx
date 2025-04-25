import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
            <Link href="/login">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Login</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-16">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-lg text-slate-600">Last Updated: April 3, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-indigo-800 mt-0">Privacy Policy Summary</h2>
                <p className="text-slate-700 mb-0">
                  At Findoc, we take your privacy seriously. This policy outlines how we collect, use, and protect your
                  personal and financial information. We only collect information necessary to provide our banking
                  services, never sell your data to third parties, and employ industry-leading security measures to
                  protect your information.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">1. Introduction</h2>
              <p>
                Findoc ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our banking services, website, and mobile applications.
              </p>
              <p>
                By accessing or using our services, you consent to the practices described in this Privacy Policy. We
                encourage you to read this document carefully to understand our practices regarding your personal data.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-700">2.1 Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, address, email address, phone number)</li>
                <li>Identification information (date of birth, Social Security Number, government-issued ID)</li>
                <li>Financial information (account numbers, transaction history, credit information)</li>
                <li>Employment and income information</li>
                <li>Authentication information (usernames, passwords, security questions)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-700">
                2.2 Automatically Collected Information
              </h3>
              <p>When you use our website or mobile applications, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, links clicked)</li>
                <li>Location information (with your consent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">3. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our banking services</li>
                <li>To process transactions and manage your accounts</li>
                <li>To verify your identity and prevent fraud</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To improve our services and develop new features</li>
                <li>To communicate with you about your accounts and services</li>
                <li>To provide customer support</li>
                <li>To personalize your experience</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">4. Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Financial partners to process transactions</li>
                <li>Regulatory authorities and law enforcement agencies as required by law</li>
                <li>Credit bureaus and collection agencies when necessary</li>
                <li>Other parties with your explicit consent</li>
              </ul>
              <p className="mt-4">
                <strong>We do not sell your personal information to third parties for marketing purposes.</strong>
              </p>

              <div className="bg-amber-50 border border-amber-100 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-amber-800 mt-0">
                  Important Notice About Information Sharing
                </h3>
                <p className="text-slate-700 mb-0">
                  Federal law gives consumers the right to limit some but not all sharing of personal information.
                  Federal law also requires us to tell you how we collect, share, and protect your personal information.
                  Please review this policy carefully to understand what we do.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Secure network architecture</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and audits</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your personal information, no method of transmission over the Internet or
                electronic storage is 100% secure. We cannot guarantee absolute security of your data.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website, analyze
                usage patterns, and deliver personalized content. You can control cookies through your browser settings,
                but disabling certain cookies may limit your ability to use some features of our services.
              </p>
              <p>For more information about our use of cookies, please see our Cookie Policy.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children. If we become aware that we have collected personal information from a child
                without parental consent, we will take steps to delete that information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will notify you of any material changes by posting the updated policy on our website
                and, where required by law, seeking your consent.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">10. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
                please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border mt-4">
                <p className="font-medium mb-1">Findoc Privacy Office</p>
                <p className="mb-1">123 Finance Street, Banking District</p>
                <p className="mb-1">New York, NY 10001</p>
                <p className="mb-1">Email: privacy@findoc.example</p>
                <p>Phone: (555) 123-4567</p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800">11. Regulatory Information</h2>
              <p>
                Findoc is a financial institution subject to various federal and state regulations regarding privacy and
                information security, including the Gramm-Leach-Bliley Act (GLBA), the California Consumer Privacy Act
                (CCPA), and other applicable laws.
              </p>

              <div className="bg-green-50 border border-green-100 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-green-800 mt-0">Our Commitment to Your Privacy</h3>
                <p className="text-slate-700 mb-0">
                  At Findoc, protecting your privacy is a fundamental part of our relationship with you. We are
                  committed to maintaining the confidentiality, integrity, and security of your personal and financial
                  information. We appreciate your trust in us and assure you that we handle your information with the
                  utmost care.
                </p>
              </div>
            </div>
          </div>
        </div>
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
