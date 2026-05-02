import { getAllAnimals } from "@/lib/data";
import { Button } from "@heroui/react";
import {  ArrowRight, Dog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedSection = async () => {
 const getAnimals = await getAllAnimals()
 const animals = getAnimals.slice(0,4)

  return (
    <section className="py-12 px-4">
      
      {/* Title */}
      <div>
        <h1 className="font-bold text-3xl text-center">
          Featured Animals
        </h1>

        <div className="flex items-center mt-3 w-full max-w-md mx-auto">
          <div className="grow h-px bg-slate-300" />

          <div className="mx-4">
            <Dog size={24} className="text-green-600" strokeWidth={1.5} />
          </div>

          <div className="grow h-px bg-slate-300" />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
          >
            
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
            <div className="p-4 space-y-1">
              <h2 className="font-semibold text-lg">{animal.name}</h2>
              <p className="text-sm text-gray-600">{animal.type}</p>

              <p className="text-green-600 font-bold">
                ৳ {animal.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button (FIXED POSITION) */}
      <div className="flex justify-center mt-10">
        <Link href="/all-animals">
          <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-5 py-2 rounded-lg transition">
            View All Animals <ArrowRight/>
          </Button>
        </Link>
      </div>

    </section>
  );
};

export default FeaturedSection;