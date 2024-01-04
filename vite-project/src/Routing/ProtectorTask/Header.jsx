import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate=useNavigate();
  const userlogin=()=>{
    //localStorage.setItem("passdata",JSON.stringify({login:true,usertype:"super",}))
     //localStorage.setItem("passdata",JSON.stringify({login:true,usertype:"admin",}))
    //localStorage.setItem("passdata",JSON.stringify({login:true,usertype:"employee",}))
   // localStorage.setItem("passdata",JSON.stringify({login:true,usertype:"user",}))
    //localStorage.setItem("passdata",JSON.stringify({login:true,usertype:"profile",}))
  }


  const userlogout=()=>{
    localStorage.removeItem("passdata")
    navigate("/")
  }
  return ( 

    <>
    
    <div className='d-flex py-3 justify-content-around'>
    <ul className='d-flex gap-5' >
  <li> 

    <NavLink to={"/"}>Home</NavLink>

  </li>
  <li> 

    <NavLink to={"/employee"}>Employee</NavLink>

  </li>
  <li> 


    <NavLink to={"/superAdmin"}>SuperAdmin</NavLink>
  </li>
  <li> 


    <NavLink to={"/admin"}>Admin</NavLink>
  </li>
  <li> 

    <NavLink to={"/Profile"}>Profile</NavLink>

  </li>

  <li>
    <NavLink to ={"/user"}>User</NavLink>
  </li>
 </ul>

        
        
<div>




<Button className='btn-danger ms-3'onClick={userlogin} >
     Login</Button>

  <Button className='btn-danger ms-5' onClick={userlogout}>Logout</Button>
       </div>
</div>

 
    
    
    
    </>
    
  )
}
