'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { useTheme } from "next-themes"

interface ExpenseStatisticsProps {
  data: {
    entertainment: number
    investment: number
    groceries: number
    others: number
  }
}

export function ExpenseStatistics({ data }: ExpenseStatisticsProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const chartData = [
    { name: 'Entertainment', value: data.entertainment },
    { name: 'Investment', value: data.investment },
    { name: 'Groceries', value: data.groceries },
    { name: 'Others', value: data.others },
  ]

  const COLORS = isDark 
    ? ['#60a5fa', '#34d399', '#fbbf24', '#f87171']
    : ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              labelStyle={{ color: isDark ? '#e5e7eb' : '#374151' }}
            />
            <Legend 
              formatter={(value) => <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

