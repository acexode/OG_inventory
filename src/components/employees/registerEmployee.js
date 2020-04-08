import React from 'react'

const registerEmployee = () => {
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
                    <form className="card" style={{margin:"30px auto", padding: '30px'}}>
									<div class="row">
										<div class="col-md-12">
										
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label>OGID</label>
														<input type="text" class="form-control" value="" />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>First Name</label>
														<input type="text" class="form-control" value="" />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Last Name</label>
														<input type="text" class="form-control" value="" />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Password</label>														
															<input class="form-control " type="text" value="" />
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
    )
}

export default registerEmployee
