import React, { createContext,useEffect, useState } from "react";
import {getToken} from "../../helpers/userToken"
import axios from "axios"

export const DeviceContext = createContext();

export const DeviceProvider = (props) => {
  const token = getToken()
const [devices, setDevices] = useState([])
const [assignedDevices, setAssignedDevices] = useState([])
const [unAssignedDevices, setUnassignedDevices] = useState([])

const fetchDevices =() =>{
 axios.get("https://shielded-plains-57822.herokuapp.com/devices",{headers: {'Authorization': `Bearer ${token}`}})
 .then(res => {
   console.log(res.data)
   setDevices(res.data.devices);
 }
   )
}

const fetchAssignedDevices =() =>{
  axios.get("https://shielded-plains-57822.herokuapp.com/assign/all",{headers: {'Authorization': `Bearer ${token}`}})
  .then(res => {
    console.log(res.data)
    setAssignedDevices(res.data.assigned_devices);
  }
    )
 }

 const fetchUnassignedDevices =() =>{
  axios.get("https://shielded-plains-57822.herokuapp.com/assign/unassigned",{headers: {'Authorization': `Bearer ${token}`}})
  .then(res => {
    console.log(res.data)
    setUnassignedDevices(res.data.unassigned_devices);
  }
    )
 }
useEffect(()=>{
  fetchDevices()
  fetchAssignedDevices()
  fetchUnassignedDevices()
},[])



  return <DeviceContext.Provider value={[devices, assignedDevices, unAssignedDevices]}>{props.children}</DeviceContext.Provider>;
};
// 