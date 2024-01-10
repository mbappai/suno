import { client } from "@/sanity/lib/client"
import Link from "next/link"


async function getRestaurant(slug:string){
    const query = `
    *[_type=='restaurant' && slug.current == '${slug}']{
        title,
        'slug':slug.current,
        address,
        contact
    }[0]
    `
    const data =  await client.fetch(query)
    return data
}

export default async function Restaurant({params}:{params:{slug:string,title:string}}){
    const data = await getRestaurant(params.slug)
    console.log(data)
    return(
        <div className="w-full mx-14 py-5 flex h-full flex-col ">
            <Link href={"/"} >
                <img  height={'30px'} width={'30px'} src="/arrow-back.svg" alt="back to home page"/>
            </Link>
            <h1 className="text-6xl tracking-tighter my-10 font-black">{data?.title}</h1>
            <p></p>
        </div> 
    )
}