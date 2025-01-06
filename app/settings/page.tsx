'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pencil, ArrowLeft } from 'lucide-react'
import { Sidebar } from '@/components/sidebar'
import Link from 'next/link'

interface UserProfile {
  yourName: string
  userName: string
  email: string
  password: string
  dateOfBirth: string
  presentAddress: string
  permanentAddress: string
  city: string
  postalCode: string
  country: string
  avatar: string
}

const defaultProfile: UserProfile = {
  yourName: "Jordan Blake",
  userName: "Jordan Blake",
  email: "Jordan Blake@gmail.com",
  password: "********",
  dateOfBirth: "1990-01-25",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45963",
  country: "USA",
  avatar: "/images/image10.jpg"
}

export default function SettingsPage() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile)

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile')
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('userProfile', JSON.stringify(profile))
  }

  const handleAvatarChange = () => {
    // In a real application, this would open a file picker
    // and upload the new avatar. For now, we'll just use a placeholder.
    const newAvatar = '/placeholder.svg?height=96&width=96'
    setProfile(prev => ({ ...prev, avatar: newAvatar }))
  }

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
                        <AvatarImage src={profile.avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="absolute bottom-0 right-0 rounded-full"
                        onClick={handleAvatarChange}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="setting-form grid md:grid-cols-2 gap-6 p-4">
                    <div className="space-y-2">
                      <Label htmlFor="yourName">Your Name</Label>
                      <Input 
                        id="yourName" 
                        name="yourName"
                        placeholder="Your name" 
                        value={profile.yourName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="userName">User Name</Label>
                      <Input 
                        id="userName" 
                        name="userName"
                        placeholder="Username" 
                        value={profile.userName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="Email" 
                        value={profile.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        name="password"
                        type="password" 
                        value={profile.password}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input 
                        id="dateOfBirth" 
                        name="dateOfBirth"
                        type="date" 
                        value={profile.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="presentAddress">Present Address</Label>
                      <Input 
                        id="presentAddress" 
                        name="presentAddress"
                        placeholder="Present address" 
                        value={profile.presentAddress}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="permanentAddress">Permanent Address</Label>
                      <Input 
                        id="permanentAddress" 
                        name="permanentAddress"
                        placeholder="Permanent address" 
                        value={profile.permanentAddress}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        name="city"
                        placeholder="City" 
                        value={profile.city}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input 
                        id="postalCode" 
                        name="postalCode"
                        type="number"
                        placeholder="Postal code" 
                        value={profile.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input 
                        id="country" 
                        name="country"
                        placeholder="Country" 
                        value={profile.country}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="md:col-span-2 flex justify-end">
                      <Button type="submit" className="w-full md:w-40">
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

