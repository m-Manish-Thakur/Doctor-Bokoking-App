import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../Utils/userSlice";

const Sidebar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userLogout = () => {
    localStorage.clear();
    dispatch(clearUser());
  };

  return (
    <div id="sidebar">
      <h2>{user?.firstname}</h2>
      <h5>{user?.role}</h5>
      <nav>
        <Link to="/" className="active">
          <span className="material-symbols-outlined">home</span>Home
        </Link>
        <a href="#">
          <span className="material-symbols-outlined">article</span> Appointments
        </a>
        <a href="#">
          <span className="material-symbols-outlined">clinical_notes</span> Apply Doctor
        </a>
        <a href="#">
          <span className="material-symbols-outlined">account_circle</span> Account
        </a>
        <a href="#" onClick={() => userLogout()}>
          <span className="material-symbols-outlined">logout</span> Logout
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
