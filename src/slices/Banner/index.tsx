import BrandsList from "@/components/brandsList/BrandsList";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="flex justify-around items-center flex-row-reverse p-5 container mx-auto max-md:flex-col-reverse transition-all duration-1000">
                <div className="w-full h-full basis-3/6"><PrismicNextImage className="object-scale-down" field={slice.primary.image} /></div>
                <div className="basis-3/6 my-10">
                    <span className="font-medium text-green-400 bg-green-50 px-5 py-2 rounded-full border-green-400 mb-5 inline-block">{slice.primary.talk_about}</span>
                    <PrismicRichText field={slice.primary.title} components={{
                        heading2: ({ children }) => (
                            <h2 className="lg:text-7xl max-lg:text-5xl max-md:text-5xl max-sm:text-4xl transition-all duration-1000 lg:!leading-[6rem] md:!leading-[4rem] max-md:!leading-[4rem] font-bold mb-5">{children}</h2>
                        )
                    }} />
                    <PrismicRichText field={slice.primary.description} components={{
                        paragraph: ({ children }) => (
                            <p className="text-xl lg:!text-2xl font-normal leading-10 font-body text-slate-600 mb-5 md:mb-8 max-w-lg  transition-all duration-1000">{children}</p>
                        )
                    }} />
                    <PrismicNextLink className="max-sm:!w-full text-center px-10 py-5 bg-gray-800 text-white rounded-md font-medium inline-block transition-all duration-1000" field={slice.primary.button}>بیایید صحبت کنیم  ...</PrismicNextLink>
                </div>
            </div>
            <BrandsList />
        </section>
    );
};

export default Banner;
