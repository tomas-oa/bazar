import data from '@/products.json'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  
  // TODO: search by title, description?, category, brand?
  const { products } = data

  const matches = products.filter((product) => {
    return product.title.toLowerCase().includes(query!.toLowerCase())
  })
  const total = matches.length

  const res = { products: matches, total }
  
  return NextResponse.json(res)
}