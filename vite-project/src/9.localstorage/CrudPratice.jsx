import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function CrudPratice() {
               const [user,setUser]=useState({
                    email:"",
                    password:"",
                })

                const[alldata,setAlldata]=useState([])

              const [index,Setindex] =useState(null)


     const Getdata=()=>{
        if(user.email.length>0 &&  user.password.length>0 )
        setAlldata([...alldata,user]);
    localStorage.setItem("jsonkey",JSON.stringify([...alldata,user]))
        setUser({
            email:"",
            password:"",
        })

     }    
     useEffect(()=>{
       const josndata=localStorage.getItem('jsonkey')
       const normaldat=JSON.parse(josndata)    
       setAlldata(normaldat)  
     },[])
   const  deletedata=(index)=>{
    const afterdelete=  alldata.filter((e,i)=>{
     return i !==index
    })
    localStorage.setItem("jsonkey",JSON.stringify(afterdelete))
    setAlldata(afterdelete)

   }

   const editdata=(data,upindex)=>{
    setUser(data)
    Setindex(upindex)
   }

   const updatedata=()=>{
    if(index || index==0){
     alldata.splice(index,1,user)
     setAlldata([...alldata])
     localStorage.setItem("jsonkey",JSON.stringify([...alldata]))
     setUser({
         email:"",
         password:"",
        })
        Setindex(null)}
   }
  return (
    <div>
       <Form className='w-50 mt-5 m-auto'>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      value={user.email}
      onChange={(e)=> setUser({...user,email:e?.target?.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      value={user.password}
      onChange={(e)=> setUser({...user,password:e?.target?.value})}
    />
  </FormGroup>

  <Button onClick={()=>Getdata()}>
    Submit
  </Button>
  <Button onClick={updatedata}>update</Button>
</Form> 
        
      <div>
      <Table className='w-50 mt-2 m-auto'
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        email
      </th>
      <th>
        password
      </th>
      <th>
        edit&delte
      </th>
    </tr>
  </thead>
  <tbody>
    {
        alldata.map((e,i)=>{
            return ( <tr>
                <th scope="row">
                  1
                </th>
                <td>
                 {e.email}
                </td>
                <td>
                  {e.password}
                </td>
                <td>
                 <Button className='me-3'onClick={()=>deletedata(i)}>  delete</Button>
                 <Button onClick={()=>editdata(e,i)} >Edit</Button>
                </td>
              </tr>

            )
        })
    }
    
   
  </tbody>
</Table>
        
    </div>   
    
        
        
        
    </div>
  )
}




























// import React, { useEffect, useState } from 'react'
// import { Button, Form, FormGroup, Table } from 'react-bootstrap';
// import { Input, Label } from 'reactstrap';
// import { toast } from "react-toastify";


// export default function CrudPratice() {

//     const [user, setUser] = useState({
//         email: "",
//         password: "",
//       });
//       const [alldata, setAlldata] = useState([]);
//       const [upindex, setUpindex] = useState(null);
    
//       const getdata = () => {
//         if (user.email.length > 0) {
//           const match = alldata.some((e, i) => {
//             return e.email == user.email;
//           });
//           if (match) {
//             toast.error("same data");
//           } else {
//             setAlldata([...alldata, user]);
//             localStorage.setItem("alldata", JSON.stringify([...alldata, user]));
//             setUser({
//               email: "",
//               password: "",
//             });
//             toast.success("success");
//           }
//         } else {
//           toast.error("Fill the data");
//         }
//       };
//       useEffect(() => {
//         const josndata = localStorage.getItem("alldata");
//         const normal = JSON.parse(josndata);
//         setAlldata(normal);
//       }, []);
//       const DeleteData = (ele) => {
//         const afterdeletedata = alldata.filter((e, i) => i !== ele);
//         setAlldata(afterdeletedata);
//         localStorage.setItem("alldata", JSON.stringify(afterdeletedata));
    
//         toast.info("Data Delete");
//       };
//       const Editdata = (data, index) => {
//         setUser(data);
//         setUpindex(index);
//       };
//       const Updatedata = () => {
//         if (upindex || upindex == 0) {
//           alldata.splice(upindex, 1, user);
//           setAlldata([...alldata]);
//           localStorage.setItem("alldata", JSON.stringify([...alldata]));
//           setUser({
//             email: "",
//             password: "",
//           });
//           setUpindex(null);
//           toast.info("data updated");
//         }
//       };
            
//   return (
//     <div>

// <Form className="w-50 mt-5 m-auto">
//         <FormGroup>
//           <Label for="exampleEmail">Email</Label>
//           <Input
//             id="exampleEmail"
//             name="email"
//             placeholder="with a placeholder"
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e?.target?.value })}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="examplePassword">Password</Label>
//           <Input
//             id="examplePassword"
//             name="password"
//             placeholder="password placeholder"
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e?.target?.value })}
//           />
//         </FormGroup>
//         {!(upindex || upindex == 0) ? (
//           <Button onClick={(e) => getdata(e)}>Submit</Button>
//         ) : (
//           <Button onClick={Updatedata}>Update</Button>
//         )}
//       </Form>
//       <div>
//         <Table className="w-50 mt-5 m-auto">
//           <thead>
//             <tr>
//               <th>Sr.</th>
//               <th>Email</th>
//               <th>Password</th>
//               <th>Delete||Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {alldata.map((e, i) => {
//               return (
//                 <tr key={i}>
//                   <th scope="row">{i + 1}</th>
//                   <td>{e.email}</td>
//                   <td style={{color: e.password.length < 5 ? "red":"green"}}>{e.password}</td>
//                   <td>
//                     <Button onClick={() => DeleteData(i)} className="me-5">
//                       Delete
//                     </Button>
//                     <Button onClick={() => Editdata(e, i)}>Edit</Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </div>










//     </div>
//   )
// }
