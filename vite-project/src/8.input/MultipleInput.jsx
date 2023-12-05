import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'

export default function MultipleInput() {
  // {
  //   email:"test@gamil.com",
  //   password:"1234"
  // } 
       let [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
       })
        let [alluser,setAlluser]  =useState([''])
   

const getdata=(ele)=>{
  setUser(ele.target.value) 
  // console.log(ele.target.value);

}
const adddata =()=>{
  setAlluser([...alluser,user]);
  setUser('')
}


  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.password}</h1>
       <Form className='border border-dark p-3 rounded-3'>
       <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="name" value={user.name} onChange={(e)=>setUser({name:e?.target?.value})} name="name" id="exampleEmail" placeholder="Enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" value={user.email} onChange={(e)=>setUser({email:e?.target?.value})} name="email" id="exampleEmail" placeholder="Enter your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" onChange={(e)=>getdata(e)} name="password" id="examplePassword" placeholder="Enter your password" />
        </FormGroup>
      
       
        
        <Button color="danger"onClick={adddata}>Submit</Button>
      </Form>


       <div>
      { alluser.map((e,m)=>{
        return <h1 key={m}>{e}</h1>
       })}
       </div>
    </div>

  )
}


      