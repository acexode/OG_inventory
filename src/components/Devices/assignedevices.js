import React, { useEffect,useState,useContext, useReducer } from 'react'
import {DeviceContext}  from '../DeviceContext/DeviceContext'
import axios from "axios";
import {getUserId} from "../../helpers/userToken"
import { Link } from 'react-router-dom';
const $ = window.$;
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
				ogId: "", 
                full_name: "", 
                error: false,
                success: false,
            }
		}
	}
}
const initalState = {
	ogId: "", 
	full_name: "", 
	error: false,
	success: false,
}

const AssignedDevices = () => {
    const [devices, assignedDevices, unAssignedDevices] = useContext(DeviceContext)
    console.log(assignedDevices);
	const [employees, setemployees] = useState([])
    const allDevices = assignedDevices.map(user => Object.values(user).slice(1))
    const [selectDevice, setselectDevice] = useState([])
    const [assigned, setAssign] = useState(false)
    console.log(allDevices)
    console.log(selectDevice);
    let token = localStorage.getItem('token')
	// console.log(token)
	const [state, dispatch] = useReducer(registerReducer,initalState)
	const {ogId,full_name,error, success} = state
	const assignDevice = async e =>{
		e.preventDefault();
		const assignInfo =  {
		ogId: ogId,
		full_name: full_name,
		assignId: selectDevice[0]
	}
		console.log(assignInfo)	
		console.log(selectDevice)	
		try{
			let device = await axios.post('https://shielded-plains-57822.herokuapp.com/assign//modify',assignInfo, {headers: {'Authorization': `Bearer ${token}`}})
			console.log(device.data)			
             dispatch({type: 'success'})
             window.location.reload()
		}catch(error){
			console.log(error.response)
			dispatch({type: 'error'})
		}
    }

    const deleteDevice = async e => {
        e.preventDefault();
        const deleteInfo = {
            assignId: selectDevice[0]
        }
        console.log(deleteInfo);
        try{
			let device = await axios.post('https://shielded-plains-57822.herokuapp.com/assign/undo', deleteInfo, {headers: {'Authorization': `Bearer ${token}`}})
			console.log(device)			
             dispatch({type: 'success'})
             window.location.reload();
		}catch(error){
			console.log(error.response)
			dispatch({type: 'error'})
		}
    }
    
    

    useEffect(() => {
        let table = $('#example').DataTable( {
            data: allDevices,
            columns: [
                { title: "Item id" },
                { title: "OGID" },
                { title: "Employee Name" },
                { title: "Date Assigned" },
				{ title: "Quantity" },
				{title: "Action"}	
            ],
            "bDestroy": true,
            "columnDefs": [ {
                    "targets": -1,
                    "data": null,
                    "defaultContent": `<div class="dropdown">
					<a href="#" class="nav-link text-secondary pl-4 " data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#" id="showEdit" data-toggle="modal" data-target="#viewModal">View Details</a>
                    <a class="dropdown-item" href="#" id="showEdit" data-toggle="modal" data-target="#exampleModal">Delete</a>
            <a class="dropdown-item" href="#" id="showAssign" data-toggle="modal" data-target="#AssignDevice">Reassign</a> 
                       
					</div>
				</div>`
            } ], 
            
        } )    
      
        console.log(table)
        $('#example tbody #showEdit').on( 'click', function () {               
			var data = table.row( $(this).parents('tr') ).data();
			console.log(table.row( $(this).parents('tr') ).index())
			console.log(data)
            setselectDevice(data)
                            
        } );
        $('#example tbody #showAssign').on( 'click', function () {              
			var data = table.row( $(this).parents('tr') ).data();
			console.log(table.row( $(this).parents('tr') ).index())
			console.log(data)
            setselectDevice(data)
        } );
                    
              
          
       
    }, [allDevices])
    return (
        <div id="wrapper" className="page-wrapper" style={{minHeight: "482px"}} >
        <div className="content container-fluid">
        <div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Devices</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item assigned">Devices</li>
								</ul>
							</div>
                            <div className="col-auto float-right ml-auto">
                              
							<Link to="/register-device" className="btn add-btn"><i className="fa fa-plus"></i> Add Devices</Link>
        
 							</div>
						</div>
					</div>
            <div className="row">
                    <div className="col-md-12" >
                    <div className="row"></div>
                    <table id="example" className="display  table table-striped custom-table mb-0 datatable dataTable no-footer mt-4" width="100%"></table>
                                  
                <div className="row mt-5"></div>
                </div>
            </div>

            <div className="row">
            <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
                    <div class="modal-header">
                        View Device Details
                    </div>
                    <div class="modal-body">
                        <table class="table table-striped">
                        <tbody>
                            <tr>
                            <th scope="row">ItemId</th>
                            <td>{selectDevice[0]}</td>
                            </tr>
                            <tr>
                            <th scope="row">OGID</th>
                            <td>{selectDevice[1]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Employee Name</th>
                            <td>{selectDevice[2]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Date Assigned</th>
                            <td>{selectDevice[3]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Quantity</th>
                            <td>{selectDevice[4]}</td>
                            </tr>
                        </tbody>
                        </table>
 
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    </div>
            </div>
    </div>
  </div>
  
            </div>


            
            <div className="row">                
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="AssignDeviceLabel" aria-hidden="true">
            <div class="modal-dialog">
            {success && <div className="alert  alert-success" style={{width:'100%'}}>Device Successfully Reassign</div> }
				{error &&  <div className="alert  alert-danger" style={{width:'100%'}}>Unable to reassign device</div> }
                <div class="modal-content">
                    <div class="modal-header">
                        Delete Device
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete <b>{selectDevice[0]}</b>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button onClick={deleteDevice} class="btn btn-danger btn-ok">Delete</button>
                    </div>
                </div>
            </div>
            </div>
            </div>


            <div className="row">                
            <div className="modal fade" id="AssignDevice" tabindex="-1" role="dialog" aria-labelledby="AssignDeviceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            {success && <div className="alert  alert-success" style={{width:'100%'}}>Device Successfully assigned</div> }
				{error &&  <div className="alert  alert-danger" style={{width:'100%'}}>Unable to assign device</div> }
                <div className="modal-content">               
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                <form onSubmit={assignDevice} style={{marginTop:"30px" }}>
                    <h5 className="text-center" id="exampleModalLabel mb-4">Assign Device</h5>                   
									<div className="row mt-5">
										<div className="col-md-12">
										
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label>Employee OGID</label>
                                                        <input type="text" className="form-control" value={ogId}
                                                        onChange={e => dispatch({type: 'inputChange', name: 'ogId',value: e.currentTarget.value})}  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Employee FullName</label>
                                                        <input type="text" className="form-control" value={full_name}
                                                        onChange={e => dispatch({type: 'inputChange', name: 'full_name',value: e.currentTarget.value})}  />
													</div>
												</div>												
												
											</div>
										</div>
									</div>
									
									<div className="submit-section">
										<button className="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
                </div>               
                </div>
            </div>
            </div>
            </div>
       
        </div>
    </div>
    )
}

export default AssignedDevices