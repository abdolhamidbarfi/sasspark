import MyDisClouser from "@/components/MyDisClouser";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
            </div>
            <div className="grid max-md:grid-cols-1 md:grid-cols-2">
                {
                    slice.items.map((item: any) => <MyDisClouser title={item.title} description={item.description} />)
                }
            </div>

        </section>
    );
};

export default DisClouser;
