const PlantItem = (props) => {
  const { name, price, images } = props.plant;
  return (
    <div className="p-4">
      <img className="w-60 rounded-lg" src={images[0]["src"]} />
      <div className="flex items-center justify-between font-lato text-emerald-700 mt-2">
        <div className="font-playfair text-xl">{name}</div>
        <div>${price}</div>
      </div>
      <div className="text-slate-500 text-sm">{images[0]['pot_color']}</div>
    </div>
  );
};

export default PlantItem;
