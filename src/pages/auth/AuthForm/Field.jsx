/* eslint-disable react/prop-types */
const Field = (props) => {
  const { field, onChange, value } = props;

  return (
    <div className="font-lato flex flex-col w-full text-slate-400">
      <label htmlFor={field.label}>{field.label}</label>
      <input
        className="border border-slate-200 bg-slate-50 py-1 px-2 my-4 rounded-lg focus:outline-emerald-300"
        value={value}
        onChange={onChange}
        type={field.type}
        id={field.label}
      />
    </div>
  );
};

export default Field;