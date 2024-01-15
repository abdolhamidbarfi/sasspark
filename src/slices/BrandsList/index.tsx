import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BrandsList`.
 */
export type BrandsListProps = SliceComponentProps<Content.BrandsListSlice>;

/**
 * Component for "BrandsList" Slices.
 */
const BrandsList = ({ slice, index }: BrandsListProps): JSX.Element => {


    return (
        <section
            data-slice-type={slice?.slice_type}
            data-slice-variation={slice?.variation}
        >
            <div className='container transition-all duration-1000 mx-auto my-10 border-b-gray-100 border-b-2 px-5'>
                <span className='text-gray-400 font-bold'>{slice.primary.title}</span>
                <div className='transition-all duration-1000 flex-wrap flex mx-auto justify-between  w-full'>
                    {slice.items.map(item => <PrismicNextImage className='basis-1/5 px-5 object-scale-down' field={item.logo} alt={item.title as ""} />)}
                </div>
            </div>
        </section>
    );
};

export default BrandsList;
