import { RemoveScroll } from "react-remove-scroll";
import PropTypes from 'prop-types';

const ModalWrapper = (props) => {
  const { isOpen, children, onClickClose } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div className="z-50 fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-end">
      <button
          onClick={onClickClose}
          className="absolute top-2 right-2 p-2 h-12 w-12 bg-emerald-600 rounded-full"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};

ModalWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClickClose: PropTypes.func.isRequired
};

export default ModalWrapper;
