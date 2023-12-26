import { Eye } from 'lucide-react'
import React, { useState } from 'react'
import { Form, useSearchParams } from 'react-router-dom'
import {  Table } from 'reactstrap'
import ModalFullscreen from './ModelSerach'

export default function Serachparam() {

  let usedetails=[
    {
      name:"vrunda",age:28,city:"surat"
    },
    {
      name:"hiral",age:29,city:"valasd"
    },
    {
      name:"teju",age:10,city:"anand"
    },
    

  ]

     const[passdataa,setPassdata]=useSearchParams()


     
      const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const passdata=(e)=>{
    toggle()
    setPassdata(e)
  }
  
  return (
    <>
      <ModalFullscreen modal={modal} toggle={toggle}/>
      <Table className='m-auto mt-5 w-25'>
  <thead>
    <tr>
      <th>
        sr.
      </th>
      <th>
         Name
      </th>
      <th>
       age
      </th>
      <th>
        city
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    {
      usedetails.map((e,i)=>{
        return (<tr key={i}>
          <th scope="row">
           {i+1}
          </th>
          <td>
           {e.name}
          </td>
          <td>
           {e.age}
          </td>
          <td>
           {e.city}
          </td>
          <td>
          <Eye  role="button" onClick={()=>passdata(e)} />
          </td>
        </tr>)
      })
    }
    
     
  </tbody>
</Table>
  
 
  
  
     
      

  

       
       
   </>
  )
}
