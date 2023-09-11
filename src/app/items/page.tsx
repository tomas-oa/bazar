import Products from '@/components/Products'
import { getItems } from '@/services/getItems'

interface Props {
  searchParams: { [key: string]: string | string[] | undefined },
}

export default async function ItemsList(props: Props) {
  const { searchParams } = props
  const { search } = searchParams
  const { products, total } = await getItems({ search })

  if (total === 0) {
    return (
      <section className='flex flex-col items-center justify-center mt-24 gap-4'>
        <h3 className='font-semibold text-3xl'>¡Vaya!</h3>
        <h5 className='font-semibold text-xl [text-wrap:balance] text-center'>No encontramos resultados para "{search}" :(</h5>
        <p className='text-center text-sm'>Por favor, prueba buscando otro producto</p>
      </section>
    )
  }
  
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