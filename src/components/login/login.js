import React, { Component } from 'react';
import logo from '../../assets/outsource-logo-square.png';
import './login.css'
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router-dom';

const Login  = () =>{
  let history = useHistory()
  
  return (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        axios.post(`https://shielded-plains-57822.herokuapp.com/users/login`,  values )
        .then(res => {
          console.log(res);
          console.log(res.data);
          let user = {username: res.data.user.username, id: res.data.user._id}
          localStorage.setItem("token", res.data.token)
          localStorage.setItem('user', JSON.stringify(user))
            // history.push('/chat',{user: res.data.user})
        })	
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()        
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")        
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
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
            
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email </label>
                <input 
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
                className="form-control" type="text" />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Password</label>
                  </div>
                  <div className="col-auto">
                    <a className="text-muted" href="#">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
                className="form-control" type="password" />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" disabled={isSubmitting} type="submit">Login</button>
              </div>								
            </form>
          
            
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
  )
      }}
      </Formik>
      )
}

export default Login