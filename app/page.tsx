import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'

async function getData(){
  const query =  `
  *[_type=='restaurant']{
    _id,
    openingHours,
    'slug':slug.current,
    title,
    contact
  }`
  const data = await client.fetch(query)

  return data
}

export default async function Home() {

  const restaurants =  await getData()
  console.log(restaurants)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className='container mx-auto flex flex-col'>
          <h1 className='text-5xl font-black my-14'>suno</h1> 
          <ul>
            {
              restaurants.map((restaurant:any, idx:number)=>(
                <li key={idx}>
                  <Link className='text-base font-medium'  href={`/restaurant/${restaurant.slug}`}>{restaurant.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
    </main>
  )
}
