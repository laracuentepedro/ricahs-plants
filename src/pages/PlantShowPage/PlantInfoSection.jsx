import PlantHeading from "./PlantHeading";
import BenefitBox from "./BenefitBox";

const PlantInfoSection = (props) => {
  const { plant } = props;
  return (
    <div className="flex flex-col md:flex-row pt-24 px-4">
      <div className="md:hidden">
        <PlantHeading plant={plant} />
      </div>
      <div className="flex-1">
        <img className="rounded-lg" src={plant.images[0].src} />
        <div className="flex mt-4 mb-8">
            <BenefitBox
                icon="fa-regular fa-circle-check"
                title="Guaranteed Healthy"
                description="Guaranteed to arrive healthy or your money back"
            />
            <div className="w-px bg-slate-300 mx-4"></div>
            <BenefitBox
                icon="fa-solid fa-truck-fast"
                title="Free Shipping"
                description="Get free ground shippinng on orders of $50 or more"
            />
        </div>
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
