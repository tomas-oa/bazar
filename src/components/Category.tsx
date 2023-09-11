import Link from "next/link"

interface Props {
  category: { name: string, count: number }
}

export default function Category ({ category }: Props) {
  return (
    <Link href={`/items?search=${category.name}`}>
      <li className='bg-pink-300 text-center min-w-[115px] px-1 py-1.5 rounded-sm text-sm'>{category.name} - {category.count}</li>
    </Link>
  )
}
