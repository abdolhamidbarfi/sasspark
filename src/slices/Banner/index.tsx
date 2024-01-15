import SliceBanner from "@/components/slices/Banner/Banner";
import { Content } from "@prismicio/client";
import {  SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice, index }: BannerProps): JSX.Element => {

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <SliceBanner
                key={index}
                items={slice.items}
                primary={slice.primary}
                variation={slice.variation}
            />
        </section>
    );
};

export default Banner;
