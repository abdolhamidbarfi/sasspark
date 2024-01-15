'use client'
import * as React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

interface IMyDisClouserProps {
    title: string,
    description: string
}

const MyDisClouser: React.FunctionComponent<IMyDisClouserProps> = ({title , description}) => {
    return (
    <div className="m-2">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 transition-all duration-1000 border-2 border-gray-300 ">

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="transition-all duration-1000 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium outline-none focus-visible:ring">
                <span>{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                {description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default MyDisClouser;
