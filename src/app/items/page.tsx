type Props = {
  searchParams: { [key: string]: string | string[] | undefined },
}

export default function ItemsList(props: Props) {
  const { searchParams } = props
  const { search } = searchParams;
  return (
    <section>
      <h5>Resultados de la búsqueda de "{search}": </h5>
      <ul className="flex gap-6">
        <li>test</li>
        <li>test</li>
      </ul>
    </section>
  )
}