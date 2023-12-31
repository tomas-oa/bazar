import data from '@/products.json'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  
  const { products } = data

  const matchesByTitle = products.filter((product) => {
    return product.title.toLowerCase().includes(query!.toLowerCase())
  })

  const matchesByCategory = products.filter((product) => {
    return product.category.toLowerCase().includes(query!.toLowerCase())
  })

  const matchesByBrand = products.filter((product) => {
    return product.brand.toLowerCase().includes(query!.toLowerCase())
  })

  const matches = [...matchesByTitle, ...matchesByCategory, ...matchesByBrand]

  const total = matches.length
  const categories = matches.reduce((acc, product) => {
    const { category } = product
    const existing = acc.find((item) => item.name === category)
    if (existing) {
      existing.count++
    } else {
      acc.push({ name: category, count: 1 })
    }
    return acc
  }, [] as { name: string; count: number }[])

  
  const res = { products: matches, categories, total }
  
  return NextResponse.json(res)
}