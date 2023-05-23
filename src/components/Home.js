import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {

    const getEmployees=async()=>{
        const result=await axios.get('http://localhost:8000/getEmployees') 
        setEmployees(result.data.message);
    }

    const deleteEmployee=async(id)=>{
        console.log("DEL FUNC ");
        const result=await axios.delete('http://localhost:8000/removeEmployee/'+id)
        alert(result.data.message)
        getEmployees();
    }


    const [employees,setEmployees]=useState([])
    useEffect(()=>{
        getEmployees()
    },[])
    console.log("EMP",employees);
  return (
    <div className=' mt-5'>
        <div className='container w-75 p-5 bg-light'>
            <h1 className='text-center'>Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi sit vitae obcaecati recusandae itaque doloremque doloribus odit. Voluptatibus blanditiis fuga exercitationem, qui reprehenderit in cupiditate ullam suscipit. Explicabo, impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat doloribus, deserunt odio, quae adipisci, animi qui sit ipsum dolore quibusdam soluta neque deleniti repudiandae repellat velit error quod explicabo?
            </p>
            <Link to={'Add'}>
            <button className='btn btn-success ms-5 text-center'>Add New Employee</button>
            </Link>
            
        </div>

       <div className='container w-75 mt-5 mb-5'>
        <h1 className='text-center'>List of Employees</h1>
            <Table striped  bordered hover variant='primary'>
                <thead>
                    <tr>
                    <th>SNo</th>
                    <th>Emp ID</th>
                    <th>Full Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Experience</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    employees.map((employee,index)=>(

                    <tr>
                    <td>{index+1}</td>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.experience}</td>
                    <td>
                        <Link to={`/Edit/${employee.id}`}><i className="fa-regular fa-pen-to-square ms-3"></i>Edit</Link>
                        <Link to={`/View/${employee.id}`}><i className="fa-regular fa-eye ms-3" ></i>View</Link>
                        <button href="" className='ms-3' onClick={()=>deleteEmployee(employee.id)}><i className="fa-solid fa-trash"></i>Delete</button>
                    </td>
                    </tr>

                
                    )
                    )
                }
                </tbody>
                
            </Table>
       </div>
    </div>
    
  )
}

export default Home