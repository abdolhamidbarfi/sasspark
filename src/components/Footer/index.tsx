
import * as React from 'react';
import { LightLogo } from '../logo';
import { SliceZone } from '@prismicio/client';
import { FooterSectionSlice } from '../../../prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';


interface IFooterProps {
    listItem: SliceZone<FooterSectionSlice>
}

const Footer: React.FunctionComponent<IFooterProps> = ({ listItem }) => {


    return (
        <section className='bg-gray-900 text-white leading-7'>
            <div className='grid grid-cols-5 p-10 container mx-auto transition-all duration-1000'>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-2 lg:col-span-4 max-lg:col-span-5 mb-5 transition-all duration-1000'>
                    {listItem.map((list: any , index : any) => (
                        <div key={index} className='basis-4/5'>
                            <PrismicRichText field={list.primary.title} />
                            <div className='flex flex-col mt-5 leading-10'>
                                {list.items.map((data: any , index : any) => {
                                    return <Link key={index} href={data.link.url}>{data.item}</Link>
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='basis-1/5 lg:col-span-1 sm:col-span-5 max-lg:flex-row flex flex-col transition-all duration-1000'>
                    <LightLogo />
                    <p className='my-5'>Sasspark پشتیبانی شده توسط پریزمیک است که برای برنامه‌ها، Tailwind و استارت‌آپ‌های فناوری طراحی شده است، که شامل تمام ویژگی‌های مهمی است که برای موفقیت کسب‌وکارتان نیاز دارید.</p>
                    <div className='flex justify-between'>
                        <span>Insata</span><span>Tell</span><span>Twiter</span><span>Facebook</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
