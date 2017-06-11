import React, { Component } from 'react';
import './index.css';
class RotateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'flip-container'
    };
    this.hover = this.hover.bind(this);
  }
  hover() {
    let className = this.state.className;
    if (className === 'flip-container') {
      className = 'flip-container hover';
    } else {
      className = 'flp-container';
    }
    this.setState({className: className});
  }
  render() {
    return (
      <div className={this.state.className} onTouchStart={this.hover}>
  	    <div className="flipper">
  	    	<div className="front">
           <img src={this.props.frontImage} alt=''/>
  	    	</div>
  	  	<div className="back">
           <img src={this.props.backImage} alt=''/>
  	  	</div>
    	</div>
    </div>
    );
  }
}

export default RotateCard;
