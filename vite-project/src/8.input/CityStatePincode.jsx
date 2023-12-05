import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { toast } from 'react-toastify'

export default function CityStatePincode() {
  const[data,SetAlldata]=useState({
    city:"",
    State:"",
    pincode:"",
    
  })
  const[Alldata,setData]=useState([])
  const getdata=()=>{
    if(data.city.length>0){
      setData([...Alldata,data])
    SetAlldata({
      city:"",
      State:"",
      pincode:"",
    }

    )
    toast.success("sucessfully added dataa.")}

    else{
     toast.error("plz fill your dataaaa")
    }

    

  }
        
    
  
  return (
    <div>
     <Form>
        <FormGroup>
          <Label for="city">city</Label>
          <Input type="city" name="city" id="city" placeholder="Enter your city" 
          value={data.city}
          onChange={(e)=>SetAlldata({...data,city:e?.target?.value})}/>
        </FormGroup>
        <FormGroup>
          <Label for="State">State</Label>
          <Input type="State" name="State" id="State" placeholder="Enter your state" 
           value={data.State}
          onChange={(e)=>SetAlldata({...data,State:e?.target?.value})}/>
        </FormGroup>
        
        
        <FormGroup>
          <Label for="pincode">pincode</Label>
          <Input type="pincode" name="pincode" id="pincode"
           value={data.pincode}
           onChange={(e)=>SetAlldata({...data,pincode:e?.target?.value})}/> 
        </FormGroup>
        
        
       
        
        <Button color="danger className=w-100" onClick={getdata}>Submit</Button>
      </Form>


      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>city</th>
            <th>State</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {
            Alldata.map((e)=>{
              return<tr>
              <th scope="row">1</th>
              <td>{e.city}</td>
              <td>{e.State}</td>
              <td>{e.pincode}</td>
            </tr>
            })
          }
          
          
          
        </tbody>
      </Table>


    </div>
  )
}
