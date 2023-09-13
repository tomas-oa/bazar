export default function CartIcon ({ w, h }: {w: number; h: number}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-heart" width={w} height={h} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
      <path d="M10 17h-4v-14h-2"></path>
      <path d="M6 5l14 1l-.717 5.016m-7.783 1.984h-5.5"></path>
      <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
    </svg>
  )
}