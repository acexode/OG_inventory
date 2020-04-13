import React, {useReducer} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const registerReducer = (state, action) =>{
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
				error: action.error
			}
		}
		case 'success' : {
			return {
				...state,
				error: action.data
			}
		}
	}
}
const initalState = {
	fullName: "", 
	ogId: "", 
	campaign: "", 
	role: "", 
	password: "", 
	phone: "", 
	email: "" ,
	error: "",
	success: "",


}
const RegisterEmployee = () => {
	let history = useHistory()
	let token = localStorage.getItem('token')
	const [state, dispatch] = useReducer(registerReducer,initalState)
	const {fullName,ogId,campaign,role,password,phone,email, error, success} = state
	const onSubmit = async e =>{
		e.preventDefault();
		const newEmployee = {fullName,ogId,campaign,role,password,phone,email}
		console.log(newEmployee)
		console.log(state)
		try{
			let user = await axios.post('https://shielded-plains-57822.herokuapp.com/users/register', newEmployee, {headers: {'Authorization': `Bearer ${token}`}})
			console.log(user.data)
			// dispatch({type: 'success', data : user.data})
			
		}catch(err){
			console.log(err)
			// dispatch({type: 'error', error: err})
		}
	}
    return (
        <div id="wrapper" className="page-wrapper" style={{minHeight: "482px"}} >
        <div className="content container-fluid">
        <div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Employee</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Dashboard</a></li>
									<li className="breadcrumb-item assigned">Register Employee</li>
								</ul>
							</div>						
						</div>
					</div>
            <div className="row">
                    <div className="col-md-12" >
                    <div className="row">
                    <form onSubmit={onSubmit} className="card" style={{margin:"30px auto", padding: '30px'}}>
							{success && <p className="success">User Created</p> }
							{error && console.log(error) }
									<div className="row">
										<div className="col-md-12">
										
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label>OGID</label>
														<input 
															type="text" 
															onChange={e => dispatch({type: 'inputChange', name: 'ogId',value: e.currentTarget.value})} 
															className="form-control"
															value={ogId}
														  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Full Name</label>
														<input 
															type="text" 
															onChange={e => dispatch({type: 'inputChange', name: 'fullName',value: e.currentTarget.value})} 
															className="form-control"
															value={fullName}
														  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Email</label>
														<input 
															type="text" 
															onChange={e => dispatch({type: 'inputChange', name: 'email',value: e.currentTarget.value})} 
															className="form-control"
															value={email}
														  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Phone</label>
														<input 
															type="text" 
															onChange={e => dispatch({type: 'inputChange', name: 'phone',value: e.currentTarget.value})} 
															className="form-control"
															value={phone}
														  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Campaign</label>
														<input 
															type="text" 
															onChange={e => dispatch({type: 'inputChange', name: 'campaign',value: e.currentTarget.value})} 
															className="form-control"
															value={campaign}
														  />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">													
														  <label htmlFor="">Role</label>
														  <select 
														  onChange={e => dispatch({type: 'inputChange', name: 'role',value: e.currentTarget.value})} 
														  className="form-control" value={role} id="">
															<option>Select Role</option>
															<option>User</option>
															<option>Admin</option>
															<option>Super Admin</option>
														  </select>
														</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Password</label>														
														<input 
															type="password" 
															onChange={e => dispatch({type: 'inputChange', name: 'password',value: e.currentTarget.value})} 
															className="form-control"
															value={password}
														  />
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

export default RegisterEmployee
