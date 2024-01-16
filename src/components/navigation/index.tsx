"use client"
import Link from 'next/link';
import * as React from 'react';
import {DarkLogo} from '../logo';
import { Bars3Icon
 } from '@heroicons/react/16/solid';
import { GroupField } from '@prismicio/client';
import { NavItemsDocumentDataItemItem, Simplify } from '../../../prismicio-types';
import { PrismicNextLink } from '@prismicio/next';

interface INavigationProps {
    items: GroupField<Simplify<NavItemsDocumentDataItemItem>>
}

// this FC get a list of menu and return a navigation with menu
const Navigation: React.FunctionComponent<INavigationProps> = ({ items }) => {


    const [showMenu, setShowMenu] = React.useState(false)

    const handleOpenMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className='lg:h-24 max-lg:h-14 shadow transition-all duration-1000' >
         <div onClick={handleOpenMenu} className={`transition-all duration-1000 bg-gray-600 absolute top-0 bottom-0 right-0 left-0 opacity-50 hidden ${showMenu && "max-sm:!block"}`}></div>
            <div className='container flex flex-row-reverse justify-between items-center h-full mx-auto  relative' >
                {/* Logo Section */}
                <div className='px-5'>
                    <Link href="#">
                        <DarkLogo />
                    </Link>
                </div>
                {/* menu toggle button section */}
                <Bars3Icon className='hidden max-sm:block h-full p-2 cursor-pointer opacity-80' onClick={handleOpenMenu} />
                {/* Nav_Menu list Section */}
                <nav className={`${showMenu ? "max-sm:right-0" : "max-sm:!-right-52"}
                    max-sm:absolute max-sm:bg-white max-sm:top-0 max-sm:right-0 transition-all duration-300 max-sm:shadow max-sm:pt-14 max-sm:w-52 max-sm:h-lvh`
                }>
                    <ul className='flex max-sm:flex-col items-center justify-center '>
                        {items.map((item: any, index) => (
                            <li key={index} className='p-5 lg:text-xl lg:font-medium hover:opacity-70' onClick={handleOpenMenu}>
                                <PrismicNextLink field={item.link}>{item.item}</PrismicNextLink>
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
