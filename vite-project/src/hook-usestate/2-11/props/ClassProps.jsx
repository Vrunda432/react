import React, { Component } from 'react'

export default class ClassProps extends Component {
    
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
            helooo,{this?.props?.data?.name}
        </h1>
        <h2>hii,{this?.props?.data?.greeting}</h2>
      </div>
    )
  }
}
