import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function ShowCity() {
   const navigate =useNavigate()
   const data=useParams()
  return (
    <>
    <h1>
        my city is {data.city}
    </h1>
    <div>
        <Button onClick={()=>navigate(-1)}>go back</Button>
    </div>
    
   </>
  )
}
