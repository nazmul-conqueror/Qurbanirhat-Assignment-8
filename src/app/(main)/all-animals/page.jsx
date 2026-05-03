
import { getAllAnimals } from "@/lib/data";
import AnimalsClient from "@/components/AnimalsClient";

const AllAnimals = async () => {
  const animals = await getAllAnimals();
  if (!animals || animals.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold">No animals found</h2>
      </div>
    );
  }
  return (
    <>

      <AnimalsClient animals={animals} />

    </>)
};

export default AllAnimals;