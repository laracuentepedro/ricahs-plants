const CartItem = (props) => {
  const {image_src, plant_name, pot_color, price_per_unit, quantity } =
    props.item;

  return (
    <div className="flex justify-between w-full py-4 pl-4 pr-8">
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
      <div className="font-lato text-lg text-slate-500">${price_per_unit*quantity}</div>
    </div>
  );
};

export default CartItem;
