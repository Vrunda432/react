//import React, { useEffect, useState } from 'react'
import { Button, Input, Label } from "reactstrap";
import { HeartHandshake, Minus, Plus, Smile, Trash } from "lucide-react";
import { useEffect, useState } from "react";

export default function LocalStorage() {
  const [user, setUser] = useState("");
  const [alldata, setAlldata] = useState([]);
  
  
  
  const getdata = () => {
    if (user.length > 0) {
      setAlldata([...alldata, user]);
      localStorage.setItem("todole", JSON.stringify([...alldata, user]));
      setUser("");
    }
  };

  useEffect(() => {
    const jsondata = localStorage.getItem("todole");
    const normal = JSON.parse(jsondata);
    setAlldata(normal || []);
  }, []);
  
  
  const datadelete = (ele) => {
    const afterdelete = alldata.filter((e, i) => {
      return i !== ele;
    });
    setAlldata(afterdelete);
    localStorage.setItem("todole", JSON.stringify(afterdelete));
  };

  return (
    <>
      <h1> Add Todo</h1>

      <Label>Todo</Label>
      <Input
        className="w-25"
        //to manage input values
        placeholder="add your task"
        value={user}
        onChange={(e) => setUser(e?.target?.value)}
      />
      <Plus size={32} color="green" onClick={() => getdata()} />
      
      <div>
        {/* <Button >submit</Button> */}
        <HeartHandshake size={30} />
        <Smile size={36} />
        <ul>
          {alldata.map((e, i) => {
            return (
              <li key={i}>
                {e}
                <Trash
                  size={48}
                  strokeWidth={2.5}
                  onClick={() => datadelete(i)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
// useEffect(()=>{
//     localStorage.setItem("test","testtstts")
//     localStorage.setItem("test2","testtsttfdfs")
//     localStorage.setItem("test3","testtdfdstts")
// },[]);
