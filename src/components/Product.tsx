import { type ProductI } from "@/types";

export default function Product ({product}: { product: ProductI}) {
  return (
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
  )
}