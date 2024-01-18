
import Developing from '@/components/Developing';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import * as React from 'react';

interface IContactUsPageProps {
}

async function ContactUsPage(params : IContactUsPageProps) {
    const client = createClient()
    const { data: page } = await client.getSingle("contactus")

    return (
        <>
            <Developing title='صفحه‌ی تماس با ما'/>
            <SliceZone slices={page.slices} components={components} />
        </>
    )
};

export default ContactUsPage;
