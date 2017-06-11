import React, { Component } from 'react';
import BlogList from './item/'
import ShowPage from '../../components/showPage'
import './index.css';
class Blog extends Component {
  render() {
    var jsx,
      href = "#/blog/" + this.props.params.page;
    if (this.props.params.entry) {
      jsx = (
        <div>
          <a href={href}><i className="fa fa-arrow-circle-left"></i></a>
          {BlogList[parseInt(this.props.params.entry,10)].detail}
        </div>
      );
    } else {
      jsx =   <ShowPage List={BlogList} preHref='#/blog/' Page={this.props.params.page} redirectPage='blog'/>;
    }
    return (
      <div className="blog-container">
        {jsx}
      </div>
    );
  }
}

export default Blog;
