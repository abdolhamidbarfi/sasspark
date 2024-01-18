
import * as React from 'react';
import { LightLogo } from '../logo';
import { SliceZone } from '@prismicio/client';
import { FooterSectionSlice } from '../../../prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import { components, stylesComponets } from '../tools/typography';


interface IFooterProps {
    listItem: SliceZone<FooterSectionSlice>
}

const Footer: React.FunctionComponent<IFooterProps> = ({ listItem }) => {


    return (
        <section className='bg-gray-900 text-white leading-7'>
            <div className='grid grid-cols-4 p-10 container mx-auto transition-all duration-1000'>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-5 lg:col-span-4 max-lg:col-span-5 mb-5 transition-all duration-1000 '>
                    {listItem.map((list: any, index: any) => (
                        <div key={index}>
                            <div className='border-b-gray-800 border-b-2'>
                                <PrismicRichText field={list.primary.title} components={components} />
                            </div>
                            <div className='flex flex-col mt-5 leading-10'>
                                {list.items.map((data: any, index: any) => {
                                    return <Link key={index} href={data.link.url}>{data.item}</Link>
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;
