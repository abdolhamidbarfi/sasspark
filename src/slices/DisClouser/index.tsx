import MyDisClouser from "@/components/MyDisClouser";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { components } from "../../components/tools/typography";
import { DisClouserSliceDefaultItem, Simplify } from "../../../prismicio-types";

/**
 * Props for `DisClouser`.
 */
export type DisClouserProps = SliceComponentProps<Content.DisClouserSlice>;

/**
 * Component for "DisClouser" Slices.
 */
const DisClouser = ({ slice }: DisClouserProps): JSX.Element => {


    return (
        <section className="container mx-auto py-10 transition-all duration-1000"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="flex flex-col items-center justify-center px-5">
                <PrismicRichText field={slice.primary.title} components={components} />
                <PrismicRichText field={slice.primary.description} components={components} />
            </div>
            <div className="grid max-md:grid-cols-1 md:grid-cols-2">
                {
                    slice.items.map(
                        (item: Simplify<DisClouserSliceDefaultItem>) => {
                            return <MyDisClouser title={item.title} description={item.description} />
                        }
                    )
                }
            </div>

        </section>
    );
};

export default DisClouser;
