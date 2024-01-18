import PaginatedItems from '@/components/pagination'
import { createClient } from '@/prismicio'
import { components } from '@/slices'

import { SliceZone } from '@prismicio/react'
import { Metadata, ResolvingMetadata } from 'next'


export default async function Home() {
    const client = createClient()
    const { data: page } = await client.getSingle("hamepage")

    return (
        <>
            <SliceZone slices={page.slices} components={components} />
        </>
    )
}
export async function generateMetadata(): Promise<Metadata> {
    return (
        {
            title: "sasspark | وبسایت آموزشی خبری ساس پارک",
        }
    )
}
