import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function Navbar(){
    return (
        <nav>
        <Image src="/vercel.svg" width={128} height={60} />
        <div className='menu'>
            <Link href="/">
                <a>Home</a> 
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/ninjas">
                <a>Ninja Listing</a>
            </Link>
        </div>
    </nav>
    )
}

export default Navbar