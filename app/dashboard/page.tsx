'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { CreditCard } from '@/components/credit-card'
import { WeeklyActivity } from '@/components/weekly-activity'
import { ExpenseStatistics } from '@/components/expense-statistics'
import { QuickTransfer } from '@/components/quick-transfer'
import { Transactions } from '@/components/transactions'
import { BalanceHistory } from '@/components/balance-history'
import { useDashboardData } from '@/hooks/use-dashboard-data'


import styles from './dashboard.module.css'
import { useSearch } from '@/components/search-context'

export default function DashboardPage() {
  const { searchTerm } = useSearch()
  const { data, loading, error, refetch } = useDashboardData(searchTerm)

  if (error) {
    return <div>Error loading dashboard data</div>
  }

  return (
    <div className={styles.dashboardContent}>
      <div className={styles.dashboardGrid}>
        <div className={styles.cardsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>My Cards</h2>
            <Link href="/cards">
              <Button variant="link">See All</Button>
            </Link>
          </div>
          {loading ? (
            <Skeleton className={styles.cardsSkeleton} />
          ) : (
            <div className={styles.cardsContainer}>
              {data?.cards.slice(0, 2).map((card) => (
                <CreditCard key={card.id} {...card} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.transactionsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Transaction</h2>
            <Link href="/transactions">
              <Button variant="link">See All</Button>
            </Link>
          </div>
          {loading ? (
            <div className={styles.transactionsSkeleton}>
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className={styles.transactionSkeleton} />
              ))}
            </div>
          ) : (
            <Transactions transactions={data?.transactions.slice(0, 3) ?? []} />
          )}
        </div>
      </div>

      <div className={styles.chartsGrid}>
        {loading ? (
          <>
            <Skeleton className={styles.chartSkeleton} />
            <Skeleton className={styles.chartSkeleton} />
          </>
        ) : (
          <>
            <WeeklyActivity data={data?.weeklyActivity ?? { labels: [], deposits: [], withdrawals: [] }} />
            <ExpenseStatistics data={data?.expenseStats ?? { entertainment: 0, investment: 0, groceries: 0, others: 0 }} />
          </>
        )}
      </div>

      <div className={styles.bottomGrid}>
        {loading ? (
          <>
            <Skeleton className={styles.bottomSkeleton} />
            <Skeleton className={styles.bottomSkeleton} />
          </>
        ) : (
          <>
            <div className="h-full">
              <QuickTransfer contacts={data?.quickTransfer ?? []} />
            </div>
            <BalanceHistory data={data?.balanceHistory ?? []} />
          </>
        )}
      </div>
    </div>
  )
}

