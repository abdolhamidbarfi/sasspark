'use client'
import { Disclosure } from '@headlessui/react';
import * as React from 'react';

interface IDisClouserProps {

}

const DisClouser: React.FunctionComponent<IDisClouserProps> = (props) => {
    return (
        <Disclosure>
            <Disclosure.Button className="py-2">
                Is team pricing available?
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your entire
                team.
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default DisClouser;
