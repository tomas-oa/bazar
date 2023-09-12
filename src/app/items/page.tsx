import NoResults from '@/components/NoResults'
import Products from '@/components/Products'
import { getItems } from '@/services/getItems'
import Categories from '@/components/Categories'

interface Props {
  searchParams: { [key: string]: string | string[] | undefined },
}

export default async function ItemsList(props: Props) {
  const { searchParams } = props
  const { search } = searchParams
  const { products, total, categories } = await getItems({ search })

  if (total === 0) return <NoResults search={search} />
  
  return (
    <main className='flex flex-col min-h-[600px] gap-1 mt-4'>
      <h5 className='font-semibold text-sm'>Resultados de la búsqueda de {`"${search}":`} {total}</h5>
      <Categories categories={categories} />
      <Products products={products} />
    </main>
  )
}