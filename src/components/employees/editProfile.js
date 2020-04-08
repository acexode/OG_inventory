import React from 'react'

const EditProfile = () => {
    return (
        <>         

<div class="pro-edit"><a data-toggle="modal" data-target="#exampleModal" class="edit-icon" href="#"><i class="fa fa-pencil"></i></a></div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <form  style={{marginTop:"30px" }}>
      <h5 class="text-center" id="exampleModalLabel mb-4">Edit Profile</h5>
									<div class="row mt-5">
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
        </>
    )
}

export default EditProfile
