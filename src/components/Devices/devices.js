import React, { useEffect,useState,useContext } from 'react'
import {DeviceContext}  from '../DeviceContext/DeviceContext'

import axios from "axios";
import { Link } from 'react-router-dom';
const $ = window.$;

const  Employees = () => {
	const [users] = useContext(DeviceContext)
	const [employees, setemployees] = useState([])
    const allDevices = users.map(user => Object.values(user).slice(1))
    const [selectDevice, setselectDevice] = useState([])
	console.log(allDevices)

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
                                                 
                                              <a id="showEdit" className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">Edit</a>
                                              <a className="dropdown-item" data-toggle="modal" data-target="#AssignDevice"  href="#">Assign device</a>
                                             
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

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">               
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                <form  style={{marginTop:"30px" }}>
                    <h5 className="text-center" id="exampleModalLabel mb-4">Edit Device</h5>                   
									<div className="row mt-5">
										<div className="col-md-12">
										
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label>Device Id</label>
														<input type="text" className="form-control" value="" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Device Name</label>
														<input type="text" className="form-control" value={selectDevice[0]} />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Assigned</label>
														<input type="text" className="form-control" value={selectDevice[1]} />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Assign to</label>														
															<input className="form-control " type="text" value={selectDevice[2]} />
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

            <div className="row">                
            <div className="modal fade" id="AssignDevice" tabindex="-1" role="dialog" aria-labelledby="AssignDeviceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">               
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                <form  style={{marginTop:"30px" }}>
                    <h5 className="text-center" id="exampleModalLabel mb-4">Assign Device</h5>                   
									<div className="row mt-5">
										<div className="col-md-12">
										
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label>Employee OGID</label>
														<input type="text" className="form-control" value="" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Employee FullName</label>
														<input type="text" className="form-control" value="" />
													</div>
												</div>												
												<div className="col-md-6">
													<div className="form-group">
														<label>Device ID</label>														
															<input className="form-control " type="text" value={selectDevice[2]} />
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

export default Employees