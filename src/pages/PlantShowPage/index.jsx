import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as plantService from 'services/plant';

const PlantShowPage = () => {
  const {plantId} = useParams();
  const [plant, setPlant] = useState(null)

useEffect(()=>{
  const fetchPlant = async () => {
    const response = await plantService.getPlantById(plantId);
    const data = await response.json();
    setPlant(data);
    console.log(data);
  };
  fetchPlant()
}, [plantId])

  return <div>Plant!</div>;
};

export default PlantShowPage;
