import { useContext } from "react";
import SessionContext from "contexts/SessionContext";
const NavBar = () => {
    const {username} = useContext(SessionContext);
  return (
    <nav className="bg-emerald-700  flex justify-center">
      <div className="w-full max-w-4xl px-8 py-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          <div className="text-2xl font-playfair">Rica&apos;s Plants</div>
        </div>
        <div className="font-lato flex items-center text-emerald-100">
          <i className="fa-solid fa-user mr-2 text-xl"></i>
          {username}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
