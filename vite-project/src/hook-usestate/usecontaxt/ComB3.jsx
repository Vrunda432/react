import React,{useContext} from 'react'
import {NameContaxt} from './UseContaxtCom'
export default function ComB3(name3) {
  const data =useContext(NameContaxt)
  return (
    <>
    <h1>my name is{data}</h1>
   
    </>
  )
}
