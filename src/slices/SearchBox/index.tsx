import { Button } from "@/components/tools/Button";
import { components } from "@/components/tools/typography";
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
                    <PrismicRichText field={slice.primary.title} components={components} />
                </div>

                <div className="flex flex-col justify-center  ">
                    <PrismicRichText field={slice.primary.description} components={components} />
                    <form action="#" >
                        <div className="xl:w-3/4 bg-white shadow rounded-md h-max p-1 flex justify-between gap-1 ">
                            <input type="email" className="w-1 bg-white outline-none px-2" placeholder="ایمیل خود را وارد کنید ..." />
                            <Button extendStyles="!py-3 !w-[8rem] px-0">ثبت نام</Button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default SearchBox;
