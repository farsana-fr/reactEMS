import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid'

function Add() {

  const addNewEmployee=async (e)=>{
    e.preventDefault();
    setId(uuid().slice(0,3));
    const body={
      id:id,
      name:name,
      designation:dsg,
      salary:sal,
      experience:exp
    }

    const result=await axios.post('http://localhost:8000/addEmployees',body)
    // alert(result.data.message)
    console.log("RESULT",result)
    console.log(result.data.message)
  }

  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [dsg,setDsg]=useState('')
  const [sal,setSal]=useState(0)
  const [exp,setExp]=useState(0)
  useEffect(()=>{
    setId(uuid().slice(0,3));
  },[])
  console.log(id);
  console.log(name);
  console.log(dsg);
  console.log(sal);
  console.log(exp);
  return (
    <div>
      <h1 className='text-center mt-5'>Add New Employee</h1>
      <form action="" className='container mt-3 bg-dark rounded-5 p-5'>
        <input onChange={(e)=>setName(e.target.value)} type="text" className='form-control' id="nameID" name="nameName" placeholder="Name"/><br />
        <input onChange={(e)=>setDsg(e.target.value)} type="text" className='form-control' id="desgnID" name="desgnName" placeholder="Designation"/><br />
        <input onChange={(e)=>setSal(e.target.value)} type="text" className='form-control' id="salID" name="salName" placeholder="Salary"/><br />
        <input onChange={(e)=>setExp(e.target.value)} type="text" className='form-control' id="expID" name="expName" placeholder="Experience"/><br />
        <button className='btn' onClick={(e)=>addNewEmployee(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Add