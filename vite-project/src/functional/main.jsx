import React from "react";
import reactDOM from "react-dom/client";
import FunCom from './functional/FunCom.jsx';



let arr=["vrunda","ishan"];
let x=<h1>what is this?</h1>
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrickMode>

{/* <h1>hello world</h1>);
<h1>{15+15}</h1>
{x}; */}

{
    arr.map((e)=>{
        return <h1>{e}</h1>
    })
}
{/* `<h1>{arr[0]}</h1>
<h1>{arr[1]}</h1>
<h1>{arr[2]}</h1> */}
`
 





<FunCom/>

</React.StrickMode>)
