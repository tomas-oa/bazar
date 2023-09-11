import { type ProductI } from "@/types";
import Link from "next/link";
import Rating from "./Rating";

export default function Product ({product}: { product: ProductI}) {
  return (
    <Link href={`items/${product.id}`}>
      <article className='grid grid-cols-[45%,1fr] gap-6 p-2'>
        <picture className="grid place-content-center">
          <img width={'120px'} height={'120px'} className='object-cover object-center aspect-square border border-slate-200 rounded-full shadow-md' src={product.thumbnail} alt={product.title} />
        </picture>
        <aside className='flex flex-col gap-1'>
          <h1 className='text-xl font-bold capitalize [text-wrap:balance]'>{product.title}</h1>
          <p className='text-sm [text-wrap:balance]'>{product.description}</p>
          <div className='flex justify-between items-center'>
            <h2 className='text-md text-center font-bold h-full flex items-center justify-center pt-1'>
              <span>
                {product.price}$
              </span>
            </h2>
            <Rating rating={product.rating} />
          </div>
        </aside>
      </article>
    </Link>
  )
}