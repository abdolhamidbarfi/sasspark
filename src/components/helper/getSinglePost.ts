

export default async function getSinglePost({
    id
}: {
    id: string
}) {
    const res = await fetch(`https://learning.emofid.com/wp-json/wp/v2/posts/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
