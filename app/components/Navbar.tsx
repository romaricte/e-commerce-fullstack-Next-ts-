'use client'

import React, { useState } from 'react'
import SearchBar from './SearchBar'

type Props = {}

const Navbar = (props: Props) => {
    const [showProfile, setshowProfile] = useState<boolean>(false)
    const [showNav, setshowNav] = useState<boolean>(false)
    return (
        <div>
            <div className='flax items-center justify-between py-4 relative'>
                <div className="flex items-center md:space-x-10 lg:space-x-20">
                    <div className="font-semibold text-2xl">
                        <a href="/">SEINE</a>
                    </div>
                    <nav className='max-md:hidden'>
                        <ul className='flex items-center lg:space-x-10 space-x-7 opacity-70 text-[25px]'>
                            <li><a href="/" className="py-3 inline-block w-full">Shop</a></li>
                            <li><a href="/filter" className="py-3 inline-block w-full">Filter</a></li>
                            <li><a href="/myProducts" className="py-3 inline-block w-full">My Products</a></li>

                        </ul>
                    </nav>

                </div>
                <div className="flex items-center space-x-4">
<SearchBar/>
                </div>
            </div>
        </div>
    )
}

export default Navbar