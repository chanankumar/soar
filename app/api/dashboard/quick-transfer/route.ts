import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  const quickTransfer = [
    { id: 1, name: "Livia Bator", role: "CEO", image: "/images/image1.jpg" },
    { id: 2, name: "Randy Press", role: "Director", image: "/images/image2.jpg" },
    { id: 3, name: "Workman", role: "Designer", image: "/images/image4.jpg" },
    { id: 4, name: "Sarah Chen", role: "Product Manager", image: "/images/image3.jpg" },
    { id: 5, name: "Michael Torres", role: "Lead Engineer", image: "/images/image8.jpg" },
    { id: 6, name: "Anna Kim", role: "UX Designer", image: "/images/image6.jpg" },
    { id: 7, name: "David Park", role: "CTO", image: "/images/image7.jpg" },
    { id: 8, name: "Elena Silva", role: "Marketing Lead", image: "/images/image5.jpg" }
  ]

  if (search) {
    const searchLower = search.toLowerCase()
    return NextResponse.json(quickTransfer.filter(contact => 
      contact.name.toLowerCase().includes(searchLower) ||
      contact.role.toLowerCase().includes(searchLower)
    ))
  }

  return NextResponse.json(quickTransfer)
}

