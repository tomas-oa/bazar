import Link from "next/link"
import CartIcon from "./CartIcon"
import { Display } from "@/types.d"


interface Props {
  display: Display
}

export default function SearchBar ({ display }: Props) {
  if (display === Display.Main) {
    return (
      <form action='/items' className="flex flex-col gap-4">
        <input className="border bg-slate-200 p-2 rounded-md focus:border focus:border-pink-300" type="text" name="search" placeholder='laptops, smartphones, libros...' required/>
        <button className="bg-pink-300 py-1.5 w-1/2 mx-auto rounded-full shadow-md shadow-pink-200 border border-purple-200">Buscar</button>
      </form>
    )
  }

  if (display === Display.Top) {
    return (
      <nav className="flex items-center min-w-full justify-between mt-4 gap-4">
        <Link className="mr-1" href={'/'}>
          <CartIcon w={24} h={24} />
        </Link>
        <form className="w-full" action='/items'>
          <input className="w-full border bg-slate-200 p-2 rounded-md focus:border-pink-300" type="text" name="search" placeholder='laptops, smartphones, libros...' required/>
        </form>
      </nav>
    )
  }
}