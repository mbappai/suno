import Image from 'next/image'
import Link from 'next/link'

async function getData(){
  
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className='container mx-auto flex flex-col'>
          <h1 className='text-2xl font-black my-14'>suno</h1>
          <ul>
            <li>
              <Link className='text-base font-medium'  href={''}>Fluffy dreams</Link>
            </li>
          </ul>
        </div>
    </main>
  )
}
