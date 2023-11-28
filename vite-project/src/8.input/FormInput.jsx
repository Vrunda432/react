import React, { useState } from 'react'
import { Button,Input,Label } from 'reactstrap';

export default function FormInput() {
    const [user,setuserInfo]=useState("");
    const[alluser,setAlluserInfo]=useState([]);
    

    const getInfo=(ele)=>{
        setuserInfo(ele.target.value);
    }

    //add task to array//
    const addData=()=>{
        setAlluserInfo([...alluser,user]); 
        setuserInfo("");
    }

  return (
    <>
    <div className="text-center w-500 border border-warning ronded-5 p-4 mt-5">
 <h1>
    {}
 </h1>
        <Label>
            Details About User
        </Label>
        <hr/>
        <Input className="border border-primary ronded-5 p-4 mt-5" placeholder="add some data" onChange={(e)=>getInfo(e)}/>
        <Input className="border border-primary ronded-5 p-4 mt-4" placeholder="add some infomation" onChange={(e)=>getInfo(e)}/>


        <Button onClick={()=>addData()} className="w-100 mt-3 btn btn-outline-danger" color="secondary">click</Button>
    </div>

    <div className="text-center w-500 border border-danger ronded-5 p-4 mt-5">
        <checkbox className="text-center">fill the details</checkbox>
{
    alluser.map((e,i)=>{
        return <h1>{i+1}.{e}</h1>
    })
}

    </div>

   </> 
  )
}
