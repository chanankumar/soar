import { NextResponse } from 'next/server'

export async function GET() {
  const accounts = [
    { id: 1, name: "Main Checking", balance: 5680, accountNumber: "**** 1234" },
    { id: 2, name: "Savings Account", balance: 12750, accountNumber: "**** 5678" },
    { id: 3, name: "Investment Account", balance: 35000, accountNumber: "**** 9012" }
  ]

  return NextResponse.json(accounts)
}

