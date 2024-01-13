"use client"
import Link from 'next/link';
import * as React from 'react';
import Logo from '../logo';
import { Bars4Icon
 } from '@heroicons/react/16/solid';
import { GroupField } from '@prismicio/client';
import { NavItemsDocumentDataItemItem, Simplify } from '../../../prismicio-types';

interface INavigationProps {
    items: GroupField<Simplify<NavItemsDocumentDataItemItem>>
}
const Navigation: React.FunctionComponent<INavigationProps> = ({ items }) => {

    const [showMenu, setShowMenu] = React.useState(false)
    const handleOpenMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <header className='lg:h-24 max-lg:h-14 ' >
         <div onClick={handleOpenMenu} className={`bg-gray-600 absolute top-0 bottom-0 right-0 left-0 opacity-50 hidden ${showMenu && "max-sm:!block"}`}></div>
            <div className='container flex flex-row-reverse justify-between items-center h-full mx-auto shadow relative' >
                {/* Logo Section */}
                <div className='px-5'>
                    <Link href="#">
                        <Logo />
                    </Link>
                </div>
                <Bars4Icon className='hidden max-sm:block h-full p-2 cursor-pointer opacity-55' onClick={handleOpenMenu} />
                {/* Nav_Menu Section */}
                <nav className={`${showMenu ? "max-sm:right-0" : "max-sm:!-right-52"}
                    max-sm:absolute max-sm:bg-white max-sm:top-0 max-sm:right-0 transition-all duration-400 max-sm:shadow max-sm:pt-14 max-sm:w-52 max-sm:h-lvh`
                }>
                    <ul className='flex max-sm:flex-col items-center justify-center '>
                        {items.map((item: any, index) => (
                            <li key={index} className='p-5 lg:text-xl lg:font-medium hover:opacity-70' onClick={handleOpenMenu}>
                                <Link href={item.link.url}>{item.item}</Link>
                            </li>
                        )
                        )}
                    </ul>
                </nav>
            </div>
        </header>

    )
};

export default Navigation;
