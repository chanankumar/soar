'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { CreditCard } from '@/components/credit-card'
import { Skeleton } from '@/components/ui/skeleton'

interface Card {
  id: number
  balance: number
  cardHolder: string
  cardNumber: string
  expiryDate: string
  cardType: string
}

export default function CardsPage() {
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch('/api/dashboard')
        const data = await response.json()
        setCards(data.cards)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching cards:', error)
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 toggle-background-color">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/dashboard">
            <Button variant="ghost" className="p-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-6">All Cards</h1>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-48 w-full rounded-xl" />
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {cards.map((card) => (
              <CreditCard key={card.id} {...card} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

