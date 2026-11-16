import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  //state that stores data

  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect performs sideEffects which is fecthing Data from the API

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then((response) =>response.json())
    .then((data) => {
      console.log(data)
      setPlants(data)
    });

  }, []);

   const filteredPlants = plants.filter((plant) => {
     return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
   })

   function addNewPlant(newPlant){
    setPlants([...plants, newPlant])
   }

  return (
    <main>
      <NewPlantForm  onAddPlant = {addNewPlant}/>
      <Search onSearch= {setSearchTerm}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
