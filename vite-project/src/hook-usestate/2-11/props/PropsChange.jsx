import React, { useState } from 'react';
import {Button} from 'reactstrap'

export default function PropsChange(props) {
  const [name,setstate]=useState(props.name)
 
  const changeName=()=>{
    setstate("user");
  }
  const changeName1=()=>{
    props.name
  }

  

  return (
    <>
    <h1>its change the value with usestate</h1>
    <h1>
    PropsChange {name}
      
    </h1>
      <Button color='danger'size='lg' onClick={()=>changeName()}>change name</Button>
      <hr />

      <Button color='danger'size='lg' onClick={()=>changeName1()}>change name</Button>
      </>
  )
}
