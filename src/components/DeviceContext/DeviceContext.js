import React, { createContext,useEffect, useState } from "react";
import {getToken} from "../../helpers/userToken"
import axios from "axios"

export const DeviceContext = createContext();

export const DeviceProvider = (props) => {
  const token = getToken()
const [devices, setDevices] = useState([])
const fetchDevices =() =>{
 axios.get("https://shielded-plains-57822.herokuapp.com/devices",{headers: {'Authorization': `Bearer ${token}`}})
 .then(res => {
   console.log(res.data)
   setDevices(res.data.devices);
 }
   )
}
useEffect(()=>{
  fetchDevices()
},[])



  return <DeviceContext.Provider value={[devices]}>{props.children}</DeviceContext.Provider>;
};
// 