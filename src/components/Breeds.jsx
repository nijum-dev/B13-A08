import React from 'react';

const Breeds = () => {
    return (
        <div className='bg-gray-100 text-center items-center container mx-auto mb-10'>
            <button className='text-[#104216f6] bg-[#a7720035] rounded-2xl p-2 text-sm mt-15 font-bold'>PREMIUM QUALITY</button>
            <h1 className='text-[#104216f6] font-bold text-4xl mt-2 '>Top Breeds for Qurbani</h1>
            <p className='text-gray-600 mt-3 text-sm'>Discover the most sought-after breeds this Eid</p>

        <div className='grid grid-cols-4 gap-5  '>
                <div className='bg-white container mx-auto mt-10 p-5 gap-3 rounded-3xl '>
                    <h1 className='font-bold text-5xl mb-5 mt-3'>🐄</h1>
                    <h2 className='text-[#0e3c14] font-bold text-lg'>Sahiwal</h2>
                    <p className='text-gray-600 text-sm mb-2 '>India</p>
                    <button className='text-[#104216f6] bg-[#a7720035] rounded-2xl p-2 text-sm font-bold'>Best for Meat Quality</button>
                </div>

                <div className='bg-white container mx-auto mt-10 p-5 gap-3 rounded-3xl '>
                    <h1 className='font-bold text-5xl mb-5 mt-3'>🐂</h1>
                    <h2 className='text-[#0e3c14] font-bold text-lg'>Brahman</h2>
                    <p className='text-gray-600 text-sm mb-2'>Pakistan / India</p>
                    <button className='text-[#104216f6] bg-[#a7720035] rounded-2xl p-2 text-sm font-bold'>Best for Meat & Milk</button>
                </div>

                <div className='bg-white container mx-auto mt-10 p-5 gap-3 rounded-3xl '>
                    <h1 className='font-bold text-5xl mb-5 mt-3'>🐐</h1>
                    <h2 className='text-[#0e3c14] font-bold text-lg'>Black Bengal</h2>
                    <p className='text-gray-600 text-sm mb-2 '>Bangladesh</p>
                    <button className='text-[#104216f6] bg-[#a7720035] rounded-2xl p-2 text-sm font-bold'>Best for Tender Meat</button>
                </div>

                <div className='bg-white container mx-auto mt-10 p-5 gap-3 rounded-3xl'>
                    <h1 className='font-bold text-5xl  mb-5 mt-3'>🐑</h1>
                    <h2 className='text-[#0e3c14] font-bold text-lg '>Jamunapari</h2>
                    <p className='text-gray-600 text-sm mb-2'>India</p>
                    <button className='text-[#104216f6] bg-[#a7720035] rounded-2xl p-2 text-sm font-bold'>Best for large size</button>
                </div>


        </div>







        </div>
    );
};

export default Breeds;