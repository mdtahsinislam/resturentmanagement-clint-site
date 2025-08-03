// src/routes/PrivateRoute.jsx
// import { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider'; // adjust the path

// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router";
// import { AuthContext } from "../contexts/AuthContext";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (user) {
//     return children;
//   }

//   return <Navigate to="/login" state={{ from: location }} replace />;
// };

// export default PrivateRoute;



import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return children;
  }

  // Save current route user tried to access
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

