import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as plantService from "services/plant";
import Spinner from "shared-components/Spinner";
import NavBar from "shared-components/NavBar";
import PlantInfoSection from "./PlantInfoSection";
const PlantShowPage = () => {
  const { plantId } = useParams();
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlant = async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById({ id: plantId });
      const data = await response.json();
      setPlant(data);
      setIsLoading(false);
      console.log(data);
    };
    fetchPlant();
  }, [plantId]);

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-emerald-50 min-h-screen">
        <div className="w-full max-w-5xl">
          {isLoading ? <Spinner /> : <PlantInfoSection plant={plant} />}
        </div>
      </div>
    </>
  );
};

export default PlantShowPage;
