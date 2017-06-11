import React, { Component } from 'react';
import RotateCard from '../../components/rotateCard'
import './index.css';

class MainContent extends Component {
  render() {
    return (
      <div className='content'>
        <div className='image-content'>
          <RotateCard frontImage='./font.png' backImage='./back.jpg'/>
        </div>
        <div className='text-content'>
          <span>Blog crafted by @xiaowu</span>
        </div>
      </div>
    );
  }
}

export default MainContent;
