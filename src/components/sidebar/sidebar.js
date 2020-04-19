import React, { Component } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { getRole } from "../../helpers/userToken";
const Sidebar = () => {
  const role = getRole();
  return (
    <div className="sidebar" id="sidebar">
      <div
        className="slimScrollDiv"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "648px",
        }}
      >
        <div
          className="sidebar-inner slimscroll"
          style={{ overflow: "hidden", width: "100%", height: "648px" }}
        >
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="" className="active subdrop">
                  <i className="la la-dashboard"></i> <span> Dashboard</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                {role === "admin" && <li>
                    <Link to="/admin-dashboard" className="active" href="#">
                      Admin Dashboard
                    </Link>
                  </li>}  
                  <li>
                    <Link to="/employee-dashboard">User Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Users</span>
              </li>
              <li className="submenu">
                <a href="" className="noti-dot">
                  <i className="la la-user"></i> <span> Users</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/all-employees">All  Users</Link>
                  </li>
                  {role === "admin" && (
                    <li>
                      <Link to="/register-employee">Register User</Link>
                    </li>
                  )}
                 
                </ul>
              </li>
              <li className="submenu">
                <a href="">
                  <i className="la la-laptop"></i> <span> Devices</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/devices">All Devices</Link>
                    <Link to="/assignments">Assignments</Link>
                    <Link to="/assignedevices">Assigned Devices</Link>
                    <Link to="/unassignedevices">Unassigned Devices</Link>
                  </li>
                  {role === "admin" && (
                    <li>
                      <Link to="/register-device">Register Device</Link>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="slimScrollBar"
          style={{
            background: "rgb(204, 204, 204)",
            width: "7px",
            position: "absolute",
            top: "275px",
            opacity: "0.4",
            display: "block",
            borderRadius: " 7px",
            zIndex: "99",
            right: "1px",
            height: "247.002px",
          }}
        ></div>
        <div
          className="slimScrollRail"
          style={{
            width: "7px",
            height: "100%",
            position: "absolute",
            top: "0px",
            display: "none",
            borderRadius: "7px",
            background: "rgb(51, 51, 51)",
            opacity: "0.2",
            zIndex: 90,
            right: "1px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
