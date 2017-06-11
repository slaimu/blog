import React, { Component } from 'react';
import './index.css';
class ContentEntry extends Component {
  render() {
    return (
  	  	<a className="card" href={this.props.href}>
  		  	<span className="card-header" style={{backgroundImage: 'url(' + this.props.backgroundImage + ')'}}>
  	  			<span className="card-title">
    			  	<h3>{this.props.title}</h3>
    		  	</span>
  	    	</span>
  	    	<span className="card-summary">
            {this.props.summary}
      		</span>
      		<span className="card-meta">
            {this.props.meta}
    	  	</span>
      	</a>
    );
  }
}

export default ContentEntry;
