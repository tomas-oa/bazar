import ProductImages from "@/components/ProductImages"
import ProductInfo from "@/components/ProductInfo"
import { getItemsDetails } from "@/services/getItemDetails"

interface Props {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const { id } = params
  const item = await getItemsDetails({ id })

  return (
    <main className="flex flex-col min-h-[600px] justify-around">
      <ProductImages item={item} />
      <ProductInfo item={item} />
      <footer className="h-16 flex items-center justify-center ">
        <button className="h-full w-full bg-pink-300 rounded-full text-2xl shadow-md shadow-blue-700">Comprar</button>
      </footer>
    </main>
  )
}