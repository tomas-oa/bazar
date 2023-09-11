import Category from "./Category"

interface Props {
  categories: { name: string, count: number }[]
}

export default function Categories ({ categories }: Props) {
  return (
    <ul className="grid grid-cols-3 gap-4 justify-items-start mb-2 overflow-hidden">
      { categories?.map((category, index) => ( <Category key={index} category={category} /> )) }
    </ul>
  )
}
