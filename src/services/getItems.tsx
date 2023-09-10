import { type Products } from "@/types"

type Search = {
  search: string | string[] | undefined
}


export const getItems = async (search: Search): Promise<Products> => {
  const data = await fetch(`http://localhost:3000/api/items?q=${search}`, { cache: 'reload' })
  const res = data.json()

  return res
}
