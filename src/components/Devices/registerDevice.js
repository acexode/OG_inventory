import React, { useState, useReducer, Fragment } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom'
import {getOgid} from "../../helpers/userToken"

const registerReducer = (state, action) =>{
	// eslint-disable-next-line default-case
	switch(action.type){
		case 'inputChange' : {
			return {
				...state,
				[action.name]: action.value
			}
		}
		case 'error' : {
			return {
				...state,
				error: true
			}
		}
		case 'success' : {
			return {
				...state,
				itemName: "", 
                itemModel: "", 
                itemSerialNumber: "", 
                itemQuantity: "", 
                itemLocation: "", 
                createdById: "", 
                itemColor: "",
                itemType: "",
                error: false,
                success: false,
			}
		}
	}
}
const initalState = {
	itemName: "", 
	itemModel: "", 
	itemSerialNumber: "", 
	itemQuantity: "", 
    itemLocation: "",
    itemColor: "", 
    itemType: "",
	createdById: "", 
	error: false,
	success: false,
}
const RegisterDevice = () => {  
    let history = useHistory()
	let token = localStorage.getItem('token')
	console.log(token)
	const [state, dispatch] = useReducer(registerReducer,initalState)
	const {itemName,itemModel,itemLocation,itemQuantity, itemType, itemSerialNumber, itemColor, error, success} = state
	const onSubmit = async e =>{
		e.preventDefault();
		const newDevice =  {
		"itemName": itemName,
		"itemModel": itemModel,
		"itemLocation": itemLocation,
        "itemQuantity": itemQuantity,
        "itemColor": itemColor,
        "itemType": itemType,
        "itemSerialNumber": itemSerialNumber,
		"createdById": getOgid(),
	}
		console.log(newDevice)		
		try{
			let device = await axios.post('https://shielded-plains-57822.herokuapp.com/devices/',newDevice, {headers: {'Authorization': `Bearer ${token}`}})
			console.log(device.data)			
             dispatch({type: 'success'})
             history.push('/devices')
		}catch(err){
			console.log(err)
			dispatch({type: 'error'})
		}
	}
    
    
    return (
        <form onSubmit={onSubmit} id="wrapper" className="page-wrapper" style={{minHeight: "482px"}}>                
                  <div className="content container-fluid">
                  <div className="page-header">
						<div className="row align-items-center">
							<div className="col">
                            {success && <div className="alert  alert-success" style={{width:'100%'}}>Device Successfully Created</div> }
							{error &&  <div className="alert  alert-success" style={{width:'100%'}}>Unable to save device</div> }
								<h3 className="page-title">Devices</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Dashboard</a></li>
									<li className="breadcrumb-item assigned">Register devices</li>
								</ul>
							</div>							
						</div>
					</div>
                    <div className="row">
                        <div className="col-md-8">
                              
                                        
                                        <Fragment>
                                            <div className="card">
                                            <div className="row">
                                                <div className="col-md-12">
                                                {/* <div className="pro-edit ml-1 mr-5 mt-5 mb-5"><a onClick={handleAddFields} className="edit-icon ml-3" href="#"><i className="fa fa-plus"></i></a></div> 
                                                <div className="pro-edit ml-1 mr-5 mt-5 mb-5"><a onClick={() => handleRemoveFields(index)} className="edit-icon" href="#"><i className="fa fa-minus"></i></a></div> */}
                                                </div>
                                            </div>
                                            <div className="row p-3">
                                            <div className="col-md-6" >
                                                <div className="form-group">
                                                <label htmlFor="">Device Name</label>
                                                <input type="text"                                                    
                                                    value={itemName}
                                                    onChange={e => dispatch({type: 'inputChange', name: 'itemName',value: e.currentTarget.value})}                                        
                                                    className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="" />
                                                
                                            </div>
                                        </div>
                                    <div className="col-md-6" >
                                        <div className="form-group">
                                        <label htmlFor="">Model</label>
                                        <input type="text"
                                            value={itemModel}
                                            onChange={e => dispatch({type: 'inputChange', name: 'itemModel',value: e.currentTarget.value})} 
                                            className="form-control" name="model" id="" aria-describedby="helpId" placeholder="" />
                                        
                                    </div>
                                </div>
                                </div>
                                <div className="row p-3">
                                        <div className="col-md-6" >
                                            <div className="form-group">
                                            <label htmlFor="">Serial Number</label>
                                            <input type="text"
                                                value={itemSerialNumber}
                                                onChange={e => dispatch({type: 'inputChange', name: 'itemSerialNumber',value: e.currentTarget.value})} 
                                                className="form-control" name="serialNo" id="" aria-describedby="helpId" placeholder="" />
                                            
                                        </div>
                                </div>
                                    <div className="col-md-6" >
                                        <div className="form-group">
                                        <label htmlFor="">Color</label>
                                        <input type="text"
                                            value={itemColor}
                                            onChange={e => dispatch({type: 'inputChange', name: 'itemColor',value: e.currentTarget.value})} 
                                            className="form-control" name="color" id="" aria-describedby="helpId" placeholder="" />
                                        
                                    </div>
                                </div>
                                </div>
                                <div className="row p-3">
                                <div className="col-md-6 mt-2" >
                                    <div className="form-group">
                                        <label htmlFor="">Location</label>
                                        <input type="text"
                                        value={itemLocation}
                                        onChange={e => dispatch({type: 'inputChange', name: 'itemLocation',value: e.currentTarget.value})} 
                                        className="form-control" name="quantity" id="" aria-describedby="helpId" placeholder="" />
                                        
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                        <div className="form-group">
                                        <label htmlFor="">Quantity</label>
                                        <input type="number"
                                            value={itemQuantity}
                                            onChange={e => dispatch({type: 'inputChange', name: 'itemQuantity',value: parseInt(e.currentTarget.value)})} 
                                            className="form-control" name="quantity" id="" aria-describedby="helpId" placeholder="" />
                                        
                                    </div>
                                </div>
                                </div>
                                <div className="row p-3">
                                <div className="col-md-6 mt-2" >
                                    <div className="form-group">
                                        <label htmlFor="">Type</label>
                                        <select
                                        value={itemType}
                                        onChange={e => dispatch({type: 'inputChange', name: 'itemType',value: e.currentTarget.value})} 
                                        className="form-control" name="type" id="" placeholder="Please Select an option" aria-describedby="helpId">
                                            <option value="" disabled selected>Select your option</option>
                                            <option>single</option>
                                            <option>bulk</option>
                                        </select>
                                        
                                    </div>
                                </div>
                        
                            </div>                           
                        </div>
                                    
                            </Fragment>      
                            <div className="row">
                                    <div className="col-md-12">
                                    <div className=" float-right mr-3 mb-3">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                
                                        
                                        </div>
                                    </div>
                                </div> 
                        
       
                        </div>
                        {/* <div className="col-md-4">
                            <div className="card text-left">
                              <img className="card-img-top" src="holder.js/100px180/" alt="" />
                              {device.length >= 1 ?
                              (<>{device.map((e,i) =>(
                                  <div key={i} className="card-body">
                                <h4 className="card-title">Entry {i + 1}</h4>
                                <div className="list-group">
                                {e.name  ? 
                               ( <a href="#" className="list-group-item list-group-item-action active">
                                    Name : {e.name}
                                    <div className="pro-edit " style={{marginTop: '-1.5em'}}><a onClick={() => handleRemoveFields(i)} className="edit-icon" href="#"><i className="fa fa-minus"></i></a></div>
                                          
                                </a>) :
                                (<>
                                    
                                </>)
                            }
                                     <a href="#" className="list-group-item list-group-item-action">Model : {e.model}</a>
                                <a href="#" className="list-group-item list-group-item-action">SerialNo : {e.serialNo}</a>
                                <a href="#" className="list-group-item list-group-item-action">Color : {e.color}</a>
                                <a href="#" className="list-group-item list-group-item-action">Image : {e.image}</a>
                                <a href="#" className="list-group-item list-group-item-action">Quantity : {e.quantity}</a>
                                </div>
                               
                              </div>
                              ))}</>) : ''  }
                            </div>
                        </div> */}
                    </div>
           
        </div>
        </form>
    )
}

export default RegisterDevice
