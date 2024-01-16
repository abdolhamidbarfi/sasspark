
import getPosts from '@/components/helper/getPosts';
import { stylesComponets } from '@/components/tools/typography';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import Link from 'next/link';
import * as React from 'react';

interface IBlogPageProps {
}

interface IPostsType {
    id: string | number
    slug: string
    title: { rendered: string }
    content: { rendered: string }
    excerpt: { rendered: string }
    post_data: { thumbnail: string }
}


async function BlogPage(params: IBlogPageProps) {
    const client = createClient()
    const { data: page } = await client.getSingle("blog_page")
    const data = await getPosts({page: 1 , per_page: 10})



    const list = Array(10).fill("1")
    return (
        <div className='my-10'>
            <SliceZone slices={page.slices} components={components} />

            <section className='grid grid-cols-6 gap-5 container transition-all duration-1000 mx-auto p-5'>
                    {
                        (data as [])?.map((item: IPostsType) => (
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
        </div>
    )
};

export default BlogPage;
