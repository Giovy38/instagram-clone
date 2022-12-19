import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../store/action/handleAuth";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch(logout());

  useEffect(() => {
    dispatch(logout());
  });
  return <Navigate replace to="/signup" />;
};

export default Logout;
