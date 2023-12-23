import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'


let namearr=[
  {
    name:"rani",age:29,city:"surat",
   
  },
  {
    name:"komal",age:32,city:"baroda",
  },
  {
    name:"hina",age:53,city:"anand",
  }
]

export default function UserTask() {

  const navigate=useNavigate()
  return (
    <div className='d-flex justify-content-center   bg-danger-subtle' style={{height:"80vh", alignItems:"center"}}>
        
        
       <div>
       <Table>
  <thead>
    <tr>
      <th>
      sr.
      </th>
      <th>
        Name
      </th>
      <th>
        Age
      </th>
      <th>
        City
      </th>
    </tr>
  </thead>
  <tbody>
    {
      namearr?.map((e,i)=>{
        return(<tr key={i}>
          <th scope="row">
           {i+1}
          </th>
          <td role="button" onClick={()=>navigate(`/showname/${e.name}`)}>
           {e.name}
          </td>
          <td role="button" onClick={()=>navigate(`/showage/${e.age}`)}>
           {e.age}
          </td>
          <td role="button" onClick={()=>navigate(`/showcity/${e.city}`)}>
           {e.city}
          </td>
        </tr>)
      })
    }
    
    
   
  </tbody>
</Table>


        
       </div>
        
    </div>
  )
}
