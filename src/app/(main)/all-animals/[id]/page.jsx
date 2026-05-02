import Image from "next/image";
import { getAllAnimals } from "@/lib/data";
import Link from "next/link";
import BookingModal from "@/components/BookingModal";


const AnimalDetails = async ({ params }) => {
  // 2. Await params for Next.js 15+ compatibility
  const { id } = await params;

  const animals = await getAllAnimals()

  // 3. Find the animal
  const animal = animals.find(
    (item) => String(item.id) === String(id)
  );
  console.log(animal);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/all-animals"
        className="text-sm text-green-600 hover:underline font-medium"
      >
        ← Back to All Animals
      </Link>

      <div className="mt-6 grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border shadow-sm">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {animal?.name}
            </h1>
            <p className="text-lg text-gray-500 mt-1">
              {animal.type} • {animal.breed}
            </p>
          </div>

          <p className="text-3xl font-black text-green-600">
            ৳ {animal.price}
          </p>

          <div className="bg-gray-50 p-6 rounded-xl grid grid-cols-2 gap-4 text-sm text-gray-700 border border-gray-100">
            <p><span className="text-gray-400 mr-2">⚖️</span> <b>Weight:</b> {animal.weight} kg</p>
            <p><span className="text-gray-400 mr-2">🎂</span> <b>Age:</b> {animal.age} years</p>
            <p><span className="text-gray-400 mr-2">📍</span> <b>Location:</b> {animal.location}</p>
            <p><span className="text-gray-400 mr-2">🏷</span> <b>Category:</b> {animal.category}</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-gray-900">Description</h3>
            <p className="text-gray-700 leading-relaxed italic">
              "{animal.description}"
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg">
              Contact Seller
            </button>

            <BookingModal animalName={animal.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalDetails;
