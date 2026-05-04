import React from 'react';
import Image from 'next/image';
import cow from '../hero goru.jpg'
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <div className="hero bg-[#104216f6] min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <Image className='h-100 w-80' src={cow} height={200} width={400} alt='cow route'  >
          </Image>
          <div>
            <button className='text-[#c89831cf] border rounded-3xl p-2 font-bold animate__animated animate__swing'>🌙 Eid ul-Adha Special</button>
            <h1 className="text-5xl font-bold text-white ">Find Your Perfect <br/>
              <span className='text-[#C89731]'>Qurbani Animal</span>
              <br />
              This Eid</h1>
            <p className="py-5 text-white">
              Explore premium, healthy and verified livestock from <br /> trusted farmers across Bangladesh. Book your Qurbani <br /> animal with confidence.
            </p>
            <div className=" flex gap-3">
              <Link href="/animals">
                <button className="btn bg-[#104216f6] text-white cursor-pointer">Browse Animals</button>
              </Link>
              <button className="btn bg-[#104216f6] text-white">Get Started free</button>
            </div>

            <div className='flex gap-6 mt-3'>
              <div><h2 className='text-[#C89731] font-bold text-3xl'>500+</h2>
                <p className='text-white text-xs'>Animals Listed</p></div>
              <div><h2 className='text-[#C89731] font-bold text-3xl'>200+</h2>
                <p className='text-white text-xs'>Verified Sellers</p></div>
              <div>
                <h2 className='text-[#C89731] font-bold text-3xl'>1000+</h2>
                <p className='text-white text-xs'>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;