import { ProductI } from "@/types"

interface Props {
  item: ProductI
}

export default function MainImage ({ item }: Props) {
  return (
    <picture className="flex items-center justify-center">
      <img className="aspect-square rounded-full border border-slate-200 object-cover" width={'210px'} height={'210px'} src={item.thumbnail} alt={item.title} />
    </picture>
  )
}
