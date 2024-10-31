import { useContext } from "react"
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import { AuthContext } from "../AuthoProvider";


export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
  }