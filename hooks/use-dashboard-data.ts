'use client'

import { useState, useEffect } from 'react'

interface Card {
  id: number
  balance: number
  cardHolder: string
  cardNumber: string
  expiryDate: string
  cardType: string
}

interface Transaction {
  id: number
  type: string
  amount: number
  from: string
  date: string
  status: string
}

interface WeeklyActivity {
  labels: string[]
  deposits: number[]
  withdrawals: number[]
}

interface ExpenseStats {
  entertainment: number
  investment: number
  groceries: number
  others: number
}

interface QuickTransferContact {
  id: number
  name: string
  role: string
  image: string
}

interface BalanceHistory {
  month: string
  balance: number
}

interface DashboardData {
  cards: Card[]
  transactions: Transaction[]
  weeklyActivity: WeeklyActivity
  expenseStats: ExpenseStats
  quickTransfer: QuickTransferContact[]
  balanceHistory: BalanceHistory[]
}

export function useDashboardData(searchTerm: string = '') {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const searchParam = searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ''
      const [cards, transactions, weeklyActivity, expenseStats, quickTransfer, balanceHistory] = await Promise.all([
        fetch(`/api/dashboard/cards${searchParam}`).then(res => res.json()),
        fetch(`/api/transactions${searchParam}`).then(res => res.json()),
        fetch(`/api/dashboard/weekly-activity${searchParam}`).then(res => res.json()),
        fetch(`/api/dashboard/expense-stats${searchParam}`).then(res => res.json()),
        fetch(`/api/dashboard/quick-transfer${searchParam}`).then(res => res.json()),
        fetch(`/api/dashboard/balance-history${searchParam}`).then(res => res.json()),
      ])

      setData({
        cards,
        transactions,
        weeklyActivity,
        expenseStats,
        quickTransfer,
        balanceHistory,
      })
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [searchTerm])

  const refetch = () => {
    fetchData()
  }

  return { data, loading, error, refetch }
}

