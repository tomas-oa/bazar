import CartIcon from "@/components/CartIcon"

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="max-w-xs mx-auto" lang="en">
      <body>
        <nav className="flex">
          <CartIcon w={24} h={24}/>
          {/* form component */}
        </nav>
        {children}
      </body>
    </html>
  )
}
