/* eslint-disable react/prop-types */
import {} from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom"; // if using React Router

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
