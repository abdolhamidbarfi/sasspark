
import Developing from '@/components/Developing';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import * as React from 'react';

interface ITeamPageProps {
}

async function TeamPage(params : ITeamPageProps) {
    const client = createClient()
    const { data: page } = await client.getSingle("teampage")


    return (
        <>
            {/* <PrismicRichText field={data.title} /> */}
            <Developing title='صفحه اعضای تیم'/>
            <SliceZone slices={page.slices} components={components} />

        </>
    )
};

export default TeamPage;
