import { Eye } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function HeaderPage() {
   const userlogin=()=>{
    localStorage.setItem("userdata",
    //for admin
    //JSON.stringify({userdata:true,usertype:"admin"})
   // )

    // for normall user
    JSON.stringify({userdata:true,usertype:"user"})
    )
   };
   const userlogout=()=>{
    localStorage.removeItem("userdata")
   }
  return (
    <div >
      
      
 <ul>
  <li> 

    <NavLink to={"/"}>home</NavLink>

  </li>
  <li> 

    <NavLink to={"/Contact"}>Contact</NavLink>

  </li>
  <li> 


    <NavLink to={"/about"}>About</NavLink>
  </li>
  <li> 


    <NavLink to={"/admin"}>Admin</NavLink>
  </li>
  <li> 

    <NavLink to={"/Profile"}>Profile</NavLink>

  </li>
 </ul>


 <div>

  <Button className='btn-danger ms-3'onClick={userlogin} >
     Login</Button>

  <Button className='btn-danger ms-5' onClick={userlogout}>Logout</Button>
 </div>
      
      </div>
  )
}
