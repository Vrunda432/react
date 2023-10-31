import React from 'react'
import "./index.css"
export default function Style() {
  let divStyle={
    height:"100px",
    width:"100px",
    backgroundcolor:"yellow",
  }
  return<>
  <h1 style={{color:"pink"}}>inline css</h1>
  <hr />
 <h3>style varible</h3>
 <div style={divStyle}></div>
 <div className="container">hello Externl css</div>

 <hr />
 <div>
  <h1 className="text-danger text-decoration-line-through m-4 border border-black p-4 text-center">
    hlooo bootstarp
  </h1>
 </div>
  </>
}