import React from 'react'
import { Button } from 'reactstrap'

export default function LocalStorageRev() {
  return (
    <>
      <Button  className='m-2'onClick={()=>localStorage.setItem("name","vrunda")}>add name key</Button>
      <Button  className='m-2'>add age key</Button>
      <Button  className='m-2'>remove name</Button>
      <Button  className='m-2'>remove all</Button>





    </>
  )
}
