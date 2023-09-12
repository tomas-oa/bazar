import { ProductI } from "@/types";
import Product from "./Product";

export default function Products ({ products }: { products: ProductI[] }) {
  return (
    <section className='flex flex-col gap-6 items-center justify-center'>
      {
        products?.map((product: ProductI) => <Product key={product.id} product={product} />)
      }
    </section>
  )
}