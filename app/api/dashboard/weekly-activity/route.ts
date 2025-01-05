import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  const weeklyActivity = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    deposits: [200, 100, 250, 350, 150, 250, 300],
    withdrawals: [300, 400, 200, 300, 200, 300, 400]
  }

  if (search) {
    const searchLower = search.toLowerCase()
    const filteredLabels = weeklyActivity.labels.filter(label => 
      label.toLowerCase().includes(searchLower)
    )
    const indices = filteredLabels.map(label => weeklyActivity.labels.indexOf(label))
    
    return NextResponse.json({
      labels: filteredLabels,
      deposits: indices.map(i => weeklyActivity.deposits[i]),
      withdrawals: indices.map(i => weeklyActivity.withdrawals[i])
    })
  }

  return NextResponse.json(weeklyActivity)
}

