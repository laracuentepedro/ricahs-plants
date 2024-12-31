import SessionContext from "contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

const RedirectToPlantsIfSignedIn = (props) => {
    const {username} = useContext(SessionContext);
    const navigate = useNavigate()
    useEffect(()=>{
        if (username) {
            navigate('/plants');
        }
    }, [username, navigate])
    return (
        props.children
    )
} 

export default RedirectToPlantsIfSignedIn;