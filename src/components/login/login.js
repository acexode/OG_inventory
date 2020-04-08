import React, { Component } from 'react';
import logo from '../../assets/outsource-logo-square.png';
import './login.css'
import axios from "axios";


const Login  = () =>{

  return (
      <div className="account-page">
          <div className="main-wrapper">
    <div className="account-content">
    
      <div className="container">			
      
        <div className="account-logo">
          <a href="index.html"><img src={logo} alt="Outsource Global Technologies" /></a>
        </div>
        
        
        <div className="account-box">
          <div className="account-wrapper">
            <h3 className="account-title">Login</h3>
            <p className="account-subtitle">Access to our dashboard</p>
            
            
            <form action="index.html">
              <div className="form-group">
                <label>Email Address</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Password</label>
                  </div>
                  <div className="col-auto">
                    <a className="text-muted" href="forgot-password.html">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" type="submit">Login</button>
              </div>								
            </form>
          
            
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
  )
}

export default Login