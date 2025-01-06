import { RemoveScroll } from "react-remove-scroll";
const CartModal = () => {
  return (
    <RemoveScroll>
      <div className="z-50 fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-end">
        <div className="bg-white p-12"></div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
