import { useContext, useState } from "react";
import SessionContext from "contexts/SessionContext";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const { username, signOut } = useContext(SessionContext);
  return (
    <nav className="bg-emerald-700  flex justify-center">
      <div className="w-full max-w-4xl px-4 py-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/plants">
            <img
              className="w-12 mr-2"
              src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            />
          </Link>
          <div className="text-2xl font-playfair">Rica&apos;s Plants</div>
        </div>
        <div className="flex gap-8">
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="font-lato flex items-center text-emerald-100"
            >
              <i className="fa-solid fa-user mr-2 text-xl"></i>
              {username}
            </button>
            {userMenuOpen && (
              <div className="absolute w-28 flex items-center justify-center py-2 right-0 top-8 border bg-white text-slate-500 text-sm  shadow-sm rounded-lg">
                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    signOut();
                  }}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                  sign out
                </button>
              </div>
            )}
          </div>
          <div
            className="font-lato flex items-center text-emerald-100"
           >
            <button
              onClick={()=>setCartModalOpen(true)}
            >
              <i className="fa-solid fa-cart-shopping mr-2"></i>
              cart
            </button>
          </div>
          {cartModalOpen && <CartModal/>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
