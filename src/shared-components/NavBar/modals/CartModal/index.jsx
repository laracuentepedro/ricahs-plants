import SessionContext from "contexts/SessionContext";
import { useContext } from "react";
import { RemoveScroll } from "react-remove-scroll";

const CartModal = ({onClickClose}) => {
  const { username } = useContext(SessionContext);
  return (
    <RemoveScroll>
      <div className="z-50 fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-end">
        <div className="bg-white w-full max-w-md">
          <div
            className="
            flex justify-center py-8 bg-emerald-800 text-emerald-50 font-playfair text-2xl"
          >
            {username}&apos;s Cart
          </div>
          <button 
          onClick={onClickClose}
          className="absolute top-2 right-2 p-2 h-12 w-12 bg-emerald-600 rounded-full"><i className="fa-solid fa-xmark"></i></button>
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
