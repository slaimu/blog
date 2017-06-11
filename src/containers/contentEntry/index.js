import React, { Component } from 'react';
import Entry from '../../components/entry'
import BlogList from '../blog/item'
import './index.css';
class ContentEntry extends Component {
  render() {
    return (
      <div className="container">
        <div className="cards">
          <Entry href = '#/blog/1/0'
            backgroundImage={BlogList[0].backgroundImage}
            title={BlogList[0].title}
            summary={BlogList[0].summary}
            meta={BlogList[0].meta} key='0' />
        </div>
      </div>
    );
  }
}

export default ContentEntry;
