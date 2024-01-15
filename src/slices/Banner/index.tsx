import BrandsList from "@/components/brandsList/BrandsList";
import { buttonStyle } from "@/components/tools/Button";
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
            {slice.variation === "default" && slice.id === "banner$05fec3b6-fd8c-4ca3-861c-39ec552c72c2"
                && <div className="flex justify-around items-center flex-row-reverse p-5 container mx-auto max-md:flex-col-reverse transition-all duration-1000">
                    <div className="w-full h-full basis-3/6"><PrismicNextImage className="object-scale-down" field={slice.primary.image} /></div>
                    <div className="basis-3/6 my-10">
                        <span className="font-medium text-green-400 bg-green-50 px-5 py-2 rounded-full border-green-400 mb-5 inline-block">{slice.primary.talk_about}</span>
                        <PrismicRichText field={slice.primary.title} components={{
                            heading2: ({ children }) => (
                                <h2 className="lg:text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl transition-all duration-1000 lg:!leading-[5rem] md:!leading-[3rem] max-md:!leading-[2rem] font-bold mb-5">{children}</h2>
                            )
                        }} />
                        <PrismicRichText field={slice.primary.description} components={{
                            paragraph: ({ children }) => (
                                <p className="text-lg lg:!text-xl font-normal leading-8 font-body text-slate-600 mb-5 md:mb-8 max-w-lg  transition-all duration-1000">{children}</p>
                            )
                        }} />
                        <PrismicNextLink className="max-sm:!w-full text-center px-10 py-5 bg-gray-800 text-white rounded-md font-medium inline-block transition-all duration-1000" field={slice.primary.button}>بیایید صحبت کنیم  ...</PrismicNextLink>
                    </div>
                </div>
            }

            {slice.variation === "default" && <BrandsList />}

            {slice.variation === "reverse"&& slice.id === "banner$2651e5d7-24d8-474d-842d-fb696c2742cb"
                && <div className="flex justify-around items-center flex-row p-5 container mx-auto max-md:flex-col-reverse transition-all duration-1000">
                    <div className="w-full h-full basis-3/6"><PrismicNextImage className="object-scale-down" field={slice.primary.image} /></div>
                    <div className="basis-3/6 my-10 mx-5">
                        <PrismicRichText field={slice.primary.title} components={{
                            heading2: ({ children }) => (
                                <h2 className="lg:text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl transition-all duration-1000 lg:!leading-[5rem] md:!leading-[3rem] max-md:!leading-[2rem] font-bold mb-5">{children}</h2>
                            )
                        }} />
                        <PrismicRichText field={slice.primary.description} components={{
                            paragraph: ({ children }) => (
                                <p className="text-lg lg:!text-xl font-normal leading-8 font-body text-slate-600 mb-5 md:mb-8 max-w-lg  transition-all duration-1000">{children}</p>
                            )
                        }} />
                        <PrismicNextLink className="max-sm:!w-full text-center px-10 py-5 bg-gray-800 text-white rounded-md font-medium inline-block transition-all duration-1000" field={slice.primary.button}> {slice.primary.link}</PrismicNextLink>
                    </div>
                </div>
            }

            {slice.variation === "optionList" && slice.id === "banner$c964b4be-e38a-4d22-a7e9-30e883a0285c"
                && <div className="flex justify-around items-center flex-row-reverse p-5 container mx-auto max-md:flex-col-reverse transition-all duration-1000">
                    <div className="w-full h-full basis-3/6"><PrismicNextImage className="object-scale-down" field={slice.primary.image} /></div>
                    <div className="basis-3/6 my-10">
                        <PrismicRichText field={slice.primary.title} components={{
                            heading2: ({ children }) => (
                                <h2 className="lg:text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl transition-all duration-1000 lg:!leading-[5rem] md:!leading-[3rem] max-md:!leading-[2rem] font-bold mb-5">{children}</h2>
                            )
                        }} />
                        <PrismicRichText field={slice.primary.description} components={{
                            paragraph: ({ children }) => (
                                <p className="text-lg lg:!text-xl font-normal leading-8 font-body text-slate-600 mb-5 md:mb-8 max-w-lg  transition-all duration-1000">{children}</p>
                            )
                        }} />
                        <ul>
                            {slice.items.map(item => <li className=" text-xl flex items-center my-5 font-medium">
                                <span className="after:rotate-45 ml-3 after:border-b-[3px] after:border-r-[3px] after:border-b-green-400 after:border-r-green-400 after:w-2 after:h-4 after:inline-block w-7 h-7 border-green-400 border-[3px] inline-block rounded-full relative after:absolute after:right-[7px] after:top-[2px]"></span>
                                {item.option}
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
            }

            {slice.variation === "reverse" && slice.id === "banner$46c327dc-4432-4144-8bfd-d972cc09cece"
                && <div className="flex justify-around items-center flex-row p-5 container mx-auto max-md:flex-col-reverse transition-all duration-1000">
                    <div className="w-full h-full basis-3/6"><PrismicNextImage className="object-scale-down" field={slice.primary.image} /></div>
                    <div className="basis-3/6 my-10 mx-5">
                        <PrismicRichText field={slice.primary.title} components={{
                            heading2: ({ children }) => (
                                <h2 className="lg:text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl transition-all duration-1000 lg:!leading-[5rem] md:!leading-[3rem] max-md:!leading-[2rem] font-bold mb-5">{children}</h2>
                            )
                        }} />
                        <PrismicRichText field={slice.primary.description} components={{
                            paragraph: ({ children }) => (
                                <p className="text-lg lg:!text-xl font-normal leading-8 font-body text-slate-600 mb-5 md:mb-8 max-w-lg  transition-all duration-1000">{children}</p>
                            )
                        }} />
                        <PrismicNextLink className={buttonStyle} field={slice.primary.button}> {slice.primary.link}</PrismicNextLink>
                    </div>
                </div>
            }

        </section>
    );
};

export default Banner;
