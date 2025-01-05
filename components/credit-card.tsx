'use client'

import { motion } from 'framer-motion'
import { CreditCardIcon, ViewIcon as Visa, CreditCardIcon as Mastercard } from 'lucide-react'

interface CreditCardProps {
  id:number,
  balance: number
  cardHolder: string
  cardNumber: string
  expiryDate: string
  cardType: string
}

export function CreditCard({ balance, cardHolder, cardNumber, expiryDate, cardType, id}: CreditCardProps) {
  const CardTypeIcon = () => {
    switch (cardType.toLowerCase()) {
      case 'visa':
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="35" height="40">
        <rect width="64" height="64" rx="12" fill="#1A1F71" />
      
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="central" fill="white" font-size="24" font-family="Arial, sans-serif">
          VISA
        </text>
      </svg>
      ;
      case 'mastercard':
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40">
        <circle cx="16" cy="25" r="12" fill="#EB001B" />
        <circle cx="34" cy="25" r="12" fill="#F79E1B" />
        <path d="M 16,25 A 12,12 0 0,1 34,25" fill="none" stroke="#8A3B1D" stroke-width="2" />
      </svg>;
      default:
        return <CreditCardIcon className="h-8 w-8" />;
    }
  }

  const maskCardNumber = (number: string) => {
    const last4Digits = number.slice(-4);
    const fisrt4Digit = number.slice(0,4);
    return `${fisrt4Digit} **** **** ${last4Digits}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={(id % 2 === 0 && window.location.pathname === '/dashboard' ? "bg-white-linear " : "bg-dark-linear ") + "text-white rounded-xl flex flex-col justify-content-card relative overflow-hidden transition-shadow hover:shadow-xl"}
    >
      <div className='rounded-top p-6'>

        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Balance</p>
              <p className="text-2xl font-bold">${balance.toLocaleString()}</p>
            </div>            
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-gray-400">CARD HOLDER</p>
              <p className="text-sm">{cardHolder}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">VALID THRU</p>
              <p className="text-sm">{expiryDate}</p>
            </div>
          </div>
        </div>

      </div>

      <div className='rounded-bottom pt-2 pb-2 pl-6 pr-6 card-number-section'>
          <div className="flex pt-4">
            <p className="text-lg tracking-wider card-number">{maskCardNumber(cardNumber)}</p>
          <CardTypeIcon />
          </div>
      </div>
    </motion.div>
    

  )
}

