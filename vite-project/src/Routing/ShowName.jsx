import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function ShowName() {
     const navigate=useNavigate();
    const data= useParams();
  return (
    <>
       <h1>my name is {data.name}</h1>
       <div>
        <Button onClick={()=>navigate(-1)}>go back</Button>
        </div> 
       
       </>
  )
}
