
interface IfetcherProps {
    url: string
    options?: RequestInit
}

const fetcher = async ({ url, options = {} }: IfetcherProps) => {

    const res = await fetch(`http://localhost:5000/api${url}`, options)
    return await res.json()

};

export { fetcher };
