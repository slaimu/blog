import React, { Component } from 'react';
import BigDataList from './item/'
import ShowPage from '../../components/showPage'
import './index.css';
class BigData extends Component {
  render() {
    var jsx,
      href = "#/bigdata/" + this.props.params.page;
    if (this.props.params.entry) {
      jsx = (
        <div>
          <a href={href}><i className="fa fa-arrow-circle-left"></i></a>
          {BigDataList[parseInt(this.props.params.entry,10)].detail}
        </div>
      );
    } else {
      jsx =   <ShowPage List={BigDataList} preHref='#/bigdata/' Page={this.props.params.page} redirectPage='bigdata' />;
    }
    return (
      <div className="blog-container">
        {jsx}
      </div>
    );
  }
}

export default BigData;
