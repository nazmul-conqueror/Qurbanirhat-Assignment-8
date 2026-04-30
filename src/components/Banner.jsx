import Image from "next/image";
import { Button } from "@heroui/react";
import { AiTwotoneShopping } from "react-icons/ai";

export default function BannerPage() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/banner.png"
        alt="Qurbani animals banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10  px-6 md:px-12 text-white">
        <div className="max-w-xl space-y-6">
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Find Your Perfect <br />
            Qurbani Animal
          </h2>

          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Browse healthy and well-cared-for animals from trusted sellers across
            Bangladesh. Hassle-free delivery guaranteed for your Qurbani needs.
          </p>

          <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-5 py-2 rounded-lg transition">
            <AiTwotoneShopping size={20} />
            Browse All Animals
          </Button>

        </div>
      </div>
    </section>
  );
}