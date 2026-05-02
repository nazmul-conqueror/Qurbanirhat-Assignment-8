// app/all-animals/page.jsx (SERVER)
import { getAllAnimals } from "@/lib/data";
import AnimalsClient from "@/components/AnimalsClient";

const AllAnimals = async () => {
  const animals = await getAllAnimals();

  return <AnimalsClient animals={animals} />;
};

export default AllAnimals;