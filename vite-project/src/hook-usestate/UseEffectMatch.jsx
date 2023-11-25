import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';

export default function UseEffectMatch() {
    const [index,setindex]=useState(0)
    // const[chngeindex,setchnageindex]=useState(0)
    const namearry1=["vrunda","ishan","komal","karan","harshad","kishor","heena"];

    const namearray2=["komal","karan","heena"]

    function namefst(){
      setindex(index+1)
      if(index >namearry1.length-2){
        setindex(0);

      }
    }
    useEffect(()=>{
      const originalName=namearry1[index];
      if(namearray2.includes(originalName)){
        alert("this name present in second array")
      }
    })
  return (
    <div>
        <h1>
{namearry1[index]}
</h1>

<Button style={{padding:"10px 20px",background:"red",color:"white"}} onClick={namefst}>click

</Button>
        
        
        </div>
  )
}
