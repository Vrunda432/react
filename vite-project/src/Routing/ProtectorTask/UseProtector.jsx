// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// export const UseProtector=({component}) => {
//  const  navigate=useNavigate();

//    useEffect(()=>{
//    let jsondata=localStorage.JSON.getitem("passdata");
//    let noramldata=JSON.parse(jsondata);
//    if (!noramldata || noramldata?.usertype !== "super"){
//     navigate("/")
//     alert("---------> not allow")
//    }


//   })
//   return (
//     <div>{component}</div>
//   )
// }
// export const admin=({component})=>{
//  const navigate=useNavigate();
//  useEffect(()=>{
//   let jsondata=localStorage.getitem("passdata");
//   let normaldata = JSON.parse(jsondata);
//   if(
//     !normaldata || (normaldata.usertype!== "admin"  && normaldata ?.usertype !== "super")
//   ){
//     navigate("/");
//     alert("-------->not allow")
//   }
//  });
//  return  <div>
//  {component}
// </div>
 


// };

// export const Employee= ({ component }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     let jsondata = localStorage.getItem("passdata");
//     let normaldata = JSON.parse(jsondata);
//     if (
//       !normaldata ||
//       (normaldata?.usertype !== "admin" && normaldata?.usertype !== "super" &&normaldata?.usertype !== "employee")
//     ) {
//       navigate("/");
//       alert("--------->not allow")
//     }
//   });

//   return <div>{component}</div>;


// };



// export const User = ({ component}) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     let jsondata = localStorage.getItem("passdata");
//     let normaldata = JSON.parse(jsondata);
//     if (
//       !normaldata ||
//       (normaldata?.usertype !== "admin" && normaldata?.usertype !== "super" &&normaldata?.usertype !== "employe" &&normaldata?.usertype !== "user")
//     ) {
//       navigate("/");
//       alert("--------->not allow")
//     }
//   });

//   return <div>{component}</div>;
// };

