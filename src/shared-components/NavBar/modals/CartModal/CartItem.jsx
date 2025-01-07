import { removeItemFromCart } from "services/cart";
import PropTypes from 'prop-types';

const CartItem = (props) => {
  const { fetchCart, item } = props;
  const { id, image_src, plant_name, pot_color, price_per_unit, quantity } =
    item;

  return (
    <div className="flex justify-between w-full py-8 pl-4 pr-8">
      <div className="flex">
        <img
          className="h-32 w-28 rounded-lg mr-4 object-cover"
          src={image_src}
        />
        <div className="flex flex-col">
          <div className="font-playfair text-xl text-emerald-700 mb-1">
            {plant_name}
          </div>
          <div className="flex font-lato">
            <div className="w-16 text-slate-400">qty:</div>
            <div className="text-slate-500">{quantity}</div>
          </div>
          <div className="flex font-lato">
            <div className="w-16 text-slate-400">color:</div>
            <div className="text-slate-500">{pot_color}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="font-lato text-lg text-slate-500">
          ${price_per_unit * quantity}
        </div>
        <button
          onClick={async () => {
            const response = await removeItemFromCart(id);
            console.log(response.status);
            await fetchCart();
          }}
          className="text-slate-400 hover:text-red-600 text-sm"
        >
          remove <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
CartItem.propTypes = {
  fetchCart: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_src: PropTypes.string.isRequired,
    plant_name: PropTypes.string.isRequired,
    pot_color: PropTypes.string.isRequired,
    price_per_unit: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};

export default CartItem;