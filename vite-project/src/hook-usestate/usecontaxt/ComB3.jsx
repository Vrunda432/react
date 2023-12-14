import React,{useContext} from 'react'
import {ValueChange} from './UseContaxtCom'
export default function ComB3(name3) {
  const data =useContext(ValueChange)
  //const data2=useContext(AgeContext);
  
  return (
    <>
    <h1>my name is{data.name}</h1>
    <h1>my name is {data.age}</h1>
   
    </>
  )
}
