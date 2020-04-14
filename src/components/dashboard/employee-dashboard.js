import React from "react";
import EditProfile from "../employees/editProfile";
import {
  getOgid,
  getUserName,
  getRole,
  getPhone,
  getEmail,
  getCampaign,
} from "../../helpers/userToken";

const EmployeeDashboard = () => {
  const ogid = getOgid();
  const fullname = getUserName();
  const role = getRole();
  const phone = getPhone();
  const email = getEmail();
  const campaign = getCampaign();

  return (
    <div id="wrapper" className="page-wrapper" style={{ minHeight: "482px" }}>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Employee</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item assigned">Profile</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                <div className="profile-img-wrap">
											<div className="profile-img">
												<a href="#"><img alt="" src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" /></a>
											</div>
										</div>
                  <div className="profile-basic">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile-info-left">
                          <h3 className="user-name m-t-0 mb-0">{fullname}</h3>
                          <h6 className="text-muted">{campaign}</h6>
                          <small className="text-muted">{campaign}</small>
                          <div className="staff-id">OGID : {ogid}</div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <ul className="personal-info">
                          <li>
                            <div className="title">Phone:</div>
                            <div className="text">
                              <a href="">{phone}</a>
                            </div>
                          </li>
                          <li>
                            <div className="title">Email:</div>
                            <div className="text">
                              <a href="">{email}</a>
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
        <div className="row mt-5">
          <div className="col-md-6 d-flex">
            <div className="card profile-box flex-fill">
              <div className="card-body">
                <ul className="personal-info">
                  <li>
                    <div className="title">Monitor</div>
                    <div className="text"> HP 24 Inch</div>
                  </li>
                  <li>
                    <div className="title">Laptop</div>
                    <div className="text">
                      <a href="">Lenovo Flex 14</a>
                    </div>
                  </li>
                  <li>
                    <div className="title">Mouse</div>
                    <div className="text">Lenovo</div>
                  </li>
                  <li>
                    <div className="title">HDMI</div>
                    <div className="text">Adapter cable</div>
                  </li>
                  <li>
                    <div className="title">Headset</div>
                    <div className="text"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
