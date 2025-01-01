import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import { useEffect, useState } from "react";
const PlantListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPlants = async () => {
        setIsLoading(true);
      const response = await plantService.getPlants();
      console.log(response.status);
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
    };
    fetchPlants();
  }, []);
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      {isLoading ? <div className="pt-40 flex justify-center">
        <i className="fa-solid fa-circle-notch animate-spin text-3xl text-emerald-700"></i>
      </div> : <div>plants in stock</div>}
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
