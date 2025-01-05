import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  const balanceHistory = [
    { month: "Jul", balance: 320 },
    { month: "Aug", balance: 280 },
    { month: "Sep", balance: 480 },
    { month: "Oct", balance: 280 },
    { month: "Nov", balance: 380 }, 
    { month: "Dec", balance: 320 },
    { month: "Jan", balance: 400 }
  ]

  if (search) {
    const searchLower = search.toLowerCase()
    return NextResponse.json(balanceHistory.filter(item => 
      item.month.toLowerCase().includes(searchLower)
    ))
  }

  return NextResponse.json(balanceHistory)
}

