"use client"

import { useState } from "react"
import { Bell, CreditCard, Lock, Shield, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-white/90">Manage your account preferences and security settings</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-slate-500" />
                <CardTitle>Personal Information</CardTitle>
              </div>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Main St" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" defaultValue="10001" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t flex justify-end">
              <Button className="bg-slate-800 hover:bg-slate-900" onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-slate-500" />
                <CardTitle>Password</CardTitle>
              </div>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t flex justify-end">
              <Button className="bg-slate-800 hover:bg-slate-900" onClick={handleSave} disabled={loading}>
                {loading ? "Updating..." : "Update Password"}
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-slate-500" />
                <CardTitle>Two-Factor Authentication</CardTitle>
              </div>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-slate-800">Enable 2FA</h4>
                  <p className="text-sm text-slate-500">Protect your account with two-factor authentication</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-slate-500" />
                <CardTitle>Notification Preferences</CardTitle>
              </div>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h4 className="font-medium text-slate-800 mb-4">Email Notifications</h4>
                <div className="space-y-3">
                  {[
                    { id: "email-transactions", label: "Transaction Alerts" },
                    { id: "email-statements", label: "Monthly Statements" },
                    { id: "email-promotions", label: "Promotions and Offers" },
                    { id: "email-security", label: "Security Alerts" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <Label htmlFor={item.id} className="cursor-pointer">
                        {item.label}
                      </Label>
                      <Switch id={item.id} defaultChecked={item.id !== "email-promotions"} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-slate-800 mb-4">SMS Notifications</h4>
                <div className="space-y-3">
                  {[
                    { id: "sms-transactions", label: "Transaction Alerts" },
                    { id: "sms-security", label: "Security Alerts" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <Label htmlFor={item.id} className="cursor-pointer">
                        {item.label}
                      </Label>
                      <Switch id={item.id} defaultChecked={item.id === "sms-security"} />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t flex justify-end">
              <Button className="bg-slate-800 hover:bg-slate-900" onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save Preferences"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-slate-500" />
                <CardTitle>Payment Methods</CardTitle>
              </div>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="p-4 rounded-md border hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-sm">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Visa ending in 4242</p>
                        <p className="text-sm text-slate-500">Expires 05/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-md border hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-red-100 rounded flex items-center justify-center text-red-600 font-bold text-sm">
                        MC
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Mastercard ending in 5678</p>
                        <p className="text-sm text-slate-500">Expires 08/2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-slate-800 hover:bg-slate-900">Add New Payment Method</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
