export enum Display {
  Top = 'top',
  Main = 'main'
}

export interface ProductsI {
  products: Product[]
  total?: number
  skip?: number
  limit?: number
  categories?: { name: string; count: number }[]
}

export interface ProductI {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
