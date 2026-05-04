import Image from "next/image";

const AnimalCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-3 w-[280px]">
      
      {/* Image + badges */}
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-[180px]"
        />

        {/* Category */}
        <span className="absolute top-2 left-2 bg-green-900 text-white text-xs px-2 py-1 rounded-full">
          {item.category}
        </span>

        {/* Type */}
        <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
          {item.type}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3">
        <h2 className="font-semibold text-lg text-green-900">
          {item.name}
        </h2>

        <p className="text-sm text-gray-500">
          Breed: {item.breed}
        </p>

        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>⚖ {item.weight}kg</span>
          <span>📍 {item.location}</span>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-green-800 font-bold text-lg">
            ৳ {item.price}
          </p>

          <button className="bg-green-800 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;