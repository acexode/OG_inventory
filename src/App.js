import React from 'react';
import './App.css';
import Login from './components/login/login';

import {Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import AdminDashboard from './components/dashboard/admin-dashboard';
import EmployeeDashboard from './components/dashboard/employee-dashboard';
import Employees from './components/employees/employees';
import adminEmployees from './components/employees/adminEmployee';
import RegisterEmployee from './components/employees/registerEmployee';
import employeeSetting from './components/employees/employeeSetting';
import Devices from './components/Devices/devices';
import AssignedDevices from './components/Devices/assignedevices';
import UnassignedDevices from './components/Devices/unassignedevices';
import RegisterDevice from './components/Devices/registerDevice';
import AuthGuard from './components/login/AuthGuard';
import {EmployeeProvider} from  "./components/EmployeeContext/EmployeeContext"
import {DeviceProvider} from  "./components/DeviceContext/DeviceContext"
import { getUser, getToken } from './helpers/userToken';
import Assignments from './components/Devices/assignments';


const Main = withRouter(({ location }) => {
  let token = getToken()
  return (
    <>
      {(location.pathname != "/login" && token) && (
        <>
          <Header />        
          <Sidebar />
          
        </>
      )}
      <Switch>  
        <DeviceProvider>
          <EmployeeProvider>
          <AuthGuard exact path="/" component={AdminDashboard} />     
          <AuthGuard exact path="/admin-dashboard" component={AdminDashboard} />
          <AuthGuard exact path="/employee-dashboard" component={EmployeeDashboard} />
          <AuthGuard exact path="/register-device" component={RegisterDevice} />
          <AuthGuard exact path="/devices" component={Devices} />
          <AuthGuard exact path="/assignedevices" component={AssignedDevices} />
          <AuthGuard exact path="/assignments" component={Assignments} />
          <AuthGuard exact path="/unassignedevices" component={UnassignedDevices} />
          <AuthGuard path="/all-employees" component={Employees} />
          <AuthGuard path="/admin" component={adminEmployees} />       
          <AuthGuard path="/register-employee" component={RegisterEmployee} />       
          <AuthGuard path="/employee-setting" component={employeeSetting} />       
          <Route path="/login" component={Login} />
          </EmployeeProvider>

        </DeviceProvider>
        
      </Switch>
    </>
  );
});
function App() {
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
