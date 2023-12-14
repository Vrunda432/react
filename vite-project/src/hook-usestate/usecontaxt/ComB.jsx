import React, { useContext } from 'react'
import ComB3 from './ComB2'
import {CityContext} from './UseContaxtCom'

export default function ComB() {
  const data2=useContext(CityContext);
  return (
    <>
    <h1>my city name {data2}</h1>
    <ComB3/>
   </>
  )
}
