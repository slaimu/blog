import React, { Component } from 'react';
import ShowPage from '../showPage'
import DisqusThread from '../disqus'
import './index.css';
class MainPage extends Component {
  render() {
    var jsx,
      href = this.props.href + this.props.page,
      list = this.props.list,
      order = this.props.order;

    if (this.props.entry) {
      jsx = (
        <div>
          <a href={href}><i className="fa fa-arrow-circle-left"></i></a>
          {list[this.props.entry].detail}
          <DisqusThread id={this.props.entry}
                     title= {list[this.props.entry].title}
                     path= {href + '/' + this.props.entry}/>

        </div>
      );
    } else {
      jsx =   <ShowPage order={order} List= {list} preHref={this.props.href} Page={this.props.page} redirectPage={this.props.redirectPage}/>;
    }
    return (
      <div className="blog-container">
        {jsx}
      </div>
    );
  }
}

export default MainPage;
