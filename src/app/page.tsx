
import Navigation from '@/components/navigation'
import { createClient } from '@/prismicio'


export default async function Home() {
    const { data } = await createClient().getSingle("nav_items")
    return (
        <>
            <Navigation items={data.item}/>
        </>
    )
}
