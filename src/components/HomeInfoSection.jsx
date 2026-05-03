
import Image from "next/image";
import { Button } from "@heroui/react";
import { getAllAnimals } from "@/lib/data";
import "animate.css";

const HomeInfoSection = async () => {
  const animal = await getAllAnimals();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-6">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Qurbani Tips */}
        <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between shadow-sm animate__animated animate__fadeInUp hover:shadow-md transition duration-300">

          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              📖 Qurbani Tips
            </h2>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✅ Make sure the animal is healthy and free from diseases.</li>
              <li>✅ Check the age of the animal as per Islamic guidelines.</li>
              <li>✅ Ensure the animal is well-fed and naturally grown.</li>
              <li>✅ Complete the payment and collection process securely.</li>
            </ul>

            <Button className="bg-green-600 text-white hover:bg-green-700 transition">
              Read More Tips
            </Button>
          </div>

          {/* Image */}
          <div className="hidden sm:block">
            <Image
              src={"/tipslogo.png"}
              alt="Qurbani"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Top Breeds */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm text-center animate__animated animate__fadeInUp hover:shadow-md transition duration-300">

          <h2 className="text-xl font-semibold mb-4">⭐ Top Breeds</h2>

          <div className="flex justify-center gap-6 flex-wrap">

            {animal.map((breed, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 0.2}s` }}
                className="flex flex-col items-center text-sm animate__animated animate__fadeInUp"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={breed.image}
                    alt={breed.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <p className="mt-2">{breed.name}</p>
              </div>
            ))}

          </div>

          <Button className="mt-4 bg-green-600 text-white hover:bg-green-700 transition">
            Explore Breeds →
          </Button>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

        {[
          {
            title: "Trusted Sellers",
            desc: "Verified and trusted sellers",
            icon: "⭐",
          },
          {
            title: "Healthy Animals",
            desc: "Well cared and healthy",
            icon: "💚",
          },
          {
            title: "Secure Payment",
            desc: "100% secure payment",
            icon: "💳",
          },
          {
            title: "Fast & Safe Delivery",
            desc: "Hassle free delivery",
            icon: "🚚",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 0.2}s` }}
            className="bg-gray-50 rounded-xl p-4 shadow-sm space-y-2 animate__animated animate__fadeInUp hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <div className="text-xl">{item.icon}</div>
            <h3 className="font-semibold text-sm">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HomeInfoSection;