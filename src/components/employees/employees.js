import React, { useEffect,useState,useContext } from 'react'
import {EmployeeContext} from "../EmployeeContext/EmployeeContext"

import axios from "axios";
const $ = window.$;

const  Employees = () => {
	const [users] = useContext(EmployeeContext)
	const [employees, setemployees] = useState([])
	const allUsers = users.map(user => Object.values(user).slice(1))
	console.log(allUsers)
	const getData = async() =>{
		let all = axios.get('')
		
	}
    useEffect(() => {

       
        $('#example').DataTable( {
            data: allUsers,
            columns: [
                { title: "Name" },
                { title: "OGID" },
                { title: "Department" },
                { title: "Role" },
				{ title: "Phone Number" },
				{title: "Email"}	
            ],
            "bDestroy": true
            
        } )    
       
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
    </div>
    )
}

export default Employees
