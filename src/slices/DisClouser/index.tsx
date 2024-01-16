import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { components } from "../../components/tools/typography";
import Disclouser from "@/components/Disclouser";

/**
 * Props for `DisClouser`.
 */
export type DisClouserProps = SliceComponentProps<Content.DisClouserSlice>;

/**
 * Component for "DisClouser" Slices.
 */
const DisClouser = ({ slice , index }: DisClouserProps): JSX.Element => {
    const listOfDisclouser = [...slice.items]
    const newListOfDisclouser = []

    while (listOfDisclouser.length > 0) {
        let spliceList = listOfDisclouser.splice(0, (slice.items.length/2))
        newListOfDisclouser.push(spliceList)
        spliceList = []
    }


    return (
        <section key={index} className="container mx-auto py-10 transition-all duration-1000"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div  className="flex flex-col items-center justify-center px-5">
                <PrismicRichText field={slice.primary.title} components={components} />
                <PrismicRichText field={slice.primary.description} components={components} />
            </div>
            <div className="grid max-md:grid-cols-1 md:grid-cols-2">
                {
                    newListOfDisclouser.map(((item, index) => (
                        <div key={index}>
                            {
                                item.map((item , index) => <Disclouser key={index} data={{title: item.title , description: item.description}} />)
                            }
                        </div>
                    )))
                }
            </div>

        </section>
    );
};

export default DisClouser;
