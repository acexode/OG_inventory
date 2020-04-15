import React, { createContext,useEffect, useState } from "react";
import {getToken} from "../../helpers/userToken"
import axios from "axios"

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const token = getToken()
const [users, setUsers] = useState([])
useEffect(()=>{
  fetchUsers()
},[])

 const fetchUsers =() =>{
  axios.get("https://shielded-plains-57822.herokuapp.com/users/",{headers: {'Authorization': `Bearer ${token}`}})
  .then(res => {
    console.log(res.data)
    setUsers(res.data)
  }
    )
 }
 


  return <EmployeeContext.Provider value={[users]}>{props.children}</EmployeeContext.Provider>;
};
// 