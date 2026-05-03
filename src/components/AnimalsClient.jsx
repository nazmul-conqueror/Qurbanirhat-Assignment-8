"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const AnimalsClient = ({ animals }) => {
  const [sortType, setSortType] = useState("");

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortType === "low") return a.price - b.price;
    if (sortType === "high") return b.price - a.price;
    return 0;
  });

  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold text-center">
        All Animals
      </h1>

      {/* Dropdown */}
      <div className="max-w-7xl mx-auto mt-6 flex justify-end">
        <select
          className="border px-3 py-2 rounded-md"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
        {sortedAnimals.map((animal) => (
          <div
            key={animal.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white  animate__animated animate__fadeInUp"
          >
            <div className="relative w-full h-44">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
              />
            </div>

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

            <Link href={`/all-animals/${animal.id}`}>
              <Button variant="outline" className="w-full">
                Details
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimalsClient;