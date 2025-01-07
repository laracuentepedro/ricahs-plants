import SessionContext from "contexts/SessionContext";
import { useContext } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { useState, useEffect } from "react";
import { getCart } from "services/cart";
import Spinner from "shared-components/Spinner";

const CartModal = ({ onClickClose }) => {
  const { username } = useContext(SessionContext);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      const response = await getCart();
      const data = await response.json();
      setCart(data);
      setIsLoading(false);
    };
    fetchCart();
  }, []);
  return (
    <RemoveScroll>
      <div className="z-50 fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-end">
        <div className="bg-white w-full max-w-md text-black">
          <div
            className="
            flex justify-center py-8 bg-emerald-800 text-emerald-50 font-playfair text-2xl"
          >
            {username}&apos;s Cart
          </div>
          <button
            onClick={onClickClose}
            className="absolute top-2 right-2 p-2 h-12 w-12 bg-emerald-600 rounded-full"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          {isLoading ? <Spinner/> : 'cart items here'}
          
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
