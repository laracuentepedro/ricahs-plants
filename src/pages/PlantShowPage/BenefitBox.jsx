import clsx from "clsx";

const BenefitBox = (props) => {
  return (
    <div className="flex flex-col items-center px-2 py-4 flex-1">
      <i className={clsx(props.icon, 'text-2xl text-emerald-700')}></i>
      <div className="text-slate-700 mt-1">{props.title}</div>
      <div className="text-sm text-center text-slate-500 mt-2">{props.description}</div>
    </div>
  );
};

export default BenefitBox;
