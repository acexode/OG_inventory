import React, { useEffect } from 'react'
import axios from "axios";
const $ = window.$;
var dataSet = [
	[ "Tiger Nixon", '77888', "IT", "assigned", "2011/04/25"  ],
	[ "Garrett Winters", "7879", "Management", "assigned", "2011/07/25" ],
	[ "Ashton Cox", '78990', "HR", "assigned", "2009/01/12" ],
	[ "Cedric Kelly", "453356", "IT", "assigned", "2012/03/29"  ],
	[ "Airi Satou", "7879", "Management", "assigned", "2008/11/28"  ],
	[ "Brielle Williamson", "9876", "MR-Agent", "assigned", "2012/12/02" ],
	[ "Herrod Chandler", "34545", "HR", "unassigned", "2012/08/06"],
	[ "Rhona Davidson", "9876", "Management", "unassigned", "2010/10/14"],
	[ "Colleen Hurst", "45654", "HR", "assigned", "2009/09/15" ],
	[ "Sonya Frost", "65432", "IT", "assigned", "2008/12/13", "$103,600" ],
	[ "Jena Gaines", "9887", "Customer Service", "unassigned", "2008/12/19" ],
	[ "Quinn Flynn", "90876", "IT", "assigned", "2013/03/03" ],
	[ "Charde Marshall", "8790", "HR", "assigned", "2008/10/16" ],
	[ "Haley Kennedy", "87654", "Customer Service", "unassigned", "2012/12/18" ],
	[ "Tatyana Fitzpatrick", "8790", "Customer Service", "unassigned", "2010/03/17" ],
	[ "Michael Silva", "87654", "Customer Service", "unassigned", "2012/11/27" ],
	[ "Paul Byrd", "908765", "MR-Agent", "assigned", "2010/06/09"],
	[ "Gloria Little", "78767", "MR-Agent", "unassigned", "2009/04/10" ],
	[ "Bradley Greer", "65432", "Customer Service", "unassigned", "2012/10/13" ],
	[ "Dai Rios", "97349", "IT", "assigned", "2012/09/26"],
	[ "Jenette Caldwell", "87654", "MR-Agent", "assigned", "2011/09/03" ],
	[ "Yuri Berry", "24654", "MR-Agent", "assigned", "2009/06/25"],
	[ "Caesar Vance", "87659", "MR-Agent", "assigned", "2011/12/12" ],
	[ "Doris Wilder", "34545", "Software Dev", "unassigned", "2010/09/20"],
	[ "Angelica Ramos", "56789", "Customer Service", "assigned", "2009/10/09" ],
	[ "Gavin Joyce", "45678", "IT", "unassigned", "2010/12/22" ],
	[ "Jennifer Chang", "8790", "Singapore", "assigned", "2010/11/14" ],
	[ "Brenden Wagner", "65432", "HR", "assigned", "2011/06/07" ],
	[ "Fiona Green", "78654", "HR", "unassigned", "2010/03/11"],
	[ "Shou Itou", "98709", "Management", "unassigned", "2011/08/14" ],
	[ "Michelle House", "9876", "Software Dev", "unassigned", "2011/06/02" ],
	[ "Suki Burks", "45678", "Customer Service", "assigned", "2009/10/22" ],
	[ "Prescott Bartlett", "12378", "Customer Service", "unassigned", "2011/05/07"],
	[ "Gavin Cortez", "9876", "HR", "assigned", "2008/10/26"],
	[ "Martena Mccray", "86543", "IT", "assigned", "2011/03/09" ],
	[ "Unity Butler", "87654", "HR", "assigned", "2009/12/09" ]
];

const  Employees = () => {
    useEffect(() => {
       
        $('#example').DataTable( {
            data: dataSet,
            columns: [
                { title: "Name" },
                { title: "OGID" },
                { title: "Department" },
                { title: "Status" },
                { title: "Action" }		
            ],
            'rowCallback': function(row, data, index){
                console.log(data[4])
                if(data[3] == "assigned"){
                    $(row).find('td:eq(3)').css('color', 'green');
                }
                else{
                    $(row).find('td:eq(3)').css('color', 'red');
                }
            },
            "bDestroy": true
            
        } )    
       
    }, [dataSet])
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
							<div className="col-auto float-right ml-auto">
								<a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_employee"><i className="fa fa-plus"></i> Add Employee</a>
							
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
