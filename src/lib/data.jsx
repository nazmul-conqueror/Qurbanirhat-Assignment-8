 export const getAllAnimals = async() =>{
 const res = await fetch('https://pixgen-assignment-8-demo.vercel.app/data.json')
    const animals = await res.json()
    return animals;
  
}