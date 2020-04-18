import React, { useEffect,useState,useContext } from 'react'
import {EmployeeContext} from "../EmployeeContext/EmployeeContext"

import axios from "axios";
import { getRole, getUserId,getToken,getOgid, getUserName } from '../../helpers/userToken';
import EditProfile from './editProfile';
const $ = window.$;

const  Employees = () => {
	const role = getRole()
	const userId = getUserId()
	const token = getToken()	
	const ogid = getOgid()
	const userName = getUserName()
	

	const [phone, setphone] = useState('')
	const [email, setemail] = useState('')
	const [newRole, setNewRole] = useState(role)
	const [message, setMessage] = useState('')
	const [show, setShow] = useState(false)
	const [alert_type, setAlertType] = useState('success')
	const [users] = useContext(EmployeeContext)
	const [employees, setemployees] = useState([])
	const allUsers = users.map(user => Object.values(user).slice(2))
	console.log(allUsers)

	const handleSubmit=(event)=>{
		event.preventDefault()
		if( phone === '' && email === ''){
			setShow(true)
			setTimeout(() =>{
				setShow(false)
			}, 3000)
			setAlertType("warning")
			setMessage("Fields cannot be empty")
		}
		else{
			let user ={
				ogId: ogid,
				fullName: userName,
				phone: phone,
				new_password: email,
				role: newRole
			}
			console.log(user)
			axios.put(`https://shielded-plains-57822.herokuapp.com/users`, user, {headers: {'Authorization': `Bearer ${token}`}})
			.then(res =>{
				console.log(res)
				  setShow(true)
				  setTimeout(() =>{
					  setShow(false)
					  $('#exampleModal').modal('toggle')

				  }, 3000)
				setAlertType("success")
				setMessage("Profile updated successfully")
			})
			.catch(err =>{
				setShow(true)
				setTimeout(() =>{
					setShow(false)
				}, 3000)
				setAlertType("danger")
				setMessage("Profile not updated")
				console.log(err)
			})

		}
		// console.log(user)
	}

    useEffect(() => {

       
        let table = $('#example').DataTable( {
            data: allUsers,
            columns: [
                { title: "Name", "width": "25%" },
                { title: "OGID", "width": "10%" },
               	{ title: "Role" },
				{ title: "Phone Number" },
				{title: "Email", "width": "20%" },	
				{title: "Action" }	
            ],
            "bDestroy": true,
            'rowCallback': function(row, data, index){
				console.log(data[5])
				if(data[2] == "admin"){
					$(row).find('td:eq(2)').html(`<span class="badge bg-inverse-danger">Admin</span>`);
					
				}else {
					$(row).find('td:eq(2)').html(`<span class="badge bg-inverse-success">User</span>`);;
				}
				if(data[5]){
					// if(role == "admin"){
						$(row).find('td:eq(5)').html(`<div class="dropdown">
						<a href="#" class="nav-link text-secondary pl-4 " data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
						<div class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#" id="editModal"   data-toggle="modal" data-target="#exampleModal">Edit User</a>
							<a class="dropdown-item" href="#" id="deleteModal"   data-toggle="modal" data-target="#exampleModal">Delete</a>                 
						</div>
					</div>`)
					// }else{
					// 	$(row).find('td:eq(5)').html('')
					// }
				}
				
			}
            
		} ) 
		$('#example tbody #editModal').on( 'click', function () {  
			    
			var data = table.row( $(this).parents('tr') ).data();
			console.log(table.row( $(this).parents('tr') ).index())
			console.log(data)
           
                            
        } );   
       
    }, [allUsers])
    return (
        <div id="wrapper" className="page-wrapper" style={{minHeight: "482px"}} >
		
        <div className="content container-fluid">
        <div className="page-header">
						<div className="row align-items-center">

							<div className="col">
								<h3 className="page-title">Employee</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item assigned">Employee</li>
								</ul>
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
        </div>
		<div className="pro-edit"><a data-toggle="modal" data-target="#exampleModal" className="edit-icon" href="#"><i className="fa fa-pencil"></i></a></div>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
     
	{show ? ( <div className={`alert alert-${alert_type} alert-dismissible fade show`} role="alert">
						<p>{message}</p>
		</div>) : (<div></div>)}		

      <div className="modal-body">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <form  style={{marginTop:"30px" }} onSubmit={handleSubmit}>
      <h5 className="text-center" id="exampleModalLabel mb-4">Edit Profile</h5>
									<div className="row mt-5">
										<div className="col-md-12">
										
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label>OGID</label>
														<input type="text"  className="form-control" value={ogid}  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Full Name</label>
														<input type="text"  className="form-control" value={userName}  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Role</label>
														<input type="text"  className="form-control" value={newRole} onChange={(e) => setNewRole(e.target.value)}  />
													</div>
												</div>
										
												<div className="col-md-6">
													<div className="form-group">
														<label>Phone</label>														
															<input className="form-control " type="text" value={phone} onChange={(e) => setphone(e.target.value)} />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Email</label>														
															<input className="form-control " type="text" value={email} onChange={(e) => setemail(e.target.value)} />
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
    )
}

export default Employees
