import React, {Component} from 'react';
import '../scss/header.scss';

export default class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="header-title">ReactOS<span>Developers Area</span></div>
        {/* <input type="text"/> */}
      </div>
    )
  }
}