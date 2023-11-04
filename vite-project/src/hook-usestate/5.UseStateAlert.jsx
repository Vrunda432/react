import React, { useState } from 'react'

export default function UseStateAlert() {
    const colorArr=["red","yellow","blue","pink","coral","purple","sky"];
    let[index,setindex]=useState(0);
    const changeindex=()=>{
        if(index >colorArr.length-2){
          
            setindex(0);
            confirm("hellooo hiii");
        }else{
            setindex(index+1);
        }
    }
  return (
    <div>UseStateAlert</div>
  )
}
