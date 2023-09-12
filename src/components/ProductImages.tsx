import { ProductI } from "@/types"
import SideImages from "./SideImages"
import MainImage from "./MainImage"

interface Props {
  item: ProductI
}

export default function ProductImages ({ item }: Props) {
  return (
    <section className="grid grid-cols-[70%,1fr] gap-4">
      <MainImage item={item} />
      <SideImages item={item} />
    </section>
  )
}