import React, { useState } from 'react'
import { Button } from 'reactstrap';
import {toast} from 'react-toastify';

export default function SingleInputRev() {
    let[city,setcity]=useState("")
    let [allcity,setAllcity]=useState([]);

    const getData=(eleData)=>{
        //console.log("--->",eleData.target.value);
        setcity(eleData?.target?.value);

        //consol.log(city);
    }

        const addData=()=>{
            console.log("city---->",city)
            if(city.length>0){
                setAllcity([...allcity,city]);
                setcity("")
                toast.success("city name Added");
            }
            else{
                //alert()
                toast.error("please fill the input");
            }
        }
            

            //allcity=[]
            //allcity=city
       
    
  return (
    <>
    <h1>{city}</h1>
    <input value={city}type="text" onChange={(e)=>getData(e)}/>
    <Button onClick={addData}>Add city name

    </Button>
    <div>
        {
            allcity.map((e,i)=>{
                return <h1 className="border border-dark"key={i}>{e}</h1>;
            })
        }
    </div>
    </>
  )
}
