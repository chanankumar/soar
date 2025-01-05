import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  const transactions = [
    {
      id: 1,
      type: "card",
      amount: 850,
      from: "Amazon Purchase",
      date: "28 January 2025",
      status: "completed"
    },
    {
      id: 2,
      type: "paypal",
      amount: 2450,
      from: "Deposit Paypal",
      date: "25 January 2025",
      status: "pending"
    },
    {
      id: 3,
      type: "cash",
      amount: 5400,
      from: "Bank Withdrawal",
      date: "21 January 2025",
      status: "completed"
    },
    {
      id: 4,
      type: "card",
      amount: 120,
      from: "Netflix Subscription",
      date: "18 January 2025",
      status: "completed"
    },
    {
      id: 5,
      type: "paypal",
      amount: 800,
      from: "Freelance Payment",
      date: "15 January 2025",
      status: "completed"
    },
    {
      id: 6,
      type: "cash",
      amount: 360,
      from: "ATM Withdrawal",
      date: "12 January 2025",
      status: "completed"
    }
  ]

  if (search) {
    const searchLower = search.toLowerCase()
    return NextResponse.json(transactions.filter(transaction => 
      transaction.from.toLowerCase().includes(searchLower) ||
      transaction.type.toLowerCase().includes(searchLower) ||
      transaction.status.toLowerCase().includes(searchLower) ||
      transaction.date.toLowerCase().includes(searchLower)
    ))
  }

  return NextResponse.json(transactions)
}

