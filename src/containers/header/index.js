import React, { Component } from 'react';
import HeaderComponent from '../../components/header'
class Header extends Component {
  render() {
     return (<HeaderComponent rightIconClass="fa fa-github fa-2x" content='Blog'/>)
  }
}

export default Header;
