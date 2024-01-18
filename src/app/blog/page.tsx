
import getPosts from '@/components/helper/getPosts';
import { stylesComponets } from '@/components/tools/typography';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import Link from 'next/link';
import * as React from 'react';
import { headers } from 'next/headers'
import PaginatedItems from '@/components/pagination';
import PostsList from '@/components/pagination/PostsList';
import Pagination from '@/components/pagination';

interface IBlogPageProps {
    params : {}
     searchParams  : { page : string}
}

interface IPostsType {
    id: string | number
    slug: string
    title: { rendered: string }
    content: { rendered: string }
    excerpt: { rendered: string }
    post_data: { thumbnail: string }
}


async function BlogPage(props: IBlogPageProps) {
    const client = createClient()
    const { data: page } = await client.getSingle("blog_page")
    const data = await getPosts({ page: props?.searchParams?.page , per_page: 12 })


    return (
        <div className='my-10'>
            <SliceZone slices={page.slices} components={components} />
            {/* <div>{referer}</div> */}
            <section className='grid grid-cols-6 gap-5 container transition-all duration-1000 mx-auto p-5'>
                {
                    (data.posts as [])?.map((item: IPostsType) => (
                        <Link key={item.id} href={`/blog/${item.id}/${item.slug}`} className='col-span-2 max-lg:col-span-3 max-md:col-span-6'>
                            <article className='shadow rounded-lg overflow-hidden h-full'>
                                <div>
                                    <img src={item.post_data.thumbnail} />
                                </div>
                                <div className='p-5'>
                                    <h3 className={stylesComponets.h3}>{item.title.rendered}</h3>
                                    {/* converted a string of Html to Html Element by use dangerouslySetInnerHTML */}
                                    <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} className={`${stylesComponets.p} !w-full !max-w-full`} />
                                </div>

                            </article>
                        </Link>
                    ))
                }
            </section>
            <div className='text-center'>
            <Pagination
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data.total_page as string}
                page={props?.searchParams?.page} />
            </div>

        </div>
    )
};

export default BlogPage;
