import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label,  Table } from 'reactstrap'

export default function MultiInput() {
  const[indata,setIndata]=useState({
    uname:"",
    age:"",
    email:"",
     password:"",
    })

    const [alldata,setAlldata]= useState([])
 const getdata =()=>{
    if(indata.uname.length  >0 ){
    setAlldata([...alldata,indata])   
    setIndata({
      uname:"",
      age:"",
      email:"",
      password:"",
    })
    toast.success("hmmmmmmmm")
    }else{
      toast.error("rrr")
    } 


 }


  return (
    <div>

        {/* <h1>{indata.uname}</h1>
        <h1>{indata.age}</h1>
        <h1>{indata.email}</h1>
        <h1>{indata.password}</h1> */}
     <Form>


        
        <FormGroup>
          <Label for="User Name">User Name</Label>
          <Input type="text" name="name" id="examplename" placeholder="Enter Your Name"
            value={indata.uname}
          onChange={(e)=>setIndata({ ...indata,uname:e?.target?.value})}/>
        </FormGroup>
        <FormGroup>
          <Label for="Age">User Age</Label>
          <Input type="Number" name="age" id="exampleage" placeholder="Enter Your Age"
           value={indata.age}
           onChange={(e)=>setIndata({ ...indata,age:e?.target?.value})}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email"
           value={indata.email}
           onChange={(e)=>setIndata({ ...indata,email:e?.target?.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password please"
           value={indata.password}
           onChange={(e)=>setIndata({ ...indata,password:e?.target?.value})}
          />
        </FormGroup>
        
       
        
        <Button onClick={getdata} className=''>Submit</Button>
      </Form>
      
    {alldata.length >0?(
      <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Age</th>
            <th>Emain</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
            {
                alldata.map((e)=>{
                    return <tr>
                    <th scope="row">1</th>
                    <td>{e.uname}</td>
                    <td>{e.age}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                  </tr>
                  
                })
            }
          
        </tbody>
      </Table>

      </div>):(<h1> hloloooo</h1>)}


    </div>
  )
}
