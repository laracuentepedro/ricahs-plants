import SessionContext from "contexts/SessionContext";
import { useContext } from "react";
import PropTypes from 'prop-types';

const MobileModalMenu = (props) => {
  const { onCartOpenClick } = props;
  const { username, signOut } = useContext(SessionContext);
  return (
    <div className="bg-emerald-800 pt-12 pr-16 pb-8 rounded-bl-lg flex flex-col items-start text-lg">
      <div className="px-6 py-4">
        <i className="fa-solid fa-user mr-1"></i>
        {username}
      </div>
      <button onClick={signOut} className="px-6 py-4">
        <i className="fa-solid fa-right-from-bracket mr-1"></i>sign out
      </button>
      <button
        onClick={onCartOpenClick}
        className="px-6 py-4"
      >
        <i className="fa-solid fa-shopping-cart mr-1"></i>cart
      </button>
    </div>
  );
};
MobileModalMenu.propTypes = {
  onCartOpenClick: PropTypes.func.isRequired
};

export default MobileModalMenu;
