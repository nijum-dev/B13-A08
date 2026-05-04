'use client';

import React, { useState, useEffect } from 'react';
import AnimalCard from '@/components/AnimalCard';
import Footer from '@/components/Footer';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const AllAnimalsPage = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/animal.json",{cache:"no-store"})
                const data = await res.json();
                setAnimals(data);
            } catch (error) {
                console.error('Error fetching animals:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const sortedAnimals = [...animals].sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        return b.price - a.price;
    });

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#104216]"></div>
            </div>
        );
    }

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <div className='py-16 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12'>
                        <span className='inline-block text-[#104216] bg-[#FDE8EF] px-4 py-1.5 rounded-full font-bold text-[12px] tracking-wider mb-4 shadow-sm'>
                            OUR COLLECTION
                        </span>
                        <h1 className='text-[#104216] font-black text-3xl md:text-5xl mb-4'>
                            All Available Animals
                        </h1>
                        <p className='text-gray-500 text-lg max-w-2xl mx-auto font-medium'>
                            Browse our full selection of premium livestock from across Bangladesh
                        </p>
                    </div>

                    {/* Sorting Controls */}
                    <div className="flex justify-end mb-8">
                        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                            <span className="text-gray-500 font-bold text-sm">Sort by Price:</span>
                            <select 
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="bg-transparent border-none outline-none text-[#104216] font-bold text-sm cursor-pointer"
                            >
                                <option value="asc">Low to High</option>
                                <option value="desc">High to Low</option>
                            </select>
                            {sortOrder === 'asc' ? <FaSortAmountDown className="text-[#D4924A]" /> : <FaSortAmountUp className="text-[#D4924A]" />}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {sortedAnimals.map(item => (
                            <AnimalCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllAnimalsPage;
