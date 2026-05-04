import React from 'react';
import Link from 'next/link';

const BrowseAnimal = () => {
    return (
        <div className='bg-[#bb8c29] text-center items-center p-15  pb-10'>
            <h1 className='text-[rgba(16,66,22,0.97)] font-bold text-3xl mb-5'>Do not Miss Out This Eid!</h1>
            <p className='text-green-950 text-sm mb-5'>Book your Qurbani animal early and avoid last-minute rush. Limited stock available</p>
            <Link href="/animals">
                <button className='bg-[#104216f6] text-amber-100 p-3 px-6 text-md font-bold rounded-2xl cursor-pointer'>Browse Animals Now</button>
            </Link>
        </div>
    );
};

export default BrowseAnimal;