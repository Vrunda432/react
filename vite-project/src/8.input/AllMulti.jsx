import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap';

export default function AllMulti() {
    const[data,SetData]=useState(
    {
     email:"",
     password:"",
    }
    );
    const[AllData,setAlldata]=useState([])

   const adddata=()=>{
    if(indata.email.length  >0 ){
    data([...AllData,setAlldata])
    SetData({
        email:"",
        password:"",
    })
    }}
  return (
    <div>
        <h1>{data.email}</h1>
    <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email"
          onChange={(e)=>SetData({...data,email:e?.target?.value})} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" 
          onChange={(e)=>SetData({...data,password:e?.target?.value})}/>
        </FormGroup>
        
        
        
       
        <Button color="danger" onClick={adddata}>Submit</Button>
      </Form>
 <div>

 <Table>
        <thead>
          <tr>
            <th>#</th>
            
            <th>Emain</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
            {
                AllData.map((e)=>{
                    return <tr>
                    <th scope="row">1</th>
                    
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                  </tr>
                  
                })
            }
          
        </tbody>
      </Table>
 </div>


    </div>
  )
}
