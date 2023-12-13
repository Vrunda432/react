import React, {createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'
import ComB2 from './ComB2'
// import { useCol } from 'react-bootstrap/esm/Col'
export const NameContaxt=createContext();

export default function UseContaxtCom() {
    const[name,setName]=useState("vrunda patel");

  return (
    <>
    <NameContaxt.Provider value={name}>

    <ComB name={name}/>
    </NameContaxt.Provider>
    <ComA/>
   
    <button></button>
    
    </>
  )
}

// name="vrunda"
// useContaxt-comA
//           -ComB
//               -ComB2
//               -ComB3