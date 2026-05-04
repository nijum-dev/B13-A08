import Image from "next/image";
import { FaStar, FaBalanceScale, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const AnimalCard = ({ item }) => {
  return (
    <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-4 w-full transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100">
      
      {/* Image + badges */}
      <div className="relative overflow-hidden rounded-[20px]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Category Badge - Left */}
        <span className="absolute top-3 left-3 bg-[#104216] text-[#E7F3E7] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg">
          {item.category}
        </span>

        {/* Type Badge - Right */}
        <span className="absolute top-3 right-3 bg-[#D4924A] text-[#2C1810] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
          {item.type}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 space-y-3">
        {/* Title and Rating */}
        <div className="flex justify-between items-start">
          <h2 className="font-bold text-[20px] text-[#104216] leading-tight flex-1">
            {item.name}
          </h2>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-md">
            <FaStar className="text-yellow-500 text-sm" />
            <span className="text-sm font-bold text-gray-700">{item.rating || "4.5"}</span>
          </div>
        </div>

        {/* Breed */}
        <p className="text-[14px] text-gray-500 font-medium">
          Breed: <span className="text-gray-400">{item.breed}</span>
        </p>

        {/* Weight and Location */}
        <div className="flex items-center gap-6 text-[14px] text-gray-500 border-t border-gray-50 pt-3">
          <div className="flex items-center gap-2">
            <FaBalanceScale className="text-[#D4924A] opacity-70" />
            <span className="font-semibold">{item.weight}kg</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400 opacity-70" />
            <span className="font-semibold">{item.location}</span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-end mt-4 pt-1">
          <div className="flex flex-col">
            <span className="text-[20px] text-[#104216] leading-none mb-1">৳</span>
            <span className="text-[24px] font-black text-[#104216]">
              {item.price.toLocaleString()}
            </span>
          </div>

          <Link href={`/product-details/${item.id}`}>
            <button className="bg-[#104216] text-white px-6 py-3 rounded-[12px] font-bold text-[14px] hover:bg-[#0d3512] transition-all shadow-md active:scale-95 cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;