interface Props {
 search: string | string[] | undefined
}

export default function NoResults ({ search }: Props) {
  return (
    <section className='flex flex-col items-center justify-center min-h-[600px] gap-4'>
      <h3 className='font-bold text-4xl'>¡Vaya!</h3>
      <h5 className='font-semibold text-xl [text-wrap:balance] text-center'>No encontramos resultados para {`"${search}" :(`}</h5>
      <p className='text-center text-sm'>Por favor, prueba buscando otro producto</p>
    </section>
  )
}