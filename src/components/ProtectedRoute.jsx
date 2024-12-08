/* eslint-disable react/prop-types */
import {} from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const PrivateRoute = ({ children }) => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
