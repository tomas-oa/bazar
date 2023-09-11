import SearchBar from "@/components/SearchBar"
import { Display } from "@/types.d"

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="max-w-xs mx-auto min-h-screen" lang="en">
      <body>
        <SearchBar display={Display.Top}/>
        {children}
      </body>
    </html>
  )
}
