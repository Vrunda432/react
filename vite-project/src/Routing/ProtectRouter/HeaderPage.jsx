import { Eye } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function HeaderPage() {
  return (
    <div>
      
      
 <ul>
  <li> 

    <NavLink to={"/"}>home</NavLink>

  </li>
  <li> 

    <NavLink to={"/Contact"}>Contact</NavLink>

  </li>
  <li> 

    <NavLink to={"/About"}>About</NavLink>

  </li>
  <li> 

    <NavLink to={"/Service"}>Service</NavLink>

  </li>
 </ul>
 <div>

  <Button>
    Login
  </Button>

  <Button>LogOut</Button>
 </div>
      
      </div>
  )
}
