import React from 'react'

function Edit() {
  return (
    <div>
      <h1 className='text-center mt-5'>Edit Employee</h1>
      <form action="" className='container mt-3 bg-dark rounded-5 p-5'>
        <input  type="text" className='form-control' id="nameID" name="nameName" /><br />
        <input type="text" className='form-control' id="desgnID" name="desgnName"/><br />
        <input type="text" className='form-control' id="salID" name="salName" /><br />
        <input type="text" className='form-control' id="expID" name="expName" /><br />
        <button className='btn' >Submit</button>
      </form>
    </div>
  )
}

export default Edit