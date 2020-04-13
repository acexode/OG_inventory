import React from 'react';
 import './header.css'
 import logo from '../../assets/outsource-logo-square.png'
import { Link, useHistory } from 'react-router-dom';

const Header = () =>{
	let history = useHistory()
	const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        history.push('/login')
    }
    return (

        <div className="header">
                <div className="header-left mr-5">
                    <a href="#" className="logo">
						<img src={logo} width="80" height="40" alt="" />
					</a>
                </div>
				<a id="toggle_btn" href="#" onClick={(e) => e.preventDefault()}>
					<span className="bar-icon">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</a>				
				
                <div className="page-title-box">
					<h3>Outsource Global Technologies</h3>
                </div>
				
				<a id="mobile_btn" className="mobile_btn" href="#"><i className="fa fa-bars"></i></a>				

				<ul className="nav user-menu">				
					
					<li className="nav-item">
						<div className="top-nav-search">
							<a href="#" onClick={(e) => e.preventDefault()} className="responsive-search">
								<i className="fa fa-search"></i>
						   </a>
							<form action="#">
								<input className="form-control" type="text" placeholder="Search here" />
								<button className="btn" type="submit"><i className="fa fa-search"></i></button>
							</form>
						</div>
					</li>				

					<li className="nav-item dropdown has-arrow main-drop show ml-3">
						<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
							<span className="user-img"><img src="https://ca.slack-edge.com/TQHUN32CR-URMJFALDP-cddc940f0228-72" alt="" />
							<span className="status online"></span></span>
							<span>Admin</span>
						</a>
						<div className="dropdown-menu show" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(-11px, 60px, 0px)'}}>
							<Link className="dropdown-item" to="/profile">My Profile</Link>
							<Link className="dropdown-item" to="/user-settings">Settings</Link>
							<a onClick={logout} className="dropdown-item" href="#">Logout</a>
						</div>
					</li>
				</ul>			
				<div className="dropdown mobile-user-menu">
					<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
					<div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="/profile">My Profile</Link>
							<Link className="dropdown-item" to="/user-settings">Settings</Link>
							<a onClick={logout} className="dropdown-item" href="">Logout</a>
					</div>
				</div>
            </div>
    )
}
export default Header