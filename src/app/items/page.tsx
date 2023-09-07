import data from '@/products.json'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined },
}

export default function ItemsList(props: Props) {
  const { searchParams } = props
  const { search } = searchParams;

  const { total } = data
  const { products } = data

  return (
    <section>
      <h5 className='font-semibold text-sm'>Resultados de la búsqueda de "{search}": {total}</h5>
      <ul className="flex gap-6">
        <li>test</li>
        <li>test</li>
      </ul>
      <section className='flex flex-col gap-6'>
        {
          products.map((product) => (
            <article className='grid grid-cols-[40%,1fr] gap-6'>
                <img className='rounded-full' src={product.thumbnail} alt={product.title} />
              <aside className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold'>{product.title}</h1>
                <p className='text-sm'>{product.description}</p>
                <div className='flex justify-between'>
                  <h1 className='text-md font-bold'>{product.price}$</h1>
                  <span>{product.rating }</span>
                </div>
              </aside>
            </article>
          ))
        }
      </section>
    </section>
  )
}