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
                itemOutDate: "", 
                itemQtyGiven: "", 
                error: false,
                success: false,
            }
		}
	}
}
const initalState = {
	ogId: "", 
	full_name: "", 
	itemOutDate: "", 
	itemQtyGiven: "", 
	error: false,
	success: false,
}

const  Devices = () => {
    const [devices] = useContext(DeviceContext)
    console.log(devices);
	const [employees, setemployees] = useState([])
    const allDevices = devices.map(user => Object.values(user).slice(1))
    const [selectDevice, setselectDevice] = useState([])
    console.log(allDevices)
    console.log(selectDevice);
    let token = localStorage.getItem('token')
	console.log(token)
	const [state, dispatch] = useReducer(registerReducer,initalState)
	const {ogId,full_name,itemOutDate,itemQtyGiven, error, success} = state
	const assignDevice = async e =>{
		e.preventDefault();
		const assignInfo =  {
		"ogId": ogId,
		"full_name": full_name,
		"itemOutDate": itemOutDate,
        "itemQtyGiven": itemQtyGiven,
        "givenById": getUserId()
	}
		console.log(assignInfo)		
		try{
			let device = await axios.post('https://shielded-plains-57822.herokuapp.com/assign/employee',assignInfo, {headers: {'Authorization': `Bearer ${token}`}})
			console.log(device.data)			
			 dispatch({type: 'success'})
		}catch(err){
			console.log(err)
			dispatch({type: 'error'})
		}
    }
    
    

    useEffect(() => {
        let table = $('#example').DataTable( {
            data: allDevices,
            columns: [
                { title: "Name" },
                { title: "SerialNo" },
                { title: "Model" },
                { title: "Color" },
				{ title: "Location" },
				{title: "Action"}	
            ],
            "bDestroy": true,
            "columnDefs": [ {
                                            "targets": -1,
                                            "data": null,
                                            "defaultContent": `<div className="dropdown show">
                                           
                                            <a className="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="las la-ellipsis-v"></i>
                                            </a>                      
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                 
                                               
                                              <button type="button" onClick={handleClick} className="btn btn-primary" data-toggle="modal" data-target="#AssignDevice">Assign device</button>
                                             
                                            </div>
                                          </div>`
                                        } ], 
            
        } )    
        // let table = $('#example')
        console.log(table)
                        $('#example tbody #showEdit').on( 'click', function () {               
                            var data = table.row( $(this).parents('tr') ).data();
                            setselectDevice(data)
                            
                        } );
                        $('#example tbody #AssignDevice').on( 'click', function () {              
                            var data = table.row( $(this).parents('tr') ).data();
                            setselectDevice(data)
                            console.log(data);
                        } );
                    // } );
              
          
       
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
            <div className="modal fade" id="AssignDevice" tabindex="-1" role="dialog" aria-labelledby="AssignDeviceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            {success && <div className="alert  alert-success" style={{width:'100%'}}>Device Successfully assigned</div> }
				{error &&  <div className="alert  alert-success" style={{width:'100%'}}>Unable to assign device</div> }
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
                                                <div className="col-md-6">
													<div className="form-group">
														<label>Quantity</label>														
                                                            <input className="form-control " type="number" value={itemQtyGiven}
                                                            onChange={e => dispatch({type: 'inputChange', name: 'itemQtyGiven',value: e.currentTarget.value})}  />
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

export default Devices