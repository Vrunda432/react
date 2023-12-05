import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function Delete() {
    const[indata,setIndata]=useState({
        
        email:"",
        city:" ",
         password:"",
        })
    
      const [alldata,setAlldata]= useState([])
     const getdata =()=>{
        if(indata?.email?.length  >0 && indata?.email?.length>0){
        setAlldata([...alldata,indata])   
        setIndata({
            email:"",
            city:" ",
             password:"",
        })
        toast.success("sucessfully added");
        setIndata({
          email:"",
          city:" ",
           password:"",
      })
        }else{
          toast.error("plz enter your details")
        } 
    
    
     };
     const deleteHandlar=(index)=>{
      //console.log("------index")
      //delete with splice
      //alldata.splice(index,1)
      //indata([...alldata]);
      
      //filter with delete
     let filterdata= alldata.filter((e,i)=> i !== index);
    //  consolg.log("filterdata");
    setAlldata([...filterdata]);
     }
  return (
    <div>

  {/* 
        <h1>{indata.email}</h1>
        <h1>{indata.city}</h1>
        <h1>{indata.password}</h1> */}
     <Form className='w-100 mt-5 border boder-dark'>

     <FormGroup>
  <Label for="exampleEmail">Email</Label>
  <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email"
   value={indata.email}
   onChange={(e)=>setIndata({ ...indata,email:e?.target?.value})}
  />
</FormGroup>
        

<FormGroup>
  <Label for="city">city</Label>
  <Input type="text" name="city" id="exampleage" placeholder="Enter your city"
   value={indata.city}
   onChange={(e)=>setIndata({ ...indata,city:e?.target?.value})}
  />
</FormGroup>


<FormGroup>
  <Label for="examplePassword">Password</Label>
  <Input type="password" name="password" id="examplePassword" placeholder="password please"
   value={indata.password}
   onChange={(e)=>setIndata({ ...indata,password:e?.target?.value})}
  />
</FormGroup>



<Button color="danger " onClick={getdata} className=''>Submit</Button>
</Form>

{alldata.length >0?(
<div>
<Table>
<thead>
  <tr>
    <th>1</th>
    <th>Email</th>
    <th>city</th>
    
    <th>Password</th>
    <th>action</th>
  </tr>
</thead>
<tbody>
    {
        alldata.map((e,i)=>{
            return <tr key={i}>
            <th scope="row">{i+1}</th>
            
            <td>{e.email}</td>
            <td>{e.city}</td>
            <td style={{color:"green"}}>{e.password} </td>
            <td>
              <Button onClick={()=>deleteHandlar(i)} color="danger">Delete</Button>
              </td>
          </tr>
          
        })
    }
  
</tbody>
</Table>

</div>):(<h1> </h1>)}


 
    </div>
  )
}
