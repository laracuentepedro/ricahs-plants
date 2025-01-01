import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import { useEffect } from "react";
const PlantListPage = () => {
  useEffect(() => {
    const fetchPlants = async () => {
        const response = await plantService.getPlants();
        console.log(response.status);
        const data = await response.json();
        console.log(data);
    }
    fetchPlants();
  }, []);
  return (
    <RedirectToSignInIfSignedOut>
      <div>
        <NavBar />
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
