import React, { useReducer } from 'react'
import { Button } from 'reactstrap'



export default function UseReducerCom() {


  const reducer=(state,action)=>{
    if(action === "inc"){
     
      
       return {count:state.count+1}
    }   else if(action==="dec"){
      return {count:state.count-1}
    }else{
      return{count:state.count}
    }
    
  }
  const [number,dispach]=useReducer(reducer,{count:100})
  return (
    <div>
      
      
      <h1>count: {number.count}</h1>
      
      <Button onClick={()=>dispach("inc")}>Inc</Button>
      <Button onClick={()=> dispach("dec")}>Dec</Button>
      
      
      </div>
  )
}
