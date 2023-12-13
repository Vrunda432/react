import React ,{useEffect, useRef}from 'react'
import { Button, Input } from 'reactstrap'

export default function UseRefCom() {
    const divRef=useRef(null);
    const inputRef=useRef(null);

    const chnagecolor=()=>{
        console.log("------",divRef);
        divRef.current.style.backgroundcolor="black"
        divRef.current.style.color="white";
        divRef.current.innertext="helloooo";
        inputRef.current.value="plzz serach here";
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const changeInput=()=>{
        inputRef.current.value="plz search value "
    }
  return (
    <>
      <div className='mt-5' style={{width:"100px",height:"100px", backgroundColor:"red"}}
      ref={divRef}>
        
       
        
        </div>  
        <Button className="mt-5"onClick={chnagecolor}>change color</Button>
        <Button className="mt-5"onClick={changeInput}>change color</Button>

        <input className='w-25'ref={inputRef}/>
      </>
  )
}
