'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Loans } from '@/components/loans'
import { Skeleton } from '@/components/ui/skeleton'

import styles from './loans.module.css'

interface Loan {
  id: number
  name: string
  totalAmount: number
  remainingAmount: number
  monthlyPayment: number
  principalPaid: number
  interestPaid: number
}

export default function LoansPage() {
  const [loans, setLoans] = useState<Loan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLoans() {
      try {
        const response = await fetch('/api/loans')
        const data = await response.json()
        setLoans(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching loans:', error)
        setLoading(false)
      }
    }

    fetchLoans()
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
      <h1 className={styles.title}>My Loans</h1>
      {loading ? (
        <div className={styles.skeletonContainer}>
          {[1, 2].map((i) => (
            <Skeleton key={i} className={styles.loanSkeleton} />
          ))}
        </div>
      ) : (
        <Loans loans={loans} />
      )}
    </div>
  )
}

