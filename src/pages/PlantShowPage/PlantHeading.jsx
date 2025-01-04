const PlantHeading = (props) => {
  const { plant } = props;

  return (
    <>
      <div className="flex justify-between mb-2 text-3xl text-emerald-800">
        <div className="font-playfair">{plant.name}</div>
        <div className="font-lato">${plant.price}</div>
      </div>
      <div className="text-slate-500 italic mb-4">{plant.botanical_name}</div>
    </>
  );
};

export default PlantHeading;
