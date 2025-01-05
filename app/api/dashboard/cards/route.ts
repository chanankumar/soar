import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  const cards = [
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
  ]

  if (search) {
    const searchLower = search.toLowerCase()
    return NextResponse.json(cards.filter(card => 
      card.cardHolder.toLowerCase().includes(searchLower) ||
      card.cardNumber.includes(search) ||
      card.cardType.toLowerCase().includes(searchLower)
    ))
  }

  return NextResponse.json(cards)
}

