
import { components as styledcomponets } from '@/components/tools/typography';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import * as React from 'react';

interface IBlogPageProps {
}

async function BlogPage(params : IBlogPageProps) {
    const client = createClient()
    const { data: page } = await client.getSingle("blog_page")
    console.log(page);

    return (
        <>
            <PrismicRichText field={page.title} components={styledcomponets}/>
            <SliceZone slices={page.slices} components={components} />
        </>
    )
};

export default BlogPage;
