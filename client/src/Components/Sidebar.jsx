import React from "react";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <h2>Manish</h2>
      <h5>user</h5>
      <nav>
        <a href="#" className="active">
          <span className="material-symbols-outlined">home</span>Home
        </a>
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
