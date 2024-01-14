import { Disclosure } from "@headlessui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OptionSection`.
 */
export type OptionSectionProps =
    SliceComponentProps<Content.OptionSectionSlice>;

/**
 * Component for "OptionSection" Slices.
 */
const OptionSection = ({ slice }: OptionSectionProps): JSX.Element => {
    return (
        <section className="w-full bg-gray-100"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className=" container mx-auto transition-all duration-1000 py-10">
                <div className="text-center"> <PrismicRichText field={slice.primary.title} components={{
                    heading2: ({ children }) => (
                        <h2 className="pb-10 px-10 lg:text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl transition-all duration-1000 lg:!leading-[6rem] md:!leading-[4rem] max-md:!leading-[3rem] font-bold mb-5">{children}</h2>
                    )
                }} /></div>

                <ul className="flex md:justify-around md:items-center max-md:flex-col px-5">
                    {slice.items.map(item => (
                        <li className="basis-1/4 mb-5">
                            <PrismicRichText field={item.title} components={{
                                heading3: ({ children }) => (
                                    <h3 className=" lg:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg transition-all duration-1000 lg:!leading-[3rem] md:!leading-[2rem] max-md:!leading-[1rem] font-bold mb-2">{children}</h3>
                                )
                            }} />
                            <PrismicRichText field={item.description} />
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
};

export default OptionSection;
