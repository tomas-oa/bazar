import Products from '@/components/Products'
import { getItems } from '@/services/getItems'

interface Props {
  searchParams: { [key: string]: string | string[] | undefined },
}

export default async function ItemsList(props: Props) {
  const { searchParams } = props
  const { search } = searchParams
  const { products, total } = await getItems({ search })

  return (
    <section>
      <h5 className='font-semibold text-sm'>Resultados de la búsqueda de "{search}": {total}</h5>
      <ul className="flex gap-6">
        <li>test</li>
        <li>test</li>
      </ul>
      <Products products={products} />
    </section>
  )
}