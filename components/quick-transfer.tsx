'use client'

import * as React from 'react'
import { Send, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Contact {
  id: number
  name: string
  role: string
  image: string
}

interface QuickTransferProps {
  contacts?: Contact[]
}

export function QuickTransfer({ contacts = [] }: QuickTransferProps) {
  const [selectedContact, setSelectedContact] = React.useState<number | null>(null)
  const [amount, setAmount] = React.useState('')
  const [startIndex, setStartIndex] = React.useState(0)
  const contactsToShow = 4

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '')
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value)
    }
  }

  const handleNextScroll = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex + contactsToShow
      return nextIndex >= contacts.length ? 0 : nextIndex
    })
  }

  const handlePreviousScroll = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex - contactsToShow
      return nextIndex < 0 ? Math.max(0, contacts.length - contactsToShow) : nextIndex
    })
  }

  const handleSend = () => {
    setAmount('')
    // Add any other send logic here
  }

  const visibleContacts = contacts.slice(startIndex, startIndex + contactsToShow)

  const formatAmount = (value: string) => {
    if (!value) return ''
    const number = parseFloat(value)
    if (isNaN(number)) return ''
    return `$${number.toFixed(2)}`
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Quick Transfer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 grow-full-height">
        <div className="relative pt-6">
          <div className="flex space-x-4">
            {startIndex > 0 && (
              <button
                onClick={handlePreviousScroll}
                className="flex items-center justify-center w-16 h-16 rounded-lg border-2 border-gray-200 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                aria-label="Show previous contacts"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            )}
            {visibleContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact.id)}
                className={cn(
                  "flex flex-col items-center space-y-2 transition-opacity hover:opacity-80",
                  selectedContact === contact.id ? "opacity-100" : "opacity-70"
                )}
                aria-label={`Select ${contact.name} for transfer`}
              >
                <div className="relative">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-transparent transition-colors"
                    style={{
                      borderColor: selectedContact === contact.id ? '#4F46E5' : 'transparent'
                    }}
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {contact.name}
                  </p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">
                    {contact.role}
                  </p>
                </div>
              </button>
            ))}
            {startIndex + contactsToShow < contacts.length && (
              <button
                onClick={handleNextScroll}
                className="flex items-center justify-center w-16 h-16 rounded-lg border-2 border-gray-200 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                aria-label="Show more contacts"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            )}
          </div>
        </div>

        <div className="flex pt-6 items-center">
        <div className="quick-transfer-amount-text">Write Amount</div>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder=""
              value={amount}
              onChange={handleAmountChange}
              className="text-transparent w-full h-12 pl-4 pr-4 text-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-lg quick-transfer-textbox"
            />
            {amount && (
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-lg">
                {formatAmount(amount)}
              </div>
            )}
          </div>
          <Button
            onClick={handleSend}
            className="h-12 px-6 gap-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg text-base font-medium quick-transfer-send"
            disabled={!selectedContact || !amount}
          >
            Send
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

