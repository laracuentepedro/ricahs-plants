import clsx from "clsx";
import PropTypes from "prop-types";

import { POT_COLORS } from "utils";

const PlantPurchaseOptions = (props) => {
  const { images, selectedPlant, setSelectedPlant } = props;
  console.log(images);
  return (
    <div className="flex mt-8">
      {images.map((image, idx) => (
        <div key={image.pot_color} className="flex flex-col items-center w-12">
          <div
            onMouseEnter={() => setSelectedPlant(idx)}
            className={clsx(
              "h-10 w-10 rounded-full border",
              POT_COLORS[image.pot_color],
              selectedPlant === idx && "outline outline-2 outline-offset-2 outline-slate-400"
            )}
          ></div>
          <div className={clsx(selectedPlant === idx ? "text-slate-700" : "text-slate-500", "text-sm mt-1")}>{image.pot_color}</div>
        </div>
      ))}
    </div>
  );
};
PlantPurchaseOptions.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      pot_color: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedPlant: PropTypes.object,
  setSelectedPlant: PropTypes.func,
};

export default PlantPurchaseOptions;
