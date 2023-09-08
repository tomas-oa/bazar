import data from '@/products.json'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const { products } = data

  const item = products.find((product) => product.id === Number(id))
  return NextResponse.json({ item })
}