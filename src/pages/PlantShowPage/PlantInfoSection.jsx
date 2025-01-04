import PlantHeading from "./PlantHeading";

const PlantInfoSection = (props) => {
  const { plant } = props;
  return (
    <div className="flex flex-col md:flex-row pt-24 px-4">
      <div className="md:hidden">
        <PlantHeading plant={plant} />
      </div>
      <div className="flex-1">
        <img className="rounded-lg" src={plant.images[0].src} />
        <div>todo!</div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>
        <p className="font-lato leading-relaxed text-slate-600">
          {plant.description}
        </p>
      </div>
    </div>
  );
};

export default PlantInfoSection;
