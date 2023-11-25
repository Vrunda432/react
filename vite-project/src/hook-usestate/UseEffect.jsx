import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'

export default function UseEffect() {
  const[count,setCount]=useState(0)
//   useEffect(()=>{
//     alert("heloooo")
//   },)

//   useEffect(()=>{
//     alert("========without value")
//   },[])

useEffect(()=>{
    if(count % 5=== 0 && count!== 0)
     alert("--------count chnge-------")
},[count])

  return (
    <div>UseEffect

<h1>
    {count}
</h1>

<Button style={{padding:"10px 20px",background:"red",color:"white"}} onClick={()=>setCount(count+1)}>click

</Button>
<hr/>
<h1>{count}</h1>

<Button style={{padding:"10px 20px",background:"red",color:"white"}} onClick={()=>setCount(count+1)}>click

</Button>







    </div>
    
  )
}
