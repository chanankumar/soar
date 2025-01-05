import { NextResponse } from 'next/server'

export async function GET() {
  const loans = [
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

  return NextResponse.json(loans)
}

