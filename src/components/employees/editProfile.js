import React,{useState} from 'react'
import axios from 'axios'
import {getUser,getUserId,getToken,getUserName,getOgid} from "../../helpers/userToken"
const $ = window.$;
const EditProfile = ({fullname, role, phone, email}) => {
	const userId = getUserId()
	const token = getToken()
	const userName = getUserName()
	const ogid = getOgid()
	console.log(userId)

	const [oldpassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')
	const [show, setShow] = useState(false)
	const [alert_type, setAlertType] = useState('success')


	const handlePasswordChange =(event) =>{
		const {value} = event.target
		// setPassword(value)
	}

		const handleSubmit=(event)=>{
			event.preventDefault()
			if( oldpassword === '' && newPassword === '' && confirmPassword===''){
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
					old_password: oldpassword,
					new_password: newPassword,
					confirm_password: confirmPassword
				}
				console.log(user)
				axios.put(`https://shielded-plains-57822.herokuapp.com/users/change_password`, user, {headers: {'Authorization': `Bearer ${token}`}})
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
    return (
        <>         

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
														<input type="text" readOnly className="form-control" value={ogid}  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Full Name</label>
														<input type="text" readOnly className="form-control" value={userName}  />
													</div>
												</div>
										
												<div className="col-md-6">
													<div className="form-group">
														<label>Old Password</label>														
															<input className="form-control " type="text" value={oldpassword} onChange={(e) => setOldPassword(e.target.value)} />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>New Password</label>														
															<input className="form-control " type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Old Password</label>														
															<input className="form-control " type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
        </>
    )
}

export default EditProfile
