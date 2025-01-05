import { Search, Bell } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Sidebar } from './sidebar'
import { CreditCard } from './credit-card'
import { WeeklyActivity } from './weekly-activity'
import { ExpenseStatistics } from './expense-statistics'
import { QuickTransfer } from './quick-transfer'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative d-none d-sm-block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input className="pl-10 " placeholder="Search for something" />
          </div>
          <div className="flex items-center gap-4 d-none d-sm-block">
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">My Cards</h2>
            <div className="flex gap-4">
              <CreditCard
                balance={5756}
                cardHolder="Jordan Blake"
                cardNumber="3778 **** **** 1234"
                expiryDate="12/22" id={0} cardType={''}              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Transaction</h2>
              <Button variant="link">See All</Button>
            </div>
            <div className="space-y-4">
              {/* Add your transaction items here */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <WeeklyActivity data={{
            labels: [],
            deposits: [],
            withdrawals: []
          }} />
          <ExpenseStatistics data={{
            entertainment: 0,
            investment: 0,
            groceries: 0,
            others: 0
          }} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <QuickTransfer />
          {/* Add Balance History component here */}
        </div>
      </div>
    </div>
  )
}

