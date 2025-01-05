'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Transactions } from '@/components/transactions'
import { Skeleton } from '@/components/ui/skeleton'

import styles from './transactions.module.css'

interface Transaction {
  id: number
  type: string
  amount: number
  from: string
  date: string
  status: string
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch('/api/transactions')
        const data = await response.json()
        setTransactions(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching transactions:', error)
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/dashboard">
          <Button variant="ghost" className={styles.backButton}>
            <ArrowLeft className={styles.backIcon} />
            Back to Dashboard
          </Button>
        </Link>
      </div>
      <h1 className={styles.title}>All Transactions</h1>
      {loading ? (
        <div className={styles.skeletonContainer}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className={styles.transactionSkeleton} />
          ))}
        </div>
      ) : (
        <Transactions transactions={transactions} />
      )}
    </div>
  )
}

