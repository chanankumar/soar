'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Accounts } from '@/components/accounts'
import { Skeleton } from '@/components/ui/skeleton'

import styles from './accounts.module.css'

interface Account {
  id: number
  name: string
  balance: number
  accountNumber: string
}

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await fetch('/api/accounts')
        const data = await response.json()
        setAccounts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching accounts:', error)
        setLoading(false)
      }
    }

    fetchAccounts()
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
      <h1 className={styles.title}>My Accounts</h1>
      {loading ? (
        <div className={styles.skeletonContainer}>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className={styles.accountSkeleton} />
          ))}
        </div>
      ) : (
        <Accounts accounts={accounts} />
      )}
    </div>
  )
}

