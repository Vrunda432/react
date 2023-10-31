import { Button } from 'reactstrap';
import React, { useState } from 'react';

export default function UseStatepro() {
    let[color,setcolor]=useState("pink");

    let[text,settextcolor]=useState("yellow");


    const changecolor=()=>{
        setcolor("purple");
        settextcolor("blue");
    }
  return (
    <div className='d-flex flex-colum justity-content-center'>
        <div style={{
            padding:"5px",
            textAlign:"center",
            backgroundColor:color,
            color:text,
        }}
            className="m-5">
                <h1>heloooooo world</h1>
        </div>
  <Button onClick={()=>changecolor()}>changecolor</Button>

    </div>
  )
}
