//import { ChevronLast } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function ExLocalStorage() {
   const [data,Setdata]=useState(
    {
       email:"",
       password:"", 
    }
   );
   const[alldata,Setalldata]=useState([])

  const [index,Setindex]=useState(null)
 
  const getdata=((e)=>{
    if(data.email.length>0 ){
    Setalldata([...alldata,data]);
    localStorage.setItem("setitems",JSON.stringify([...alldata,data]));
    Setdata(
        {
           email:"",
           password:"", 
        })
    }  
    else
    {
      toast.error("plz submit your details")
    }
  })
  useEffect(()=>{
   const jsondata= localStorage.getItem("setitems");
   const normaldata=JSON.parse( jsondata);
   Setalldata(normaldata);
  },[])
  

  const deletedata=(ele)=>{
 const afterdelete=alldata.filter((e,i)=>{
    return i!== ele
    
 })
 localStorage.setItem("setitems",JSON.stringify(afterdelete));
 Setalldata(afterdelete);
  }

  const Editdata=(ele,i)=>{
    Setdata(ele)
    Setindex(i)
  }


  const updatedata=()=>{
    if(index||index===0){
    alldata.splice(index,1,data);
    Setalldata([...alldata])
    Setdata(
        {
           email:"",
           password:"", 
        })}
        
        Setindex(null);
       

  }
  

  return (
    <div>
    <Form className='w-50 mt-5 m-auto'>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Enter your email"
      type="email"
      value={data.email}
      onChange={(e)=>Setdata({...data,email:e?.target?.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="enter your password "
      type="password"
      value={data.password}
      onChange={(e)=>Setdata({...data,password:e?.target?.value})}

    />
  </FormGroup>
  {
    !(index||index===0)?(
       
    
  <Button onClick={(e)=>getdata(e)}>
    Submit
  </Button>):(
  <Button onClick={updatedata}>Update</Button>)
}
   
</Form>
    

<Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Email
      </th>
      <th>
        password
      </th>
      <th>
   action
      </th>
    </tr>
  </thead>
  <tbody>
    {
        alldata.map((e,i)=>{
            return (
                <tr>
      <th scope="row">
        1
      </th>
      <td>
       { e.email}
      </td>
      <td>
      { e.password}
      </td>
      <td>
       <Button  onClick={()=>deletedata(i)} className="gap-4">delete</Button>
       <Button onClick={()=>Editdata(e,i)}className='ms-3'>Edit</Button>
      </td>
    </tr>
            )
        })
    }
    
    
    
  </tbody>
</Table>
    </div>
  )
}
