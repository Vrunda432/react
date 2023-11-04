import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class UseStateinClass extends Component {
   
constructor(){
    super();
    this.colorarr=["green","pink","red","blue","Orange","Purple"];
    this.textcolor=["white","yellow"]
    this.state={
        count:0,
    }

  
}

colorchange(){
    
    console.log("--------->");
    this.setState({count:this.state.count+1})
  
}
render() {
    return (
        <div className="d-flex flex-column justify-content-center">
        <div style={ {padding: "10px",
            textAlign: "center",
            backgroundColor: this.colorarr[this.state.count],
            color:this.textcolor[this.state.count],}}  className="m-5">
                <h1>hello world</h1>    
        </div>
        <Button onClick={()=>this.colorchange()}>Change color</Button>
  
      </div>
    )
  }
}