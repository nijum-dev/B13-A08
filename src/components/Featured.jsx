import React from 'react';
import AnimalCard from './AnimalCard';

const Featured = ({ data }) => {
    return (
        <section className='bg-[#FDFBF7] py-16 px-4 md:px-8 lg:px-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <span className='inline-block text-[#104216] bg-[#FDE8EF] px-4 py-1.5 rounded-full font-bold text-[12px] tracking-wider mb-4 shadow-sm'>
                        TOP PICKS
                    </span>
                    <h1 className='text-[#104216] font-black text-3xl md:text-5xl mb-4'>
                        Featured Animals
                    </h1>
                    <p className='text-gray-500 text-lg max-w-2xl mx-auto font-medium'>
                        Hand-picked premium livestock from our verified sellers across the country
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {data && data.slice(0, 4).map(item => (
                        <AnimalCard key={item.id} item={item} />
                    ))}
                </div>
                
                {data && data.length > 4 && (
                  <div className="mt-16 text-center">
                      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                          {data.slice(4).map(item => (
                              <AnimalCard key={item.id} item={item} />
                          ))}
                      </div>
                  </div>
                )}
            </div>
        </section>
    );
};

export default Featured;