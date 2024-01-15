import { Button } from "@/components/tools/Button";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SearchBox`.
 */
export type SearchBoxProps = SliceComponentProps<Content.SearchBoxSlice>;

/**
 * Component for "SearchBox" Slices.
 */
const SearchBox = ({ slice }: SearchBoxProps): JSX.Element => {
    return (
        <section
        className="bg-blue-200 py-10"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="container mx-auto px-5 grid lg:grid-cols-2 max-lg:grid-col-1 my-10 max-lg:text-center">
                <div className="flex flex-col items-center justify-center px-5">
                    <PrismicRichText field={slice.primary.title} components={{
                        heading2: ({ children }) => (
                            <h2 className="lg:text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl transition-all duration-1000 lg:!leading-[5rem] md:!leading-[3rem] max-md:!leading-[2rem] font-bold mb-5">{children}</h2>
                        )
                    }} />
                </div>
                <div className="flex flex-col justify-center  ">
                    <PrismicRichText field={slice.primary.description} components={{
                        paragraph: ({ children }) => (
                            <p className="text-lg lg:!text-xl font-normal leading-8 font-body text-slate-600 mb-5 md:mb-8 lg:max-w-lg  transition-all duration-1000">{children}</p>
                        )
                    }} />
                    <form action="#" >
                        <div className="xl:w-3/4 bg-white shadow rounded-md h-max p-2 flex  justify-between gap-1 ">
                            <input type="email" className="bg-white w-8/12 outline-none" placeholder="ایمیل خود را وارد کنید ..." />
                            <Button extendStyles="py-3 !w-4/12 max-sm:!w-4/12">ثبت نام</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SearchBox;
