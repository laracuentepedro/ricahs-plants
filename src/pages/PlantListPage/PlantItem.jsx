import PropTypes from 'prop-types';
import clsx from 'clsx';

const POT_COLORS = {
    stone: "bg-stone-200",
    slate: "bg-slate-300",
    sky: "bg-sky-700",
    black: "bg-gray-600",
    white: "bg-gray-50",
    amber: "bg-amber-600",
  };

const PlantItem = (props) => {
  const { name, price, images } = props.plant;
  return (
    <div className="p-4">
      <img className="w-60 h-90 object-cover rounded-lg" src={images[0]["src"]} />
      <div className="flex items-center justify-between font-lato text-emerald-700 mt-2">
        <div className="font-playfair text-xl">{name}</div>
        <div>${price}</div>
      </div>
      <div className='flex justify-between items-center'>
        <div className="text-slate-500 text-sm">{images[0]['pot_color']}</div>
        <div className='flex mt-4'>
            {
                images.map((image, idx) =>(
                    <div 
                    key={idx}
                    className={clsx(
                        'h-4 w-4 rounded-full border ml-1', POT_COLORS[image.pot_color]
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
