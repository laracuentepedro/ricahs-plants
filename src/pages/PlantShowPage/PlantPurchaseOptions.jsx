import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import { POT_COLORS } from "utils";
import * as cartService from 'services/cart';
import { useParams } from "react-router-dom";

const PlantPurchaseOptions = (props) => {
  const { images, selectedPlant, setSelectedPlant } = props;
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);
  const {plantId} = useParams();
  return (
    <>
      <div className="font-lato mt-8 mb-4 text-emerald-700 text-xl">
        <i className="fa-solid fa-brush text-xl mr-2"></i>Pot Colors
      </div>
      <div className="flex">
        {images.map((image, idx) => (
          <div
            key={image.pot_color}
            className="flex flex-col items-center w-12"
          >
            <div
              onMouseEnter={() => setSelectedPlant(idx)}
              className={clsx(
                "h-10 w-10 rounded-full border",
                POT_COLORS[image.pot_color],
                selectedPlant === idx &&
                  "outline outline-2 outline-offset-2 outline-slate-400"
              )}
            ></div>
            <div
              className={clsx(
                selectedPlant === idx ? "text-slate-700" : "text-slate-500",
                "text-sm mt-1"
              )}
            >
              {image.pot_color}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <div className="flex items-center justify-center rounded-full border border-slate-300 px-4 py-2">
          <button
            className="text-slate-600 text-lg"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="w-8 flex justify-center items-center text-emerald-700 text-lg">{quantity}</div>
          <button 
          className="text-slate-600 text-lg"
          onClick={() => setQuantity(quantity + 1)}><i className="fa-solid fa-plus"></i></button>
        </div>
        <button 
        onClick={async()=>{
          setAddingToCart(true);
          const potColor = images[selectedPlant].pot_color;
          const response = await cartService.addToCart({plantId, quantity, potColor})
          console.log(response.status);
          setAddingToCart(false);
        }}
        className="bg-emerald-700 text-white flex-1 rounded-full ml-4 hover:bg-emerald-800">
        <i className={clsx(addingToCart ? "animate-spin fa-solid fa-circle-notch" : "fa-solid fa-cart-plus", "mr-2")}></i>
          Add to Cart
          </button>
      </div>
    </>
  );
};

PlantPurchaseOptions.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      pot_color: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedPlant: PropTypes.number,
  setSelectedPlant: PropTypes.func,
};

export default PlantPurchaseOptions;
