interface Props {
 search: string | string[] | undefined
}

export default function NoResults ({ search }: Props) {
  return (
    <section className='flex flex-col items-center justify-center min-h-[600px] gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-300" width="128" height="128" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M9 10l.01 0"></path>
          <path d="M15 10l.01 0"></path>
          <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path>
        </svg>
      <h3 className='font-bold text-4xl'>¡Vaya!</h3>
      <h5 className='font-semibold text-xl [text-wrap:balance] text-center'>No hemos encontrado resultados para {`"${search}"`}</h5>
    </section>
  )
}