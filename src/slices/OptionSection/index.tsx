import { components } from "@/components/tools/typography";
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
            <div className=" container mx-auto px-5 transition-all duration-1000 py-10">
                <div className="text-center">
                    <PrismicRichText field={slice.primary.title} components={components} />
                </div>

                <ul className="flex md:justify-around md:items-center max-md:flex-col px-5">
                    {
                        slice.items.map(
                            item => (
                                <li className="basis-1/4 mb-5">
                                    <PrismicRichText field={item.title} components={components} />
                                    <PrismicRichText field={item.description} />
                                </li>
                            )
                        )
                    }
                </ul>

            </div>
        </section>
    );
};

export default OptionSection;
