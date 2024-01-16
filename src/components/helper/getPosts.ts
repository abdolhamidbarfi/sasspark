interface IgetPostsType {
    page: number
    per_page: number
}

export default async function getPosts({page = 1 , per_page = 10} :IgetPostsType)  {
    const res = await fetch(`https://learning.emofid.com/wp-json/wp/v2/posts?page=${page}&per_page=${per_page}`).then()
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
