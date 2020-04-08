import React from 'react'
import EditProfile from '../employees/editProfile'

const employeeDashboard = () => {
    return (
        <div id="wrapper" className="page-wrapper" style={{minHeight: "482px"}} >
        <div className="content container-fluid">
        <div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Employee</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Dashboard</a></li>
									<li className="breadcrumb-item assigned">Profile</li>
								</ul>
							</div>							
						</div>
					</div>
                    <div class="card mb-0">
						<div class="card-body">
							<div class="row">
								<div class="col-md-12">
									<div class="profile-view">
										<div class="profile-img-wrap">
											<div class="profile-img">
												<a href="#"><img alt="" src="https://ca.slack-edge.com/TQHUN32CR-URMJFALDP-cddc940f0228-72" /></a>
											</div>
										</div>
										<div class="profile-basic">
											<div class="row">
												<div class="col-md-5">
													<div class="profile-info-left">
														<h3 class="user-name m-t-0 mb-0">Sir Abubakar</h3>
														<h6 class="text-muted">Software</h6>
														<small class="text-muted">Web Designer</small>
														<div class="staff-id">OGID : FT-0001</div>
														<div class="small doj text-muted">Date of Join : 1st Jan 2013</div>														
													</div>
												</div>
												<div class="col-md-7">
													<ul class="personal-info">
														<li>
															<div class="title">Phone:</div>
															<div class="text"><a href="">23480419419419</a></div>
														</li>
														<li>
															<div class="title">Email:</div>
															<div class="text"><a href="">sirabubakar@example.com</a></div>
														</li>
														<li>
															<div class="title">Birthday:</div>
															<div class="text">18th June</div>
														</li>
														<li>
															<div class="title">Address:</div>
															<div class="text">Kubwa Nigeria</div>
														</li>
														<li>
															<div class="title">Gender:</div>
															<div class="text">Male</div>
														</li>
														<li>
															<div class="title">Reports to:</div>
															<div class="text">															  
															   <a href="#">
																	Khalil Kabara
																</a>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<EditProfile />
									</div>
								</div>
							</div>
						</div>
					</div>
                    <div class="row mt-5">
								<div class="col-md-6 d-flex">
									<div class="card profile-box flex-fill">
										<div class="card-body">
												<ul class="personal-info">
												<li>
													<div class="title">Monitor</div>
													<div class="text"> HP 24 Inch</div>
												</li>
												<li>
													<div class="title">Laptop</div>
													<div class="text"><a href="">Lenovo Flex 14</a></div>
												</li>
												<li>
													<div class="title">Mouse</div>
													<div class="text">Lenovo</div>
												</li>
												<li>
													<div class="title">HDMI</div>
													<div class="text">Adapter cable</div>
												</li>
												<li>
													<div class="title">Headset</div>
													<div class="text"></div>
												</li>
												
											</ul>
										</div>
									</div>
								</div>
								   </div>
    </div>
    </div>
    )
}

export default employeeDashboard
