import fs from 'fs';
import path from 'path';
import Breeds from '@/components/Breeds';
import BrowseAnimal from '@/components/Browse';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Tips from '@/components/Tips';
import React from 'react';

const fetchData = async () => {
    try {
        const filePath = path.join(process.cwd(), 'public', 'animal.json');
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileData);
        }
        return [];
    } catch (e) {
        console.error("Error reading animal.json:", e);
        return [];
    }
}

const page  = async () => {
  const data = await fetch("https://b13-a08-chi.vercel.app/animal.json",{cache:"no-store"})

  const animal = await data.json()
  console.log(animal);

  return (
    <div>
      <Hero></Hero>
      <Featured data={animal}></Featured>
      <Tips></Tips>
      <Breeds></Breeds>
      <BrowseAnimal></BrowseAnimal>
       <Footer></Footer>    
    </div>
  );
};

export default page;