import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../Utils/userSlice";
import { toast } from "react-hot-toast";
import { startLoading, stopLoading } from "../Utils/loadingSlice";

const Sidebar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(startLoading());
    localStorage.clear();
    dispatch(clearUser());
    toast.success("Logout Successful");
    dispatch(stopLoading());
  };

  return (
    <div id="sidebar">
      <h2>{user?.firstname}</h2>
      <h5>{user?.role}</h5>
      <nav>
        <Link to="/" className="active">
          <span className="material-symbols-outlined">home</span>Home
        </Link>
        {user?.role === "Admin" && (
          <>
            <a href="#">
              <span className="material-symbols-outlined">clinical_notes</span> Doctor's List
            </a>
            <a href="#">
              <span className="material-symbols-outlined">account_circle</span> User's List
            </a>
            <a href="#" onClick={() => userLogout()}>
              <span className="material-symbols-outlined">logout</span> Logout
            </a>
          </>
        )}
        {user?.role === "User" && (
          <>
            <Link to="user/appointments">
              <span className="material-symbols-outlined">article</span> Appointments
            </Link>
            <Link to="user/applyDoctor">
              <span className="material-symbols-outlined">clinical_notes</span> Apply Doctor
            </Link>
            <a href="#">
              <span className="material-symbols-outlined">account_circle</span> Account
            </a>
            <a href="#" onClick={() => userLogout()}>
              <span className="material-symbols-outlined">logout</span> Logout
            </a>
          </>
        )}
        {!user && (
          <>
            <a href="#">
              <span className="material-symbols-outlined">clinical_notes</span> Doctors
            </a>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
