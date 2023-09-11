import { type ProductsI } from "@/types"

type Search = {
  search: string | string[] | undefined
}


export const getItems = async ({ search }: Search): Promise<ProductsI> => {
  const data = await fetch(`http://localhost:3000/api/items?q=${search}`, { cache: 'no-cache' })
  const res = data.json()

  return res
}
