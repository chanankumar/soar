import { NextResponse } from 'next/server'

export async function GET() {
  const investments = [
    { id: 1, name: "Stock Portfolio", value: 25000, change: 5.2 },
    { id: 2, name: "Real Estate Fund", value: 40000, change: -1.3 },
    { id: 3, name: "Cryptocurrency", value: 5000, change: 12.7 }
  ]

  return NextResponse.json(investments)
}

