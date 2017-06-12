import React, { Component } from 'react';
import BlogList, {order} from './item/'
import ShowPage from '../../components/showPage'
import DisqusThread from '../../components/disqus'
import './index.css';
class Blog extends Component {
  render() {
    var jsx,
      href = "#/blog/" + this.props.params.page;
    if (this.props.params.entry) {
      jsx = (
        <div>
          <a href={href}><i className="fa fa-arrow-circle-left"></i></a>
          {BlogList[this.props.params.entry].detail}
          <DisqusThread id={this.props.params.entry}
                     title= {BlogList[this.props.params.entry].title}
                     path= {href + '/' + this.props.params.entry}/>

        </div>
      );
    } else {
      jsx =   <ShowPage order={order} List= {BlogList} preHref='#/blog/' Page={this.props.params.page} redirectPage='blog'/>;
    }
    return (
      <div className="blog-container">
        {jsx}
      </div>
    );
  }
}

export default Blog;
