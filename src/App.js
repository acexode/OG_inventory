import React from 'react';
import './App.css';
import Login from './components/login/login';

import {Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import adminDashboard from './components/dashboard/admin-dashboard';
import employeeDashboard from './components/dashboard/employee-dashboard';
import Employees from './components/employees/employees';
import adminEmployees from './components/employees/adminEmployee';
import RegisterEmployee from './components/employees/registerEmployee';
import employeeSetting from './components/employees/employeeSetting';
import Devices from './components/Devices/devices';
import RegisterDevice from './components/Devices/registerDevice';


const Main = withRouter(({ location }) => {
  return (
    <>
      {location.pathname != "/login" && (
        <>
          <Header />        
          <Sidebar />
          
        </>
      )}
      <Switch>
        <Route exact path="/" component={adminDashboard} />
        <Route exact path="/admin-dashboard" component={adminDashboard} />
        <Route exact path="/employee-dashboard" component={employeeDashboard} />
        <Route exact path="/register-device" component={RegisterDevice} />
        <Route exact path="/devices" component={Devices} />
        <Route path="/all-employees" component={Employees} />
        <Route path="/admin" component={adminEmployees} />       
        <Route path="/register-employee" component={RegisterEmployee} />       
        <Route path="/employee-setting" component={employeeSetting} />       
        <Route path="/login" component={Login} />
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
