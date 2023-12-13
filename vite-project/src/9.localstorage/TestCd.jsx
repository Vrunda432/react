import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function TestCd() {
   const [data,SetData]=useState({
     Name:"",
     Email:"",
     Password:"",
    })
    const[alldata,SetAllData]=useState([])

    const[index,Setindex]=useState(null)


    const getdata=()=>{
        // if(data.Name.length>0 && data.Email.length >0 &&data.Password.length>0){
        SetAllData([...alldata,data]);
        SetData({
            name:"",
            email: "",
            password: "",
          });
       
    }
      const deletedata=(index)=>{
    const aftrdlt =  alldata.filter((e,i)=>{
         return i==! index;
        });
        SetAllData(aftrdlt);
      }
    const editdata=(data,index)=>{
        SetData(data);
        Setindex(index);
    }

    const updatedata=()=>{
        if(index || index==0)alldata.splice(index,1,data);
        SetData([...alldata]);
        SetData({
            Name:"",
            Email:"",
             Password:"",
        })
        Setindex(null);
    }
  return (
    <div>
        <Form className='w-50 mt-5 m-auto'>

        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="Name" name="Name" id="exampleName" placeholder=" Enter your Name" 
           value={data.Name} onChange={(e)=>SetData({...data,Name:e?.target?.value})}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" 
           value={data.Email} onChange={(e)=>SetData({...data,Email:e?.target?.value})}
           />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" 
           value={data.Password} onChange={(e)=>SetData({...data,Password:e?.target?.value})}/>
           
        </FormGroup>
        
        <Button onClick={()=>getdata(e,i)}>Submit</Button>
        <Button onClick={updatedata}>Update</Button>
      </Form>
      <Table dark className='w-50 mt-5 m-auto'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>submit&Update</th>
          </tr>
        </thead>
        <tbody>
            {
                alldata.map((e,i)=>{
                    return (<tr Key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.password}</td>
                        <td>
                         <Button onClick={()=>editdata(e,i)}>Edit</Button>
                         <Button onClick={()=>deletedata(e,i)}>delete</Button>
            
                        </td>
                      </tr>)
                })
            }
          
         
          
        </tbody>
      </Table>
        </div>
  )
}
