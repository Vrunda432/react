import React, { useState } from 'react'
import {Button,Input,Label}  from "reactstrap";

export default function SingleInput() {
   const [todo,setTodo]=useState("");
   const [allTodo,setAllTodo]=useState([]);

   //get data from input//
   const getData=(ele) => {
    //ele.target=information of input element//
    //ele.target.value=input value//
    //console.log("ele",typeof ele.target, ele.target.value);
    setTodo(ele.target.value);
     
     
   };
   //add task to array//

   const addTask=()=>{
    //why use [...allTodo]=> to copy old data and add new
    setAllTodo([...allTodo,todo]);
    // to empty input after click on add todo button
    setTodo("");
   };

    
   
  return (
    <>
     <div className="text-center w-500 border border-dark rounded-3 p-4 mt-5">
      <h1 className="text-center">Add ToDo</h1>
         <h1>{}</h1>
      <hr/>
      <Label> Todo</Label>


      <Input 
      //to manage input values//
      value={todo}placeholder="Add your task" onChange={(e)=>getData(e)} />
      <Button onClick={()=>addTask()} className="w-100 mt-3" color="danger">Add</Button>
      </div>   

      <div  className="w-500 border border-dark rounded-3 p-4 mt-5">
       
       {
        allTodo.map((e,i)=>{
          return  <h1>{i+1}.{e} </h1>
        })
       }

      </div>
        
    </>
  );
}
