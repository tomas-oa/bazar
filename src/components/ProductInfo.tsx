import { ProductI } from "@/types";
import Rating from "./Rating";

interface Props {
  item: ProductI
}

export default function ProductInfo ({ item }: Props) {
  return (
    <>
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-center">{item.title} - {item.brand}</h1>
        <div className="flex justify-center items-center gap-6">
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-xl">{item.price}$</h4>
            <p className="text-md font-semibold">{item.stock} disponibles</p>
          </div>
          <Rating rating={item.rating} />
        </div>
      </section>
      <section>
        <p>
          {item.description}
        </p>
      </section>
    </>
  )
}