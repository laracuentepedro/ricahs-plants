/* eslint-disable react/prop-types */
const FormContainer = (props) => {
  return (
    <div className="flex h-screen items-center bg-emerald-50">
      <div className="hidden lg:flex h-full relative">
        <img
          className=""
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
        <div className="absolute bg-emerald-700/30 top-0 right-0 h-full w-full"></div>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <img
          className="w-24 mb-4"
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
        />
        <h1 className="text-2xl mb-6 font-playfair font-medium text-emerald-700">
          Rica&apos;s Plants
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default FormContainer;
