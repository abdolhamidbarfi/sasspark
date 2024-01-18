import { components } from '@/components/tools/typography';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import * as React from 'react';
import { BannerSliceDefaultPrimary, BannerSliceOptionListItem, BannerSliceOptionListPrimary, BannerSliceReversePrimary, Simplify } from '../../../../prismicio-types';
import { buttonStyle } from '@/components/tools/Button';
import { LinkField } from '@prismicio/client';

interface ISliceBannerProps {
    items: never[] | Simplify<BannerSliceOptionListItem>[]
    primary: any
    variation: "default" | "reverse" | "optionList"
}

const SliceBanner: React.FunctionComponent<ISliceBannerProps> = ({
    primary,
    items,
    variation
}) => {
    return (
        <div className={`${(variation !== "reverse") ? "flex-row-reverse" : ""} flex justify-around items-center p-5 container mx-auto max-md:flex-col-reverse transition-all duration-1000`}>
            {/* first section */}
            <div className="w-full h-full basis-3/6">
                <PrismicNextImage className="object-scale-down" field={primary?.image} />
            </div>
            {/* second section */}
            <div className="basis-3/6 m-10">
                {
                    (variation === "default")
                    && <p className="font-medium text-green-400 bg-green-50 mx-5 py-2 rounded-full border-green-400 mb-5 inline-block">
                        {primary?.talk_about}
                    </p>
                }
                <PrismicRichText field={primary.title} components={components} />
                <PrismicRichText field={primary.description} components={components} />
                {
                    (variation === "default" || variation === "reverse")
                    &&
                    <PrismicNextLink field={primary?.button} className={buttonStyle} >
                        {primary?.link}
                    </PrismicNextLink>

                }
                {
                    (variation === "optionList") &&
                    <ul >
                        {items?.map((item, index) => <li key={index} className=" sm:text-xl max-sm:text-lg flex md:my-5 font-medium">
                            <div><span className="after:rotate-45 ml-3 after:border-b-[3px] after:border-r-[3px] after:border-b-green-400 after:border-r-green-400 after:w-2 after:h-4 after:inline-block w-[28px] h-[28px]  border-green-400 border-[3px] inline-block rounded-full relative after:absolute after:right-[7px] after:top-[2px]"></span></div>
                                {item?.option}
                        </li>
                        )}
                    </ul>
                }
            </div>
        </div>
    );
};

export default SliceBanner;
