import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTheme } from "next-themes"

interface Investment {
  id: number
  name: string
  value: number
  change: number
}

interface InvestmentsProps {
  investments: Investment[]
}

export function Investments({ investments }: InvestmentsProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Dummy data for the chart
  const chartData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Investments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {investments.map((investment) => (
            <div key={investment.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{investment.name}</p>
                <p className={`text-sm ${investment.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {investment.change >= 0 ? '+' : ''}{investment.change}%
                </p>
              </div>
              <p className="font-semibold">${investment.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="h-[200px] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="name" stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                labelStyle={{ color: isDark ? '#e5e7eb' : '#374151' }}
              />
              <Line type="monotone" dataKey="value" stroke={isDark ? '#60a5fa' : '#3b82f6'} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

