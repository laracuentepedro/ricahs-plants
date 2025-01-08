import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import { useEffect, useState } from "react";
import PlantItem from "./PlantItem";
import { motion } from "framer-motion";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPlants = async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
    };
    fetchPlants();
  }, []);
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      {isLoading ? (
        <div className=" flex justify-center items-center bg-emerald-50 h-screen">
          <i className="fa-solid fa-circle-notch animate-spin text-3xl text-emerald-700"></i>
        </div>
      ) : (
        <div className="flex justify-center py-24 bg-emerald-50">
          <div className="flex flex-col w-full max-w-4xl">
            <div className="font-playfair text-4xl ml-4 text-emerald-800">
              Plants in Stock
            </div>
            <div className="flex justify-center flex-wrap">
              {plants.map((plant, idx) => (
                <motion.div 
                initial={{opacity:0, translateY:"20px"}}
                whileInView={{opacity:1, translateY: 0}}
                viewport={{once:true}}
                transition={{delay: 0.3 + (idx % 3)* 0.2, duration: 0.4}}
                key={plant.id}>
                  <PlantItem plant={plant} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
