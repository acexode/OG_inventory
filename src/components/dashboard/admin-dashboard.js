import React,{useContext} from "react";
import {EmployeeContext} from "../EmployeeContext/EmployeeContext"
import {DeviceContext} from "../DeviceContext/DeviceContext"

const AdminDashboard = () => {
  const [users] = useContext(EmployeeContext)
  const[devices, assignedDevices, unAssignedDevices] = useContext(DeviceContext)
  return (
    <div className="page-wrapper" style={{ minHeight: "529px" }}>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Welcome Admin!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-laptop"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{devices.length}</h3>
                  <span>Devices</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-hashtag"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{assignedDevices.length}</h3>
                  <span>Assigned Devices</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-hashtag"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{unAssignedDevices.length}</h3>
                  <span>Unassigned Devices</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-user"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{users.length}</h3>
                  <span>Employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
