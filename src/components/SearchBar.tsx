import Link from "next/link"
import CartIcon from "./CartIcon"

enum Display {
  Top = 'top',
  Main = 'main'
}

interface Props {
  display: Display
}

export default function SearchBar ({ display }: Props) {
  if (display === Display.Main) {
    return (
      <form action='/items' className="flex flex-col gap-4">
        <input className="border bg-slate-200 p-2 rounded-md" type="text" name="search" placeholder='laptops, smartphones, libros...' required/>
        <button className="bg-pink-300 py-1.5 w-1/2 mx-auto rounded-full shadow-sm shadow-blue-700">Buscar</button>
      </form>
    )
  }

  if (display === Display.Top) {
    return (
      <nav className="flex items-center min-w-full justify-between mt-4">
        <Link href={'/'}>
          <CartIcon w={24} h={24} />
        </Link>
        <form action='/items'>
          <input className="border bg-slate-200 p-2 rounded-md" type="text" name="search" placeholder='laptops, smartphones, libros...' required/>
        </form>
      </nav>
    )
  }
}