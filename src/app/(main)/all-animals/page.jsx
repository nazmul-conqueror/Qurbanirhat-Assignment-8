import { getAllAnimals } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const AllAnimals = async () => {
 const animals = await getAllAnimals();
  return (
    <section className="py-12 px-4">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center">
        All Animals
      </h1>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {animals.map((animal) => (

          <div
            key={animal.id}
          
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white block"
          >

            {/* Image */}
            <div className="relative w-full h-44">
              <Image
                src={animal.image || "/fallback.jpg"}
                alt={animal.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-1">
              <h2 className="font-semibold text-lg">{animal.name}</h2>
              <p className="text-sm text-gray-600">{animal.type}</p>

              <p className="text-green-600 font-bold">
                ৳ {animal.price}
              </p>

              <p className="text-xs text-gray-500">
                📍 {animal.location}
              </p>
            </div>
          <Link href={`/all-animals/${animal.id}`}>  <Button variant="outline" className={"w-full"}>Details</Button></Link>

       </div>

        ))}

      </div>

    </section>
  );
};

export default AllAnimals;