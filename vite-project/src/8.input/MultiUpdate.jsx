import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
export default function MultiUpdate() {
   const[user,setUser]=useState({
    email:"",
    password:"",
   })
     const[alldata,setAlldata]=useState([])

     const[updateindex,SetIndex]=useState(null)
const getdata=(ele)=>{
  if(user.email.length>0 && user.password.length>0){
     
  
    setAlldata([...alldata,user]);
    setUser({
      email:"",
      password:"",
    })
    toast.success("sucessfully added")
  }else{
    toast.error("plz enter your details")
  }
}

 const geletedata=(index)=>{
  const afterdelete=alldata.filter((e,i)=>{
   return i !==index
    
  })
  setAlldata(afterdelete);


 }
 const editdata=(e,i)=>{
    setUser(e)

 }

 const updateData=()=>{
  alldata.splice(updateindex,1,user)
  setUser([...alldata])
  setUser({
    email:"",
    password:"",
  })
  SetIndex(null)
 }

return (
    <div>
      <h1>{user.email}</h1>
      <h1>{user.password}</h1>
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool"
          value={user.email}
          onChange={(e)=>setUser({...user,email:e?.target?.value}) }/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" 
           value={user.password}
           onChange={(e)=>setUser({...user,password:e?.target?.value}) }
          />
        </FormGroup>
        <Button onClick={(e)=>getdata(e)}>Submit</Button>
        <Button onClick={(e)=>updateData(e)}>update</Button>

      </Form>
      
      <div>
        
<Table className='w-50'>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>password</th>
            <th>Delete& Update</th>
          </tr>
        </thead>
        <tbody>
          {
           alldata.map((e,i)=>{
            return( <tr key={i+1}>
            <th scope="row">1</th>
            <td>{e.email}</td>
            {e.password.length <5?(
            <td style={{color:"red"}}>{e.password}</td>):(<td style={{color:"green"}}>{e.password}</td>)
           }
            <td><Button onClick={()=>geletedata(i)} color="danger"> Delete</Button>
            <Button className='ms-3' onClick={()=>editdata(e,i)}>Edit</Button>
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












// import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

// export default function MultiUpdate() {
//   const[indata,setIndata]=useState({
    
//       email:"",
//       password:"",
//     });

//     let[index,SetIndex]=useState(null);
//     const [alldata,setAlldata]= useState([])
//  const getdata =()=>{
//     if(indata?.email?.length  >0 && indata?.password?.length>0){
//     setAlldata([...alldata,indata])   
//     setIndata({
     
//       email:"",
//       password:"",
//     })
//     toast.success("sucessfully added your details")
//     setIndata({
//           email:"",
//           password:"",
//       })
//     }else{
//       toast.error("plz enter your details")
//     } 


//  }
//  const UpdateData=()=>{
//   //null/0/false/undefined
//   if(index || index=== 0){
//     alldata.splice(index,1,indata);
//   setIndata([...alldata])
//   setIndata({
//           email:"",
//           password:"",
//   })
//   SetIndex(null);
//   }else{
//     toast("plz select data")
//   }
  

//  }

//  const UpdateHandlar=(data,index)=>{
//   // setIndata({
//   //     email:"",
//   //     password:"",
//   // })
//   setIndata(indata);
//   SetIndex(index);
//  }

//   return (
//     <div>

      
// {/*         
//         <h1>{indata.email}</h1>
//         <h1>{indata.password}</h1> */} 
//      <Form>


        



// <FormGroup>
//   <Label for="exampleEmail">Email</Label>
//   <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email"
//    value={indata.email}
//    onChange={(e)=>setIndata({ ...indata,email:e?.target?.value})}
//   />
// </FormGroup>
// <FormGroup>
//   <Label for="examplePassword">Password</Label>
//   <Input type="password" name="password" id="examplePassword" placeholder="password please"
//    value={indata.password}
//    onChange={(e)=>setIndata({ ...indata,password:e?.target?.value})}
//   />
// </FormGroup>


//   {index || index ===0?(
//     <Button color="danger" onClick={getdata} className='w-30'>Submit</Button>
//   ):
//   (
//     <Button color="danger" onClick={ UpdateData} className='w-30 m-5'>update</Button>
//   )
// }




// </Form>

// {alldata?.length >0?(
// <div>
// <Table>
// <thead>
//   <tr>
//     <th>1</th>
   
    
//     <th>email</th>
//     <th>Password</th>
//     <th>Action</th>
//   </tr>
// </thead>
// <tbody>
//     {
//         alldata.map((e)=>{
//             return <tr>
//             <th scope="row">1</th>
            
//             <td>{e.email}</td>
//             <td>{e.password}</td>
//             <td>
//               <Button onClick={()=>UpdateHandlar(e,i)} color="danger">update</Button>
//               </td>
//           </tr>
          
//         })
//     }
  
// </tbody>
// </Table>

// </div>):(<h1></h1>)}


// </div>
    
//   )
// }
