import React from "react";
import { Route, Navigate, useLocation,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/login";
  const login = loggedInUser.email || sessionStorage.getItem("token");
  
  if(login){    
      navigate(from,{replace: true});
      return children;
  }
  if(!login){
      return <Navigate to="/login" state={{ from: location }} />;
  }
 
 
  return <Navigate to ="/" state ={{from:location}}/>;
};

export default PrivateRoute;
