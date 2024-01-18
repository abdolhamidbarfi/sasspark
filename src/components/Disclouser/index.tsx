"use client"
import { KeyTextField } from '@prismicio/client';
import * as React from 'react';

interface IDisclouserProps {
    as?: React.ElementType,
    className?: string,
    children?: React.ReactNode
    data: { title: string | KeyTextField, description: string | KeyTextField }
}

const Disclouser: React.FunctionComponent<IDisclouserProps> = ({
    as: Component = "h3",
    className,
    data,
    children
}) => {

    const [show, setShow] = React.useState(false)
    const handleshow = () => {
        setShow(!show)
    }

    return (
        <div className='m-2'>
            <div onClick={handleshow} className={`bg-white rounded-lg relative m-1 cursor-pointer px-5 py-2`}>
                <Component className="cursor-pointer my-5 text-2xl font-bold">{data.title}</Component>
                <div className={`${show && "!grid-rows-[1fr]"} grid grid-rows-[0fr] transition-[grid-template-rows] ease-out duration-500`}>
                    <div className='overflow-hidden'>
                        <p className={`transition-all duration-500 ease-in-out pb-3 text-gray-500`}>{data.description}</p>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disclouser;
