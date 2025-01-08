import { RemoveScroll } from "react-remove-scroll";
import PropTypes from 'prop-types';
import { useRef } from "react";
import { motion } from "framer-motion";

const ModalWrapper = (props) => {
  const { isOpen, children, onClickClose } = props;
  const backgroundRef = useRef(null);
  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div 
      ref={backgroundRef}
      onClick={(e)=>{
        if (e.target === backgroundRef.current) {
          onClickClose()
        }
      }}
      className="z-50 fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-end items-start">
      <motion.button
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay:0.5, duration:0.5}}
          onClick={onClickClose}
          className="z-50 absolute top-2 right-2 p-2 h-12 w-12 bg-emerald-600 rounded-full"
        >
          <i className="fa-solid fa-xmark"></i>
        </motion.button>
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
