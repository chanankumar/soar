import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  const expenseStats = {
    entertainment: 30,
    investment: 30,
    groceries: 25,
    others: 15
  }

  if (search) {
    const searchLower = search.toLowerCase()
    const filteredStats = Object.entries(expenseStats).filter(([key]) => 
      key.toLowerCase().includes(searchLower)
    )
    return NextResponse.json(Object.fromEntries(filteredStats))
  }

  return NextResponse.json(expenseStats)
}

