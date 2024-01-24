import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../Utils/userSlice";
import { toast } from "react-hot-toast";
import { startLoading, stopLoading } from "../Utils/loadingSlice";

const Sidebar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogout = () => {
    dispatch(startLoading());
    localStorage.clear();
    dispatch(clearUser());
    toast.success("Logout Successful");
    dispatch(stopLoading());
    navigate("/");
  };

  return (
    <div id="sidebar">
      <h2>{user?.firstname}</h2>
      <h5>{user?.role}</h5>
      <nav>
        <NavLink to="/" activeClassName="active">
          <span className="material-symbols-outlined">home</span>Home
        </NavLink>
        {user?.role === "Admin" && (
          <>
            <NavLink to="/admin/doctors" activeClassName="active">
              <span className="material-symbols-outlined">clinical_notes</span> Doctors List
            </NavLink>
            <NavLink activeClassName="active">
              <span className="material-symbols-outlined">account_circle</span> User's List
            </NavLink>
            <NavLink onClick={() => userLogout()}>
              <span className="material-symbols-outlined">logout</span> Logout
            </NavLink>
          </>
        )}
        {user?.role === "User" && (
          <>
            <NavLink to="user/appointments" activeClassName="active">
              <span className="material-symbols-outlined">article</span> Appointments
            </NavLink>
            <NavLink to="user/applyDoctor" activeClassName="active">
              <span className="material-symbols-outlined">clinical_notes</span> Apply Doctor
            </NavLink>
            <NavLink activeClassName="active">
              <span className="material-symbols-outlined">account_circle</span> Account
            </NavLink>
            <NavLink onClick={() => userLogout()}>
              <span className="material-symbols-outlined">logout</span> Logout
            </NavLink>
          </>
        )}
        {user?.role === "Doctor" && (
          <>
            <NavLink to="doctor/appointments" activeClassName="active">
              <span className="material-symbols-outlined">article</span> Appointments
            </NavLink>
            <NavLink activeClassName="active">
              <span className="material-symbols-outlined">account_circle</span> Profile
            </NavLink>
            <NavLink onClick={() => userLogout()}>
              <span className="material-symbols-outlined">logout</span> Logout
            </NavLink>
          </>
        )}

        {!user && (
          <>
            <NavLink activeClassName="active">
              <span className="material-symbols-outlined">clinical_notes</span> Doctors
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
