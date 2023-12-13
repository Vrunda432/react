import React, { useEffect, useState } from 'react'
import { Input, Label } from 'reactstrap'
import { Check } from 'lucide-react'


export default function UseLocalStorage() {
    let[todo,SetTodo]=useState("");
    let[todoList,SetTodoList]=useState([])

    
   const addTodo =()=>{
    SetTodoList([...todoList,todo])
    localStorage.setItem("setitems",JSON.stringify([...todoList,todo]))
    SetTodo("");
   }
   useEffect(()=>{
   const jsondata =localStorage.getItem('setitems')
   const normaldata=JSON.parse(jsondata);
   SetTodoList(normaldata);
   },[])
   
  return (
    <>
    <h1>Todo list</h1>
    <Label>Todo</Label>
     <div className='w-25'>
     <Input value={todo} onChange={(e)=>SetTodo(e?.target?.value)} type="text" className='w-40'placeholder='add your data' />
     <Check onClick={()=>addTodo()}role="button"strokeWidth={2.75} />
     </div>
     <div className='w-50 border border-dark rounded-4'>
        <ul>

            {
                todoList?.map?.((e,i)=>{
                return <li key={i}>
                  {i+1}  .{e}
                </li>
                })
            }
        </ul>
     </div>
   
   </>
    
  )
}

// useEffect(()=>{
//     localStorage.setItem("setitems","ddedd");
//     localStorage.setItem("setitems2","ddeddv");
//     localStorage.setItem("setitems3","ddeddvcc");
    

//    })