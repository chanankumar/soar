import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  const dashboardData = {
    cards: [
      {
        id: 1,
        balance: 5756,
        cardHolder: "Jordan Blake",
        cardNumber: "3778 1234 5678 1234",
        expiryDate: "12/22",
        cardType: "visa"
      },
      {
        id: 2,
        balance: 3200,
        cardHolder: "Jordan Blake",
        cardNumber: "4111 2222 3333 4444",
        expiryDate: "03/25",
        cardType: "mastercard"
      },
      {
        id: 3,
        balance: 1500,
        cardHolder: "Jordan Blake",
        cardNumber: "3700 5555 6666 7777",
        expiryDate: "09/24",
        cardType: "amex"
      },
      {
        id: 4,
        balance: 8900,
        cardHolder: "Jordan Blake",
        cardNumber: "6011 8888 9999 0000",
        expiryDate: "06/23",
        cardType: "discover"
      },
      {
        id: 5,
        balance: 2300,
        cardHolder: "Jordan Blake",
        cardNumber: "5500 1111 2222 3333",
        expiryDate: "11/25",
        cardType: "mastercard"
      }
    ],
    transactions: [
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
    ],
    weeklyActivity: {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      deposits: [200, 100, 250, 350, 150, 250, 300],
      withdrawals: [300, 400, 200, 300, 200, 300, 400]
    },
    expenseStats: {
      entertainment: 30,
      investment: 30,
      groceries: 25,
      others: 15
    },
    quickTransfer: [
      {
        id: 1,
        name: "Livia Stien",
        role: "CEO",
        image: "../"
      },
      {
        id: 2,
        name: "Randy Press",
        role: "Director",
        image: "/placeholder.svg?height=40&width=40"
      },
      {
        id: 3,
        name: "Workman",
        role: "Designer",
        image: "/placeholder.svg?height=40&width=40"
      }
    ],
    balanceHistory: [
      { month: "Jul", balance: 320 },
      { month: "Aug", balance: 280 },
      { month: "Sep", balance: 480 },
      { month: "Oct", balance: 280 },
      { month: "Nov", balance: 380 },
      { month: "Dec", balance: 320 },
      { month: "Jan", balance: 400 }
    ],
    notifications: [
      { id: 1, message: "Your card payment of $120 to Netflix was successful", read: false },
      { id: 2, message: "You received a PayPal payment of $800", read: false },
      { id: 3, message: "Your bank account balance is below $1000", read: true }
    ],
    accounts: [
      { id: 1, name: "Main Checking", balance: 5680, accountNumber: "**** 1234" },
      { id: 2, name: "Savings Account", balance: 12750, accountNumber: "**** 5678" },
      { id: 3, name: "Investment Account", balance: 35000, accountNumber: "**** 9012" }
    ],
    investments: [
      { id: 1, name: "Stock Portfolio", value: 25000, change: 5.2 },
      { id: 2, name: "Real Estate Fund", value: 40000, change: -1.3 },
      { id: 3, name: "Cryptocurrency", value: 5000, change: 12.7 }
    ],
    loans: [
      { 
        id: 1, 
        name: "Home Mortgage", 
        totalAmount: 200000, 
        remainingAmount: 150000, 
        monthlyPayment: 1200,
        principalPaid: 800,
        interestPaid: 400
      },
      { 
        id: 2, 
        name: "Car Loan", 
        totalAmount: 30000, 
        remainingAmount: 15000, 
        monthlyPayment: 500,
        principalPaid: 350,
        interestPaid: 150
      }
    ]
  }

  if (search) {
    const searchLower = search.toLowerCase()
    dashboardData.transactions = dashboardData.transactions.filter(
      transaction => transaction.from.toLowerCase().includes(searchLower)
    )
  }

  return NextResponse.json(dashboardData)
}

