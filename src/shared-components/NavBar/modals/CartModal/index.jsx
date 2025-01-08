import SessionContext from "contexts/SessionContext";
import { useCallback, useContext } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCart } from "services/cart";
import Spinner from "shared-components/Spinner";
import CartItem from "./CartItem";
import ModalWrapper from "./ModalWrapper";

const CartModal = ({ onClickClose }) => {
  const { username } = useContext(SessionContext);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await getCart();
    const data = await response.json();
    console.log(data);
    setCart(data);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalItems = 0;
  let subtotal = 0;
  for (let i = 0; i < cart.length; i += 1) {
    totalItems += cart[i].quantity;
    subtotal += cart[i].quantity * cart[i].price_per_unit;
  }

  return (
      <div className="bg-emerald-50 w-full max-w-lg flex flex-col h-screen">
        <div
          className="
            flex justify-center py-8 bg-emerald-800 text-emerald-50 font-playfair text-2xl"
        >
          {username}&apos;s Cart
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex-1 overflow-y-scroll">
              {cart.map((item, idx) => (
                <>
                  {idx > 0 && <div className="h-px bg-slate-200 mx-4"></div>}
                  <CartItem key={item.id} item={item} fetchCart={fetchCart} />
                </>
              ))}
            </div>
            <div className="flex flex-col text-slate-500 font-lato pb-8 border-t p-4 border-slate-200">
              <div className="flex justify-between">
                <div>{totalItems} items</div>
                <div>subtotal: {subtotal}</div>
              </div>
              <button
                onClick={() =>
                  alert("Checkout functionality is being developed")
                }
                className="bg-emerald-700 text-white py-2 rounded-full mt-4 flex items-center justify-center"
              >
                Checkout <i className="ml-2 fa-solid fa-right-long"></i>
              </button>
            </div>
          </>
        )}
      </div>
  );
};
CartModal.propTypes = {
  onClickClose: PropTypes.func.isRequired,
};

export default CartModal;
