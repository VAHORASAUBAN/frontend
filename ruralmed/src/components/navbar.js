// NavBar.js
import React from 'react';
import '../App.css'; 

function NavBar() {
  return (
    <div className="leftcontainer">
      <div className="navbar">
        <div className="upper">
          <div className="logo">
            <p>RURALMED</p>
          </div>
          <div className="menus">
            <ul>
              <li>Dashboard</li>
              <li>Appointments</li>
              <li>Patients</li>
            </ul>
          </div>
        </div>
        <div className="lower">
          <ul>
            <li className="settings-menu">
              Settings
              <ul className="settings-dropdown">
                <li>Manage Profile</li>
                <li>Reset Password</li>
                <li>Notifications Settings</li>
              </ul>
            </li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
