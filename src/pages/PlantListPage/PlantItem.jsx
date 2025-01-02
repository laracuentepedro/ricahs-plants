import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useState } from 'react';
const POT_COLORS = {
    stone: "bg-stone-200",
    slate: "bg-slate-300",
    sky: "bg-sky-700",
    black: "bg-gray-600",
    white: "bg-gray-50",
    amber: "bg-amber-600",
  };

  const getRandomIndex = (array) => Math.floor(Math.random()*array.length);

const PlantItem = (props) => {
  const { name, price, images } = props.plant;
    const [selectedPlant, setSelectedPlant] = useState(getRandomIndex(images));
  
  return (
    <div className="p-4">
      <img className="w-60 h-90 object-cover rounded-lg" src={images[selectedPlant]["src"]} />
      <div className="flex items-center justify-between font-lato text-emerald-700 mt-2">
        <div className="font-playfair text-xl">{name}</div>
        <div>${price}</div>
      </div>
      <div className='flex justify-between items-center'>
        <div className="text-slate-500 text-sm">{images[selectedPlant]['pot_color']}</div>
        <div className='flex mt-4'>
            {
                images.map((image, idx) =>(
                    <div 
                    key={idx}
                    className={clsx(
                        'h-4 w-4 rounded-full border border-slate-300 ml-1', POT_COLORS[image.pot_color]
                    )}></div>
                ) )
            }
            </div>
      </div>
    </div>
  );
}


PlantItem.propTypes = {
  plant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        pot_color: PropTypes.string
      })
    ).isRequired
  }).isRequired
};


export default PlantItem;
