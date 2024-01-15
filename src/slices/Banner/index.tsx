import SliceBanner from "@/components/slices/Banner/Banner";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { components } from "./typography";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({slice}: BannerProps): JSX.Element => {

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
             <SliceBanner
                items={slice.items}
                primary={slice.primary}
                variation={slice.variation}
            />
        </section>
    );
};

export default Banner;
