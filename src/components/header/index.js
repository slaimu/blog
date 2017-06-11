import React, { Component } from 'react';
import './index.css';
class HeaderComponent extends Component {
  render() {
    return (
      <header className='header'>
        <div className='content'>
          <span></span>
        </div>
        <div className='right'>
           <a href='https://github.com/slaimu'><i className={this.props.rightIconClass} aria-hidden="true"></i></a>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
