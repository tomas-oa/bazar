import Spinner from "@/components/Spinner"

export default function SearchLoading () {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] gap-4">
      <Spinner />
      <h5 className="font-semibold text-lg">Cargando...</h5>
    </div>
  )
}