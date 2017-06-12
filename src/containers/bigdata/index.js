import React, { Component } from 'react';
import BigDataList, {order} from './item/'
import ShowPage from '../../components/showPage'
import DisqusThread from '../../components/disqus'

import './index.css';
class BigData extends Component {
  render() {
    var jsx,
      href = "#/bigdata/" + this.props.params.page;
    if (this.props.params.entry) {
      jsx = (
        <div>
          <a href={href}><i className="fa fa-arrow-circle-left"></i></a>
          {BigDataList[this.props.params.entry].detail}
          <DisqusThread id={this.props.params.entry}
                     title={BigDataList[this.props.params.entry].title}
                     path= {href + '/' + this.props.params.entry}/>
        </div>
      );
    } else {
      jsx =   <ShowPage order= {order} List={BigDataList} preHref='#/bigdata/' Page={this.props.params.page} redirectPage='bigdata' />;
    }
    return (
      <div className="blog-container">
        {jsx}
      </div>
    );
  }
}

export default BigData;
