import React, { createContext,useEffect, useState } from "react";
import {getToken} from "../../helpers/userToken"
import axios from "axios"

export const DeviceContext = createContext();

export const DeviceProvider = (props) => {
  const token = getToken()
const [devices, setDevices] = useState([])
const [assignedDevices, setAssignedDevices] = useState([])
const [assignments, setassignments] = useState([])
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
  axios.get("https://shielded-plains-57822.herokuapp.com/assign/assigned_devices",{headers: {'Authorization': `Bearer ${token}`}})
  .then(res => {
    console.log(res.data)    
    setAssignedDevices(res.data.assigned_devices);
    fetchDevices()
  }
    )
 }
const fetchAssigments =() =>{
  axios.get("https://shielded-plains-57822.herokuapp.com/assign/all",{headers: {'Authorization': `Bearer ${token}`}})
  .then(res => {
    console.log(res.data)    
    setassignments(res.data.assigned_devices);
    fetchDevices()
  }
    )
 }

 const fetchUnassignedDevices =() =>{
  axios.get("https://shielded-plains-57822.herokuapp.com/assign/unassigned",{headers: {'Authorization': `Bearer ${token}`}})
  .then(res => {
    console.log(res.data)
    setUnassignedDevices(res.data.unassigned_devices);
    fetchDevices()
  }
    )
 }
useEffect(()=>{
  fetchDevices()
  fetchAssignedDevices()
  fetchUnassignedDevices()
  fetchAssigments()
},[])



  return <DeviceContext.Provider value={[devices, assignedDevices, unAssignedDevices,assignments]}>{props.children}</DeviceContext.Provider>;
};
// 