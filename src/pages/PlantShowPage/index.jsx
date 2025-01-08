import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as plantService from "services/plant";
import Spinner from "shared-components/Spinner";
import NavBar from "shared-components/NavBar";
import PlantInfoSection from "./PlantInfoSection";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
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
    };
    fetchPlant();
  }, [plantId]);

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="flex justify-center bg-emerald-50 min-h-screen">
        <div className="w-full max-w-5xl">
          {isLoading ? <Spinner /> : <PlantInfoSection plant={plant} />}
        </div>
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantShowPage;
