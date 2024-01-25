import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../Utils/userSlice";
import { toast } from "react-hot-toast";

const Sidebar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userLogout = () => {
    // Redirect to the home page
    window.location.href = "/";
    localStorage.clear();
    dispatch(clearUser());
    toast.success("Logout Successful");
  };

  return (
    <div id="sidebar">
      <h2>{user?.firstname}</h2>
      <h5>{user?.role}</h5>
      <nav>
        <NavLink to="/" activeClassName="active">
          <span className="material-symbols-outlined">home</span>Home
        </NavLink>
        {!user && (
          <>
            <NavLink to="/user/doctors-list" activeClassName="active">
              <span className="material-symbols-outlined">clinical_notes</span> Doctors
            </NavLink>
            <NavLink to="user/appointments" activeClassName="active">
              <span className="material-symbols-outlined">article</span> Appointments
            </NavLink>
          </>
        )}
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
            <NavLink to="/user/doctors-list" activeClassName="active">
              <span class="material-symbols-outlined">stethoscope</span> Doctors
            </NavLink>
            <NavLink to="/user/appointments" activeClassName="active">
              <span className="material-symbols-outlined">article</span> Appointments
            </NavLink>
            <NavLink to="/user/applyDoctor" activeClassName="active">
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
      </nav>
    </div>
  );
};

export default Sidebar;
