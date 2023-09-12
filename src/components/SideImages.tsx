import { ProductI } from "@/types"

interface Props {
  item: ProductI
}

export default function SideImages ({ item }: Props) {
  const { images } = item

  return (
    <aside className="flex flex-col gap-2">
      {
        images.slice(0, 3).map((img, index) => (
          <img key={index} className="aspect-square rounded-full border object-contain object-center border-slate-200" width={'96px'} height={'96px'} src={img} alt={`mini image ${index} for ${item.title}`} />
        ))
      }
    </aside>
  )
}
