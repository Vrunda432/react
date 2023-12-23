// import React, { useEffect, useState } from 'react'
// import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

// export default function CurdTest() {
//   const[user,SetUser]=useState({
//      email:"",
//      password:"",
//   })
//  const[alldata,setAlldata] =useState([])
//  const[index,Setindex]=useState(null)

//  const getdata=(e,i)=>{
//   if(user.email.length>0 && user.password.length>0)
//   setAlldata([...alldata,user]);
// localStorage.setItem("jsnkey",JSON.stringify([...alldata,user]))
//   SetUser({
//     email:"",
//     password:"",
// })
//  }
//  useEffect(()=>{
//   const jsndata=localStorage.getItem("jsnkey")
//   const normaldata=JSON.parse(jsndata)
//   setAlldata(normaldata)

//  },[])


//  const deletedata=(e,i)=>{
//   const afterdelete=  alldata.filter((e,i)=>{
//       return i!== index
      
//     })
//     localStorage.setItem("jsnkey",JSON.stringify(afterdelete))
//     setAlldata(afterdelete);
//  }

//  const editdata=(data,upindex)=>{
//   SetUser(data)
//   Setindex(upindex)
//  }

//  const updatedata=()=>{
//   if(index || index==0)
// alldata.splice(index,1,user)
// setAlldata([...alldata])
// localStorage.setItem("jsnkey",JSON.stringify([...alldata]))
// SetUser({
//   email:"",
//   password:"",
//  })
//  Setindex(null)
//  }
//   return (
//     <div>

//         <Form className='w-50 mt-3 m-auto'>
//         <FormGroup>
//           <Label for="exampleEmail">Email</Label>
//           <Input type="email" name="email" id="exampleEmail" placeholder="enter your email " 
//           value={user.email} onChange={(e)=>SetUser({...user,email:e?.target?.value})}/>
//         </FormGroup>
//         <FormGroup>
//           <Label for="examplePassword">Password</Label>
//           <Input type="password" name="password" id="examplePassword" placeholder="enter your password "
//           value={user.password} onChange={(e)=>SetUser({...user,password:e?.target?.value})} />
//         </FormGroup>
        
        
        
//        <Button onClick={()=>getdata()}>Submit</Button>
//        <button onClick={updatedata}>update</button>
//       </Form>
    

    


//     <Table dark className='w-50 mt-3 m-auto'>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>email</th>
//             <th>password</th>
//             <th>edit&delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             alldata.map((e)=>{
//               return (
//                 <tr>
//             <th scope="row">1</th>
//             <td>{e.email}</td>
//             <td>{e.password}</td>
//             <td>
//               <Button onClick={()=>editdata(e,i)}>edit</Button>
//               <Button onClick={()=>deletedata(e,i)}>delete</Button>
//             </td>
//             </tr>
//               )
//             })
//           }
          
          
          
//         </tbody>
//       </Table>
//     </div>

  

   
//   )
// }

