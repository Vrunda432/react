import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap';

export default function UseReducerCom() {
    //let[count,setCount]=useState(0);

    const reducer=(state,Action)=>{
     if(Action === "Inc"){
        return state+1;
     }
      else if(Action === "Dec"){
        return state-1;
      }
      else {
        return state;      }
    }
    let [count,Dispatch]=useReducer( reducer,1000)
  return (
    <div>
        <h1>Count is{count}</h1>
        <Button onClick={()=>Dispatch("Inc")}>Inc</Button>
        <Button onClick={()=>Dispatch("Dec")}>Dec</Button>
        <Button onClick={()=>Dispatch("Dec-4")}>Dec</Button>
        
       </div>
  )
}
