import Breeds from '@/components/Breeds';
import BrowseAnimal from '@/components/Browse';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Tips from '@/components/Tips';
import React from 'react';

const fetchData = async () => {
   const res = await fetch('http://localhost:3000/animal.json');
    return res.json();
}

const page  = async () => {

  const data =await fetchData();

  return (
    <div>
      <Hero></Hero>
      <Featured data={data}></Featured>
      <Tips></Tips>
      <Breeds></Breeds>
      <BrowseAnimal></BrowseAnimal>
       <Footer></Footer>    
    </div>
  );
};

export default page;