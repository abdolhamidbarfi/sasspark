import getSinglePost from "@/components/helper/getSinglePost";
import { stylesComponets } from "@/components/tools/typography";

export default async function Page({ params }: { params: { slug: string } }) {

    const data = await getSinglePost({id : params.slug[0]})

    const list = Array(10).fill("1")

    return (
        <div className="blog-content">
            <div className=' container transition-all duration-1000 mx-auto'>
                {/* article section */}
                <section className='xl:w-9/12 mx-auto p-5'>
                    <article className='shadow rounded-lg overflow-hidden my-5'>
                        <div className=''>
                            <h1 className="border-b-4 border-gray-100 p-5">{data.title.rendered}</h1>
                            {/* converted a string of Html to Html Element by use dangerouslySetInnerHTML */}
                            <div className="px-5 pb-5" dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}
