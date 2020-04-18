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
                errMsg: action.msg,
				error: true
			}
		}
		case 'success' : {
			return {
				...state,
				ogId: "", 
                full_name: "", 
                itemOutDate: "", 
                itemQtyGiven: "", 
                error: false,
                success: true,
            }
		}
	}
}
const initalState = {
	ogId: "", 
	full_name: "", 
	itemOutDate: "", 
	itemQtyGiven: "1", 
    error: false,
    errMsg: '',
	success: false,
}

const UnassignedDevices = () => {
    const [devices, assignedDevices, unAssignedDevices] = useContext(DeviceContext)
    console.log(devices);
    console.log(assignedDevices);
    console.log(unAssignedDevices);
	const [employees, setemployees] = useState([])
    const allDevices = unAssignedDevices.map(device => Object.values(device).slice(1))
    const [selectDevice, setselectDevice] = useState([])
    const [assigned, setAssign] = useState(false)
    console.log(allDevices)
    console.log(selectDevice);
    let token = localStorage.getItem('token')
	// console.log(token)
	const [state, dispatch] = useReducer(registerReducer,initalState)
    const {ogId,full_name,itemOutDate,itemQtyGiven, error, success, errMsg} = state
    
	const assignDevice = async e =>{
		e.preventDefault();
		const assignInfo =  {
		ogId: ogId,
		full_name: full_name,
		itemOutDate: itemOutDate,
        itemQtyGiven: itemQtyGiven,
		givenById: getUserId(),
		itemId: selectDevice[8]
	}
		console.log(assignInfo)	
		console.log(selectDevice)	
		try{
			let device = await axios.post('https://shielded-plains-57822.herokuapp.com/assign/employee',assignInfo, {headers: {'Authorization': `Bearer ${token}`}})
			console.log(device.data)			
             dispatch({type: 'success'})
             setAssign(true)
             setTimeout(() =>{               
                $('#AssignDevice').modal('toggle')
                  window.location.reload(false)

            }, 1500)
		}catch(error){
			console.log(error.response)
			dispatch({type: 'error'})
		}
    }

    const deleteDevice = async e => {
        e.preventDefault();
        const deleteInfo = {
            itemId: selectDevice[8]
        }
        console.log(deleteInfo);
        try{
			let device = await axios.delete('https://shielded-plains-57822.herokuapp.com/devices', {headers: {'Authorization': `Bearer ${token}`}, data:deleteInfo})
			console.log(device)			
             dispatch({type: 'success'})
             setTimeout(() =>{               
                $('#exampleModal').modal('toggle')
                window.location.reload();
            }, 1500)
		}catch(error){
            console.log(error.response)
            setTimeout(() =>{               
                $('#exampleModal').modal('toggle')
                window.location.reload();
            }, 1500)
			dispatch({type: 'error'})
		}
    }
    
    

    useEffect(() => {
        let table = $('#example').DataTable( {
            data: allDevices,
            columns: [
                { title: "Name" },
                { title: "Model" },
                { title: "Location" },
                { title: "Quantity" },
				{ title: "Color" },
				{title: "Action"}	
            ],
            "bDestroy": true,
            "columnDefs": [ {
                    "targets": -1,
                    "data": null,
                    "defaultContent": `
                    <div class="dropdown">
					<a href="#" class="nav-link text-secondary pl-4 " data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#" id="showEdit" data-toggle="modal" data-target="#viewModal">View Details</a>
                    <a class="dropdown-item" href="#" id="showEdit" data-toggle="modal" data-target="#exampleModal">Delete</a>
            <a class="dropdown-item" href="#" id="showAssign" data-toggle="modal" data-target="#AssignDevice">Assign Device</a> 
                       
					</div>
				</div>
                    `
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
            <div className="modal fade" id="viewModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
                    <div className="modal-header">
                        View Device Details
                    </div>
                    <div className="modal-body">
                        <table className="table table-striped">
                        <tbody>
                            <tr>
                            <th scope="row">Name</th>
                            <td>{selectDevice[0]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Model</th>
                            <td>{selectDevice[1]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Location</th>
                            <td>{selectDevice[2]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Quantity</th>
                            <td>{selectDevice[3]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Color</th>
                            <td>{selectDevice[4]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Type</th>
                            <td>{selectDevice[5]}</td>
                            </tr>
                            <tr>
                            <th scope="row">Serial Number</th>
                            <td>{selectDevice[6]}</td>
                            </tr>
                        </tbody>
                        </table>
 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                    </div>
            </div>
    </div>
  </div>
  
            </div>


            
            <div className="row">                
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="AssignDeviceLabel" aria-hidden="true">
            <div className="modal-dialog">
            {success && <div className="alert  alert-success" style={{width:'100%'}}>Device Successfully deleted</div> }
				{error &&  <div className="alert  alert-danger" style={{width:'100%'}}>Unable to delete device</div> }
                <div className="modal-content">
                    <div className="modal-header">
                        Delete Device
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete <b>{selectDevice[0]}</b>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button onClick={deleteDevice} className="btn btn-danger btn-ok">Delete</button>
                    </div>
                </div>
            </div>
            </div>
            </div>


            <div className="row">                
            <div className="modal fade" id="AssignDevice" tabIndex="-1" role="dialog" aria-labelledby="AssignDeviceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            {success && <div className="alert  alert-success" style={{width:'100%'}}>Device Successfully assigned</div> }
				{error &&  <div className="alert  alert-danger" style={{width:'100%'}}>{errMsg}</div> }
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
												<div className="col-md-6">
													<div className="form-group">
														<label>Date Issued</label>														
                                                            <input className="form-control " type="date" value={itemOutDate}
                                                            onChange={e => dispatch({type: 'inputChange', name: 'itemOutDate',value: e.currentTarget.value})}  />
													</div>
												</div>
                                                {selectDevice[5] == "bulk" ?
                                                     <div className="col-md-6">
                                                     <div className="form-group">
                                                         <label>Quantity</label>														
                                                             <input className="form-control " type="number" value={itemQtyGiven}
                                                             onChange={e => dispatch({type: 'inputChange', name: 'itemQtyGiven',value: e.currentTarget.value})}  />
                                                     </div>
                                                 </div>
                                                 :  <div className="col-md-6">
                                                 <div className="form-group">
                                                     <label>Quantity</label>														
                                                         <input className="form-control " readOnly type="number" value={itemQtyGiven}
                                                         onChange={e => dispatch({type: 'inputChange', name: 'itemQtyGiven',value: e.currentTarget.value})}  />
                                                 </div>
                                             </div>
                                            
                                            } 
												
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

export default UnassignedDevices