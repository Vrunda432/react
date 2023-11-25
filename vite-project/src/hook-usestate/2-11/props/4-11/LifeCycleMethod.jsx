import { Button } from 'reactstrap';
import React, { Component } from 'react'

export default class LifeCycleMethod extends Component {

    constructor(){
        super();
        console.log("----constructor------");
        this.state={
          count:0,
        }
    }
    componentDidMount(){
      console.log("======componentDidmount=======");
    }
    componentDidUpdate(){
      console.log("======componentDidUpdate=======");
      
     }
    
  render() {
    console.log("======render========");
    return (
      <div>LifeCycleMethod
<h1>{this.state.count}</h1>
        <Button onClick={()=>this.setState({count:this.state.count+1})}>Button</Button>
      </div>
    )
  }
}
