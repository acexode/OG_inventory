import React,  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EditProfile from '../employees/editProfile';
import axios from "axios";
const $ = window.$;
const data = [
{"name":"HP Yaris","assigned":false,"assigned_to":"Janet Wilber"},
{"name":"HP 900","assigned":true,"assigned_to":"Ase Meindl"},
{"name":"Dell Focus","assigned":false,"assigned_to":"Donovan Queyeiro"},
{"name":"HP FX","assigned":false,"assigned_to":"Skipper Uman"},
{"name":"HP Eos","assigned":true,"assigned_to":"Davon Monro"},
{"name":"HP TrailBlazer","assigned":false,"assigned_to":"Elisabetta Emer"},
{"name":"HP Mazda3","assigned":true,"assigned_to":"Rube Kimbrey"},
{"name":"Dell Sequoia","assigned":true,"assigned_to":"Eberto Jurick"},
{"name":"HP 9-3","assigned":false,"assigned_to":"Tomasine Fairfoot"},
{"name":"HP Accord","assigned":true,"assigned_to":"Costanza Tabary"},
{"name":"HP Highlander","assigned":true,"assigned_to":"Gabriele Sexon"},
{"name":"Dell Cavalier","assigned":false,"assigned_to":"Drew Bosence"},
{"name":"HP Vibe","assigned":true,"assigned_to":"Bram Reddlesden"},
{"name":"HP Silverado 2500","assigned":true,"assigned_to":"Kinna Seson"},
{"name":"HP Express 2500","assigned":true,"assigned_to":"Elsinore Capponeer"},
{"name":"Dell Rodeo","assigned":false,"assigned_to":"Ora Juppe"},
{"name":"HP J","assigned":true,"assigned_to":"Giorgia Have"},
{"name":"HP Protege","assigned":false,"assigned_to":"Phillipe Caldron"},
{"name":"Dell Supra","assigned":true,"assigned_to":"Eadith Laurie"},
{"name":"HP Pathfinder","assigned":true,"assigned_to":"Cassi Standon"},
{"name":"HP LeBaron","assigned":false,"assigned_to":"Donall Newlin"},
{"name":"Dell Suburban 1500","assigned":false,"assigned_to":"Darin Dumphry"},
{"name":"HP 914","assigned":false,"assigned_to":"Shela Darkin"},
{"name":"HP Ram 1500","assigned":false,"assigned_to":"Hazel Warburton"},
{"name":"Dell 62","assigned":true,"assigned_to":"Ines Duckinfield"},
{"name":"HP C-Class","assigned":true,"assigned_to":"Alexis Barringer"},
{"name":"Dell Hearse","assigned":false,"assigned_to":"Ginger Klementz"},
{"name":"HP Endeavor","assigned":true,"assigned_to":"Wilmette O'Teague"},
{"name":"HP 5000S","assigned":true,"assigned_to":"Alix Bigglestone"},
{"name":"HP VUE","assigned":true,"assigned_to":"Andree Kennermann"}]

const Devices = () => {
    const [selectDevice, setselectDevice] = useState([])
    useEffect(() => {
        $(document).ready(function() {
            let arr = data.map(e => Object.values(e))
            console.log(arr)
            var table
            if(arr.length){               
               table = $('#example').DataTable( {
                    data: arr,
                    select: true,
                    columns: [
                      
                        { "title": "Device" },
                        { "title": "assigned" },
                        { "title": "assigned_to" } ,   	
                          	
                        { "title": "Action" }     	
                    ], 
                    "columnDefs": [ {
                        "targets": -1,
                        "data": null,
                        "defaultContent": `<div class="dropdown show">
                       
                        <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="las la-ellipsis-v"></i>
                        </a>                      
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                             
                          <a id="showEdit" class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">Edit</a>
                          <a class="dropdown-item" data-toggle="modal" data-target="#AssignDevice"  href="#">Assign device</a>
                         
                        </div>
                      </div>`
                    } ],            
                    "bDestroy": true ,
                                          
                } )    
                

            }
            $('#example tbody #showEdit').on( 'click', function () {               
                var data = table.row( $(this).parents('tr') ).data();
                setselectDevice(data)
                
            } );
            $('#example tbody #AssignDevice').on( 'click', function () {              
                var data = table.row( $(this).parents('tr') ).data();
                setselectDevice(data)
            } );
        } );
    }, [])

    
    return (
        <div id="wrapper" className="page-wrapper" style={{minHeight: "482px"}} >
        <div className="content container-fluid">
        <div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Devices</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Dashboard</a></li>
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
      

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">               
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                <form  style={{marginTop:"30px" }}>
                    <h5 class="text-center" id="exampleModalLabel mb-4">Edit Device</h5>                   
									<div class="row mt-5">
										<div class="col-md-12">
										
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label>Device Id</label>
														<input type="text" class="form-control" value="" />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Device Name</label>
														<input type="text" class="form-control" value={selectDevice[0]} />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Assigned</label>
														<input type="text" class="form-control" value={selectDevice[1]} />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Assign to</label>														
															<input class="form-control " type="text" value={selectDevice[2]} />
													</div>
												</div>
												
											</div>
										</div>
									</div>
									
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
                </div>               
                </div>
            </div>
            </div>

            <div class="row">                
            <div class="modal fade" id="AssignDevice" tabindex="-1" role="dialog" aria-labelledby="AssignDeviceLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">               
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                <form  style={{marginTop:"30px" }}>
                    <h5 class="text-center" id="exampleModalLabel mb-4">Assign Device</h5>                   
									<div class="row mt-5">
										<div class="col-md-12">
										
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label>Employee OGID</label>
														<input type="text" class="form-control" value="" />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Employee FullName</label>
														<input type="text" class="form-control" value="" />
													</div>
												</div>												
												<div class="col-md-6">
													<div class="form-group">
														<label>Device ID</label>														
															<input class="form-control " type="text" value={selectDevice[2]} />
													</div>
												</div>
												
											</div>
										</div>
									</div>
									
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
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
