
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import * as React from 'react';

interface IAboutUsPageProps {
}

async function AboutUsPage(params : IAboutUsPageProps) {
    const client = createClient()
    const { data: page } = await client.getSingle("aboutuspage")

    return (
        <>
            <h1>About Us Page</h1>
            <SliceZone slices={page.slices} components={components} />
        </>
    )
};

export default AboutUsPage;
