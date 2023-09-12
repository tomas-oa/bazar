import { type ProductI } from "@/types"

interface Id {
  id: string
}

export const getItemsDetails = async ({ id }: Id): Promise<ProductI> => {
  const data = await fetch(`https://${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`, { method: 'GET', cache: "no-cache" })
  const res = data.json()

  return res
}
