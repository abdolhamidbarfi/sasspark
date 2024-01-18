

import Image from 'next/image';
import * as React from 'react';
import { stylesComponets } from '../tools/typography';

interface IDevelopingProps {
    title : string
}

const Developing: React.FunctionComponent<IDevelopingProps> = ({title}) => {
    return (
        <div className='p-10 '>
            <div className='container mx-auto flex flex-col items-center border-4 border-gray-500 border-dashed rounded-md'>
                <Image src='/image.jpg' alt="Developing" width={1000} height={1000} className='mb-5'/>
                <h2 className={stylesComponets.h2}>{title}</h2>
                <p className='text-center pt-5 pb-10 text-xl font-bold'>در حال توسعه ...</p>
            </div>
        </div>
    );
};

export default Developing;
