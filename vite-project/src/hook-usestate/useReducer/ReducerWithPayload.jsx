import React, { useReducer } from 'react'
import { Button } from 'reactstrap';

export default function ReducerWithPayload() {
    const reducer =(state,action)=>{
        console.log(state,action)
        if(action.actionType ==="INC"){
            return {count:state.count+action?.payload};
        }else{
            return state;
        }
    
    };
    
    let [count,dispatch]=useReducer(reducer,{count:1000});

  return (
    <div>
      <h1>count is {count.count}</h1>  
      <Button onClick={()=>dispatch({actionType:"INC",payload:10})}>INC By Number</Button>
    </div>
  )
}
