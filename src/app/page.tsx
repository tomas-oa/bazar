import CartIcon from "@/components/CartIcon"
import SearchBar from "@/components/SearchBar"
import { Display } from '@/types.d'


export default function App () {
  return (
    <main className='grid place-content-center flex-1 min-h-screen gap-4'>
      <picture className="mx-auto">
        <CartIcon w={72} h={72}/>
      </picture>
      <h1 className="text-center text-3xl font-bold">Bazar Online</h1>
      <SearchBar display={Display.Main} />
    </main>
  )
}