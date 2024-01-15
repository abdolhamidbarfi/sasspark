import { createClient } from '@/prismicio'
import { components } from '@/slices'

import { SliceZone } from '@prismicio/react'


export default async function Home() {
    const client = createClient()
    const { data: page } = await client.getSingle("hamepage")

    return (
        <>
            <SliceZone slices={page.slices} components={components} />
        </>
    )
}
