import React, { Component } from 'react';
require('react');

class Display extends Component{
  render(){
    console.log(this.Props);
    return(
      <div style={{
        margin: '5px 0px 0px 560px',
        border: '2px solid #eee',
        backgroundcolor:'red',
        width: '220px'}}>
      <h4>My App</h4>
      <div>Name:{this.props.name}</div>
      <div>Age:{this.props.age}</div>
      <div>Birth-month: {this.props.birthMonth}</div>
      </div>

    )
  }
}
export default Display;
