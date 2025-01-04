import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as plantService from 'services/plant';
import Spinner from "shared-components/Spinner";
import NavBar from "shared-components/NavBar";
const PlantShowPage = () => {
  const {plantId} = useParams();
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
  const fetchPlant = async () => {
    setIsLoading(true);
    const response = await plantService.getPlantById({id: plantId});
    const data = await response.json();
    setPlant(data);
    setIsLoading(false);
    console.log(data);
  };
  fetchPlant()
}, [plantId])

  return <div>
    <NavBar/>
    {isLoading ? <Spinner/> : 'Plant!'}
  </div>;
};

export default PlantShowPage;
