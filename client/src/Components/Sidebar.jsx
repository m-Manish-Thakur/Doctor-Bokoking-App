import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <h2>Manish</h2>
      <h5>user</h5>
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
        <a href="#">
          <span className="material-symbols-outlined">logout</span> Logout
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
