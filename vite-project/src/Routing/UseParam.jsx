import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function UseParam() {
   const  navigate=useNavigate()
   const data=useParams()
  return (
    <div className='d-flex gap-5 justify-content-center   bg-danger-subtle' style={{height:"80vh", alignItems:"center"}}>
        <h1>My name is { data.name}</h1>
        
          <Button onClick={()=>navigate(-1)} >Go Back</Button>
        </div>
  )
}
