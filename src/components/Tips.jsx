import React from 'react';

const Tips = () => {
    return (
        <div className='bg-[#104216f6] text-center items-center container mx-auto pb-20 px-10'>
            <button className='text-[#e29b03] bg-[#a7720035] rounded-2xl p-2 text-sm mt-10 '>STAY SAFE</button>
            <h1 className='text-white font-bold text-3xl mt-5'>Qurbani Tips</h1>
            <p className='text-gray-400 mt-5'>Essential guidelines to ensure a valid and blessed Qurbani</p>

            <div className=' grid grid-cols-4 container mx-auto mt-10 p-5 gap-3 '>
                <div className='border px-5 py-8 rounded-2xl bg-[#0d3812] hover:bg-[#185820] hover:border-green-300'>
                    <p>🔍</p>
                    <h4 className='text-[#e29b03] font-bold mt-2'>Check Health</h4>
                    <p className='text-gray-400 text-sm mt-2'>Verify the animals health certificate and ensure no visible illness or injury before purchase.</p>
                </div>
                <div className='border px-5 py-8  rounded-2xl bg-[#0d3812] hover:bg-[#185820] hover:border-green-300'>
                    <p>⚖️</p>
                    <h4 className='text-[#e29b03] font-bold mt-2'>Verify Weight</h4>
                    <p className='text-gray-400 text-sm mt-2'>Ensure the animal meets minimum weight. Cows ≥200kg, goats ≥15kg for valid Qurbani.</p>
                </div>
                <div className='border px-5 py-8  rounded-2xl bg-[#0d3812] hover:bg-[#185820] hover:border-green-300'>
                    <p>📋</p>
                    <h4 className='text-[#e29b03] font-bold mt-2'>Valid Documents</h4>
                    <p className='text-gray-400 text-sm mt-2'>Request proper documentation — vaccination records and ownership proof from the seller.</p>
                </div>
                <div className='border px-5 py-8  rounded-2xl bg-[#0d3812] hover:bg-[#185820] hover:border-green-300'>
                    <p>🤝</p>
                    <h4 className='text-[#e29b03] font-bold mt-2'>Trusted Sellers</h4>
                    <p className='text-gray-400 text-sm mt-2'>Always buy from verified and reputed sellers to ensure quality and avoid any fraud.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Tips;