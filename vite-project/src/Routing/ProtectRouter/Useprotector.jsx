import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { ToastContainer } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css';

export const Useprotector = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let josndata = localStorage.getItem("userdata");
    let normaldata = JSON.parse(josndata);

    if (!normaldata) {
      //toast.warn("please do login");
      navigate("/");
    }
  }, []);
  return (
    <div>
      Useprotector
      {Component}
    </div>
  );
};

export const AdminProtected = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let josndata = localStorage.getItem("userdata");
    let normaldata = JSON.parse(josndata);

    if (!normaldata || normaldata.usertype !== "admin") {
      //toast.warn("please do login");
      navigate("/");
    }
  }, []);
  return (
    <div>
      Useprotector
      {Component}
    </div>
  );
};

// export const AdminProtected=({Component})=> {
//   const navigate=useNavigate();
//     // check user is login or not
//  useEffect(()=>{
//   let josndata= localStorage.getItem("userdata")
//    let normaldata=JSON.parse(josndata);

//    if(!normaldata  || normaldata.usertype!=="admin   "){
//      //toast.warn("please do login");
//      navigate("/")
//    }
//  },[])

// const navigate=useNavigate()
//   useEffect(()=>{
//     let josndata=localStorage.getItem("userdata")
//     let normaldata=JSON.parse(josndata)
//     if(!normaldata){
//        navigate("/")
//     }
//   })
