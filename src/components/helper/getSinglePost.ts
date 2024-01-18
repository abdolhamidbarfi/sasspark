

export default async function getSinglePost({
    id
}: {
    id: string
}) {
    const res = await fetch(`https://learning.emofid.com/wp-json/wp/v2/posts/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
