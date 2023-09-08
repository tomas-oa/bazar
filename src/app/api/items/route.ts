import data from '@/products.json'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  
  console.log(query)
}