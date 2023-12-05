import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function Use() {
   const [data,Setdata]=useState({
    city:"",
    State:"",
    pincode:"",
   })
   const[alldata,SetAlldata]=useState()
   const getdata =()=>{
    if(data.city.length>0){
        SetAlldata([...alldata,data])
        Setdata({
            city:"",
            State:"",
            pincode:"",
        })
        toast.success("your details sucessfly added")}

        else{
            toast.error("plz fill your details")
            
        }
    }
   
   
  return (
    <div>

<Form>
        <FormGroup>
          <Label for="city">city</Label>
          <Input type="city" name="city" id="city" placeholder="Enter your city" 
          value={data.city}
          onChange={(e)=>Setdata({...data,city:e?.target?.value})}/>
        </FormGroup>
        <FormGroup>
          <Label for="State">State</Label>
          <Input type="State" name="State" id="State" placeholder="Enter your state" 
          value={data.State}
          onChange={(e)=>Setdata({...data,State:e?.target?.value})}/>
        </FormGroup>

        <FormGroup>
          <Label for="Pincode">Pincode</Label>
          <Input type="Pincode" name="Pincode" id="Pincode" placeholder="Enter your pincode"
          value={data.pincode}
          onChange={(e)=>Setdata({...data,pincode:e?.target?.value})} />
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
            alldata.map((e)=>{
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
