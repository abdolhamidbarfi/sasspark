import { JSXFunctionSerializer, JSXMapSerializer } from "@prismicio/react"

// this section use in slice sections
const components: JSXMapSerializer | JSXFunctionSerializer | undefined = {
    heading2: ({ children }) => (
        <h2 className="lg:text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl transition-all duration-1000 lg:!leading-[5rem] md:!leading-[3rem] max-md:!leading-[2rem] font-bold mb-5">{children}</h2>
    ),
    paragraph: ({ children }) => (
        <p className="text-lg lg:!text-xl font-normal leading-8 font-body text-slate-600 mb-5 md:mb-8 max-w-lg  transition-all duration-1000">{children}</p>
    ),
    heading3: ({ children }) => (
        <h3 className=" lg:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg transition-all duration-1000 lg:!leading-[3rem] md:!leading-[2rem] max-md:!leading-[1rem] font-bold mb-2">{children}</h3>
    )

}

export { components }
