'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Investments } from '@/components/investments'
import { Skeleton } from '@/components/ui/skeleton'

import styles from './investments.module.css'

interface Investment {
  id: number
  name: string
  value: number
  change: number
}

export default function InvestmentsPage() {
  const [investments, setInvestments] = useState<Investment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchInvestments() {
      try {
        const response = await fetch('/api/investments')
        const data = await response.json()
        setInvestments(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching investments:', error)
        setLoading(false)
      }
    }

    fetchInvestments()
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
      <h1 className={styles.title}>My Investments</h1>
      {loading ? (
        <div className={styles.skeletonContainer}>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className={styles.investmentSkeleton} />
          ))}
        </div>
      ) : (
        <Investments investments={investments} />
      )}
    </div>
  )
}

