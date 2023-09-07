import CartIcon from "@/components/CartIcon"

export default function App () {
  return (
    <main className='grid place-content-center flex-1 min-h-screen gap-4'>
      <picture className="mx-auto">
        <CartIcon w={72} h={72}/>
      </picture>
      <h1 className="text-center text-3xl font-bold">Bazar Online</h1>
      <form action='/items' className="flex flex-col gap-4">
        <input className="border bg-slate-200 p-2 rounded-md" type="text" name="search" placeholder='laptops, smartphones, libros...' />
        <button className="bg-violet-300 py-1.5 w-1/2 mx-auto rounded-full">Buscar</button>
      </form>
    </main>
  )
}