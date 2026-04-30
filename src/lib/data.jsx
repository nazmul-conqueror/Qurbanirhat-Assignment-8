export const getAllAnimals = async () => {
  try {
    const res = await fetch(
      "https://qurbanirhat-assignment-8.vercel.app/data.json",
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch animals");
    }

    const animals = await res.json();

    return animals || [];
  } catch (error) {
    console.error("getAllAnimals error:", error);
    return [];
  }
};