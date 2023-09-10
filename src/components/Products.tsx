import { ProductI } from "@/types";
import Product from "./Product";

export default function Products ({ products }: { products: ProductI[] }) {
  return (
    <section className='flex flex-col gap-6'>
      {
        products?.map((product: any) => <Product product={product} />)
      }
    </section>
  )
}