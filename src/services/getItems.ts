import { type ProductsI } from "@/types"

type Search = {
  search: string | string[] | undefined
}


export const getItems = async ({ search }: Search): Promise<ProductsI> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items?q=${search}`)
  const res = data.json()

  return res
}
