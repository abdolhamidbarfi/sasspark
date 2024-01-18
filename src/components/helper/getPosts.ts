interface IgetPostsType {
    page: number | string
    per_page: number
}

export default async function getPosts({ page = 1, per_page = 10 }: IgetPostsType) {
    const res = await fetch(`https://learning.emofid.com/wp-json/wp/v2/posts?page=${page}&per_page=${per_page}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return {
        posts: await res.json(),
        total_page: res.headers.get("X-WP-TotalPages")
    }
}
