'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pencil, ArrowLeft } from 'lucide-react'
import { Sidebar } from '@/components/sidebar'
import { Link } from 'react-router-dom'

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 toggle-background-color-transaction rounded-xl">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto toggle-background-color rounded-xl p-5">
         
          <Tabs defaultValue="edit-profile" className="space-y-6">
            <TabsList className="toggle-background-color p-1 gap-1">
              <TabsTrigger value="edit-profile" className="flex-1 setting-tab-header">Edit Profile</TabsTrigger>
              <TabsTrigger value="preferences" className="flex-1 setting-tab-header">Preferences</TabsTrigger>
              <TabsTrigger value="security" className="flex-1 setting-tab-header">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="edit-profile">
              <Card>
                <CardContent className="flex flex-row p-6 no-shadow no-border">
                  <div className="flex flex-col items-center mb-8">
                    <div className="relative">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src="/images/image10.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="absolute bottom-0 right-0 rounded-full"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <form className="setting-form grid md:grid-cols-2 gap-6 p-4">
                    <div className="space-y-2">
                      <Label htmlFor="yourName">Your Name</Label>
                      <Input 
                        id="yourName" 
                        placeholder="Your name" 
                        defaultValue="Charlotte Reed"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="userName">User Name</Label>
                      <Input 
                        id="userName" 
                        placeholder="Username" 
                        defaultValue="Charlotte Reed"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        defaultValue="charlottereed@gmail.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        defaultValue="********"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input 
                        id="dob" 
                        type="date" 
                        defaultValue="1990-01-25"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="presentAddress">Present Address</Label>
                      <Input 
                        id="presentAddress" 
                        placeholder="Present address" 
                        defaultValue="San Jose, California, USA"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="permanentAddress">Permanent Address</Label>
                      <Input 
                        id="permanentAddress" 
                        placeholder="Permanent address" 
                        defaultValue="San Jose, California, USA"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="City" 
                        defaultValue="San Jose"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input 
                        id="postalCode" 
                        type="number"
                        placeholder="Postal code" 
                        defaultValue="45963"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input 
                        id="country" 
                        placeholder="Country" 
                        defaultValue="USA"
                      />
                    </div>

                    <div className="md:col-span-2 flex justify-end">
                      <Button className="w-full md:w-40">
                        Save
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Preferences</h2>
                  {/* Add preferences content here */}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
                  {/* Add security content here */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

