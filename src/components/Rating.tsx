interface Props {
  rating: number
}

export default function Rating({ rating }: Props) {
  return (
    <div className="text-2xl flex gap-0.5">
      {
        "★"
          .repeat(rating)
          .padEnd(5, "☆")
          .split("")
          .map((char, index) => (
            <span key={index} className={'flex items-center justify-center ' + (char === '★' ? 'text-yellow-400' : 'text-gray-400')}>
              {char}
            </span>
          ))
      }
    </div>
  )
}