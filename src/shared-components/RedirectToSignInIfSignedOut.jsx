import { useContext, useEffect } from "react";
import SessionContext from "contexts/SessionContext";
import { useNavigate } from "react-router-dom";
const RedirectToSignInIfSignedOut = (props) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username === null) {
      navigate("/");
    }
  }, [username, navigate]);

  return props.children;
};

export default RedirectToSignInIfSignedOut;
