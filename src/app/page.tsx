
import Navigation from '@/components/navigation'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'


export default async function Home() {
    const client =  createClient()
    const { data : listData } = await client.getSingle("nav_items")
    const {data : page} = await client.getSingle("hamepage")

    return (
        <>
            <Navigation items={listData.item}/>
            <SliceZone slices={page.slices} components={components} />
        </>
    )
}
