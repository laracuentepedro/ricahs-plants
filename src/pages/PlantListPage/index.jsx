import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import { useEffect, useState } from "react";
import PlantItem from "./PlantItem";
const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPlants = async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      console.log(data);
      setIsLoading(false);
    };
    fetchPlants();
  }, []);
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      {isLoading ? (
        <div className="pt-40 flex justify-center">
          <i className="fa-solid fa-circle-notch animate-spin text-3xl text-emerald-700"></i>
        </div>
      ) : (
        <div className="flex justify-center py-24">
          <div className="flex flex-col w-full max-w-5xl">
            <div className="font-playfair text-4xl ml-4 text-emerald-800">
              Plants in Stock
            </div>
            <div className="flex justify-center flex-wrap">
              {plants.map((plant) => (
                <PlantItem key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        </div>
      )}
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
