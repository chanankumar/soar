import { motion } from 'framer-motion'
import { CreditCard, DollarSign, Wallet } from 'lucide-react'

interface Transaction {
  id: number
  type: string
  amount: number
  from: string
  date: string
  status: string
}

interface TransactionsProps {
  transactions: Transaction[]
}

export function Transactions({ transactions }: TransactionsProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'card':
        return <CreditCard className="w-6 h-6" />;
      case 'paypal':
        return <DollarSign className="w-6 h-6" />;
      case 'cash':
        return <Wallet className="w-6 h-6" />;
      default:
        return <CreditCard className="w-6 h-6" />;
    }
  }

  return (
    <div className="space-y-4 bg-white rounded-xl toggle-background-color-transaction">
      {transactions.map((transaction, index) => (
        <motion.div
          key={transaction.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center justify-between p-4 bg-card rounded-lg hover:bg-accent transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${
              transaction.type === 'card' ? 'bg-blue-100 text-blue-600' :
              transaction.type === 'paypal' ? 'bg-green-100 text-green-600' :
              'bg-yellow-100 text-yellow-600'
            }`}>
              {getIcon(transaction.type)}
            </div>
            <div>
              <p className="font-medium">{transaction.from}</p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-medium ${
              transaction.type === 'card' ? 'text-red-600' : 'text-green-600'
            }`}>
              {transaction.type === 'card' ? '-' : '+'}${transaction.amount}
            </p>
            <p className="text-sm text-muted-foreground capitalize">{transaction.status}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

