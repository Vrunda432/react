import React, { useReducer } from 'react'
import { Button, Input } from 'reactstrap'

export default function TaskReducer() {

      const reducer=(state,action)=>{
       if(action.actiontype === "INC"){
        return {count:state.count+1}
               }
        else{
          return {count:state.count}
        }

      
    }
    const[count,dispatch]=useReducer(reducer,{count:100})

    
  return (
    <>


      <div className='mb-25'>
        


        <Input onChange='' className='w-50 m-auto'/>
        
        <Button  className='w-15 mt-5' onClick={()=>dispatch({actiontype:"INC",payload:20})}>INC By NUM</Button>
        
       
      </div>



    </>
       
  )
}
