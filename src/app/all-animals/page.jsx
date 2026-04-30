import { getAllAnimals } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const AllAnimals = async () => {
  let animals = [];

  try {
    animals = await getAllAnimals();
  } catch (error) {
    console.error("Failed to load animals:", error);
  }

  return (
    <section className="py-12 px-4">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-center">
        All Animals
      </h1>

      {/* Empty state */}
      {animals.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No animals found 😔
        </p>
      )}

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {animals.map((animal) => (
          
          <Link key={animal.id} href={`/all-animals/${animal.id}`}>
            <div className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white cursor-pointer">
              
              {/* Image */}
              <div className="relative w-full h-44">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                
                <h2 className="font-semibold text-lg">
                  {animal.name}
                </h2>

                <p className="text-sm text-gray-600">
                  {animal.type} • {animal.breed}
                </p>

                <p className="text-green-600 font-bold text-lg">
                  ৳ {animal.price}
                </p>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>⚖️ {animal.weight} kg</p>
                  <p>🎂 {animal.age} years</p>
                  <p>📍 {animal.location}</p>
                </div>

                <p className="text-xs text-gray-600 line-clamp-2">
                  {animal.description}
                </p>

              </div>
            </div>
          </Link>

        ))}
      </div>

    </section>
  );
};

export default AllAnimals;