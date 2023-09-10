import { getItemsDetails } from "@/services/getItemDetails"

interface Props {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const { id } = params
  const item = await getItemsDetails({ id })

  const { images } = item

  return (
    <main className="flex flex-col min-h-[600px] justify-around">
      <section className="grid grid-cols-[70%,1fr] gap-4">
        <picture className="flex items-center justify-center">
          <img className="aspect-square rounded-full border border-slate-200 object-cover" width={'210px'} height={'210px'} src={item.thumbnail} alt={item.title} />
        </picture>
        <aside className="flex flex-col gap-2">
          {
            images.slice(0, 3).map((img, index) => (
              <img className="aspect-square rounded-full border object-contain object-center border-slate-200" width={'96px'} height={'96px'} src={img} alt={`mini image ${index} for ${item.title}`} />
            ))
          }
        </aside>
      </section>
      <section className="flex flex-col">
        <h1 className="text-2xl font-bold text-center">{item.title} - {item.brand}</h1>
        <div className="flex justify-center items-center gap-6">
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-xl">{item.price}$</h4>
            <p className="text-md font-semibold">{item.stock} disponibles</p>
          </div>
          <h4>{item.rating}</h4>
        </div>
      </section>
      <section className="">
        <p>
          {item.description}
        </p>
      </section>
      <footer className="h-16 flex items-center justify-center ">
        <button className="h-full w-full bg-pink-300 rounded-full text-2xl shadow-md shadow-blue-700">Comprar</button>
      </footer>
    </main>
  )
}