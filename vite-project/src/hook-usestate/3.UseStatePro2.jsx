import React, { useState } from 'react'
import { Button } from "reactstrap";
export default function UseStatePro2() {

    const colArr=["yellow","red","green","pink","black","purple","blue"];
    let [index,setindex]=useState(0);
    let changeindex=()=>{
       if(index >colArr.length-2){
        setindex(0);
       }else{
        setindex(index+1);
       }
    
       
    }
  return (
    <div className='d-flex flex-colum justity-content-center'>
        <h1>{index}</h1>
        <div style={{
            padding:"10px",

            textAlign:"center",
            backgroundColor: colArr[index],
            
        }}
            className="m-5">
                <h1>heloooooo world</h1>
        </div>
        <Button onClick={()=> changeindex()}>change</Button>
        </div>
  )
}

