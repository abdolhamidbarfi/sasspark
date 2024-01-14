
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import * as React from 'react';

interface IBrandsListProps {
}

const BrandsList: React.FunctionComponent<IBrandsListProps> = async (props) => {
    const { data } = await createClient().getSingle("popular_brands")
    console.log(data);

    return (
        <div className='container transition-all duration-1000 mx-auto my-10 border-b-gray-100 border-b-2'>
            <span className='text-gray-400 font-bold'>مورد اعتماد برندهای محبوب:</span>
            <div className='transition-all duration-1000 flex-wrap flex mx-auto justify-between  w-full'>
                {data.brand.map((brand: any) => <PrismicNextImage key={brand.title} className='basis-1/5 px-5 object-scale-down' field={brand.logo} alt={brand.title} />)}
            </div>

        </div>
    );
};

export default BrandsList;
