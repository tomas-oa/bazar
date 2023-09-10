import { type ProductI } from "@/types"

interface Id {
  id: string
}

export const getItemsDetails = async ({ id }: Id): Promise<ProductI> => {
  const data = await fetch(`http://localhost:3000/api/items/${id}`, { cache: "no-cache" })
  const res = data.json()

  return res
}
