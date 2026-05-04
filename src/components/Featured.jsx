
import Image from 'next/image';
import React, { use } from 'react';
import AnimalCard from './AnimalCard';
import Link from 'next/link';

const Featured = ({ data }) => {


    return (
        <div className='bg-gray-100 text-center items-center mt-10 mb-8'>
            <button className='text-[#104216f6] bg-pink-100 p-2 rounded-3xl font-semibold text-sm mb-2'>TOP PICKS</button>
            <h1 className='text-[#104216f6] font-bold text-3xl mb-2'>Featured Animals</h1>
            <p className='text-gray-600'>Hand-picked premium livestock from our verified sellers</p>

            {data.map(item => (
                <div
                key={item.id}
                className="card mt-10 h-100 shadow-sm border border-gray-200"
              >
                <figure>
                  <img
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full  h-85 "
                  />
                </figure>
                <div className="card-body">
                  <p className="text-[#D4924A] font-medium">{item.brand}</p>
                  <h2 className="card-title text-xl">{item.name}</h2>

                  <div className="flex text-md font-medium border-t py-3 border-black/30 border-dashed ">
                    <p className="text-2xl font-bold">${item.price}</p>
                    <div className="w-fit flex items-center gap-2 ">
                      <p>{item.rating}</p>
                     
                    </div>
                    <Link href={`/product-details/${item.id}`} className="btn bg-[#D4924A] h-12 rounded-3xl text-white hover:bg-[#351E11] ml-4">
                      View Details {" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>


    );
};

export default Featured;