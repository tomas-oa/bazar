import Link from "next/link"

interface Props {
  category: { name: string, count: number }
}

export default function Category ({ category }: Props) {
  return (
    <Link className="max-w-[100px]" href={`/items?search=${category.name}`}>
      <li className='bg-pink-300 text-center min-w-[100px] px-2 py-1.5 rounded-sm text-xs truncate'>{category.name} - {category.count}</li>
    </Link>
  )
}
