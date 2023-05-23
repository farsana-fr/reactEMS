import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function View() {
    

    const params=useParams()
    const [employee,setEmployee]=useState([])
    const viewEmployee=async()=>{
        const result=await axios.get('http://localhost:8000/getEmployee/'+params.id)
        setEmployee(result.data.message);
    }
    console.log(employee);
    useEffect(()=>{
        viewEmployee()
    },[])
  return (
    
    <div>
        {
            employee?(
                <Row className='container p-3 m-5 bg-light'>
                    <Col lg={6}>
                        <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" width="100px"/>
                        <h4>{employee.name}</h4>
                        <h4>EmpID: {employee.id}</h4>
                    </Col>
                    <Col lg={6}>
                        
                        <h6>Designation:{employee.designation}</h6>
                        <h6>Experience:{employee.experience}</h6>
                        <h6>Salary:{employee.salary}</h6>
                    </Col>
                </Row>
            ):""
        }
    </div>
  )
}

export default View