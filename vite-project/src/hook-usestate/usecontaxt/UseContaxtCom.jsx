import React, { createContext, useState } from 'react'
import ComA from './ComA';
import ComB from './ComB';

export const ValueChange=createContext();
export const CityContext=createContext();
export default function UseContaxtCom() {
const [name,SetName] =useState("vrunda patel");
//const [age,SetAge]=useState(28);
const [city,setCity]=useState("surat");
   
  return (
    <div>
      
      <ValueChange.Provider value={name}>
   <ComA/>
   <CityContext.Provider value={city}>
      
     <ComB/>
   </CityContext.Provider>
 
      </ValueChange.Provider>
      
      
    
      UseContaxtCom</div>
  )
}
