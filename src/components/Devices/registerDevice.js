import React, { useState, Fragment } from 'react'
import axios from "axios";
const RegisterDevice = () => {  
    
    const [device, setDevice] = useState([{name: '', model: '', serialNo:'', color:'', image:'',quantity:''}])
    const handleChange = (index, e) => {       
        const values = [...device]
        if(e.target.name =="name"){
            values[index].name = e.target.value
        }else  if(e.target.name =="model"){
            values[index].model = e.target.value
        }
        else  if(e.target.name =="serialNo"){
            values[index].serialNo = e.target.value
        }
        else  if(e.target.name =="color"){
            values[index].color = e.target.value
        }
        else  if(e.target.name =="image"){
            values[index].image = e.target.value
        }else{
            values[index].quantity = e.target.value
        }
        setDevice(values)
        console.log(values)
      }
      const handleRemoveFields = index => {
        const values = [...device];
        console.log(index)
        if(values.length > 1){
            values.splice(index, 1);
            setDevice(values);

        }
      };
      const handleAddFields = () => {
        const values = [...device];
        values.push({name: '', model: '', serialNo:'', color:'', image:'',quantity:''});
        setDevice(values);
      };
      const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(device)
      }
    
    return (
        <form onSubmit={handleSubmit} id="wrapper" className="page-wrapper" style={{minHeight: "482px"}}>                
                  <div className="content container-fluid">
                  <div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Devices</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Dashboard</a></li>
									<li className="breadcrumb-item assigned">Register devices</li>
								</ul>
							</div>							
						</div>
					</div>
                    <div className="row">
                        <div className="col-md-8">
                                    {device && device.map((val, index) =>(
                                        
                                        <Fragment key={`${val}_${index}`}>
                                            <div className="card">
                                            <div className="row">
                                                <div className="col-md-12">
                                                <div className="pro-edit ml-1 mr-5 mt-5 mb-5"><a onClick={handleAddFields} className="edit-icon ml-3" href="#"><i className="fa fa-plus"></i></a></div> 
                                                <div className="pro-edit ml-1 mr-5 mt-5 mb-5"><a onClick={() => handleRemoveFields(index)} className="edit-icon" href="#"><i className="fa fa-minus"></i></a></div>
                                                </div>
                                            </div>
                                            <div className="row p-3">
                                            <div className="col-md-6" >
                                                <div className="form-group">
                                                <label htmlFor="">Device Name</label>
                                                <input type="text"                                                    
                                                    value={val.name}
                                                    onChange={event => handleChange(index, event)}                                         
                                                    className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="" />
                                                
                                            </div>
                                        </div>
                                    <div className="col-md-6" >
                                        <div className="form-group">
                                        <label htmlFor="">Model</label>
                                        <input type="text"
                                            value={val.model}
                                            onChange={event => handleChange(index, event)} 
                                            className="form-control" name="model" id="" aria-describedby="helpId" placeholder="" />
                                        
                                    </div>
                                </div>
                                </div>
                                <div className="row p-3">
                                        <div className="col-md-6" >
                                            <div className="form-group">
                                            <label htmlFor="">Serial Number</label>
                                            <input type="text"
                                                value={val.serialNo}
                                                onChange={event => handleChange(index, event)} 
                                                className="form-control" name="serialNo" id="" aria-describedby="helpId" placeholder="" />
                                            
                                        </div>
                                </div>
                                    <div className="col-md-6" >
                                        <div className="form-group">
                                        <label htmlFor="">Color</label>
                                        <input type="text"
                                            value={val.color}
                                            onChange={event => handleChange(index, event)} 
                                            className="form-control" name="color" id="" aria-describedby="helpId" placeholder="" />
                                        
                                    </div>
                                </div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-md-6 mt-2" >
                                    <div className="form-group">
                                        <label htmlFor="">Upload Image</label>
                                        <input type="file"
                                        value={val.image}
                                        onChange={event => handleChange(index, event)} 
                                         className="form-control-file" name="image" id="" placeholder="" aria-describedby="fileHelpId" />
                                        
                                    </div>
                                </div>
                                    <div className="col-md-6" >
                                        <div className="form-group">
                                        <label htmlFor="">Quantity</label>
                                        <input type="number"
                                            value={val.quantity}
                                            onChange={event => handleChange(index, event)} 
                                            className="form-control" name="quantity" id="" aria-describedby="helpId" placeholder="" />
                                        
                                    </div>
                                </div>
                            </div>                           
                        </div>
                                    
                            </Fragment>      
                                   ))}  
                            <div className="row">
                                    <div className="col-md-12">
                                    <div className=" float-right mr-3 mb-3">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                
                                        
                                        </div>
                                    </div>
                                </div> 
                        
       
                        </div>
                        <div className="col-md-4">
                            <div className="card text-left">
                              <img className="card-img-top" src="holder.js/100px180/" alt="" />
                              {device.length >= 1 ?
                              (<>{device.map((e,i) =>(
                                  <div key={i} className="card-body">
                                <h4 className="card-title">Entry {i + 1}</h4>
                                <div className="list-group">
                                {e.name  ? 
                               ( <a href="#" className="list-group-item list-group-item-action active">
                                    Name : {e.name}
                                    <div className="pro-edit " style={{marginTop: '-1.5em'}}><a onClick={() => handleRemoveFields(i)} className="edit-icon" href="#"><i className="fa fa-minus"></i></a></div>
                                          
                                </a>) :
                                (<>
                                    
                                </>)
                            }
                                     <a href="#" className="list-group-item list-group-item-action">Model : {e.model}</a>
                                <a href="#" className="list-group-item list-group-item-action">SerialNo : {e.serialNo}</a>
                                <a href="#" className="list-group-item list-group-item-action">Color : {e.color}</a>
                                <a href="#" className="list-group-item list-group-item-action">Image : {e.image}</a>
                                <a href="#" className="list-group-item list-group-item-action">Quantity : {e.quantity}</a>
                                </div>
                               
                              </div>
                              ))}</>) : ''  }
                            </div>
                        </div>
                    </div>
           
        </div>
        </form>
    )
}

export default RegisterDevice
