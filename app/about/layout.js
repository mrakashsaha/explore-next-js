import Link from 'next/link';
import React from 'react';

const AboutLayout = ({ children }) => {
    return (
        <div>
            <nav className='my-6'>
                <ul className="flex gap-10">
                    <li><Link href={"/about/mission"}>Mission</Link></li>
                    <li><Link href={"/about/vission"}>Vission</Link></li>
                </ul>
            </nav>
            <hr />
            {children}
        </div>
    );
};

export default AboutLayout;