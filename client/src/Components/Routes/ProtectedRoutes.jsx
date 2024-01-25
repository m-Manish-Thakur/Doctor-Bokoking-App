import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return user.user ? <div id="body">{children}</div> : <Navigate to={"/signin"} />;
};

export default ProtectedRoute;
