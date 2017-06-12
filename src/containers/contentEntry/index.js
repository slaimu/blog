import React, { Component } from 'react';
import Entry from '../../components/entry'
import BlogList, {order} from '../blog/item'
import './index.css';
class ContentEntry extends Component {
  render() {
    return (
      <div className="container">
        <div className="cards">
          <Entry href = {'#/blog/1/' + order[0]}
            backgroundImage={BlogList[order[0]].backgroundImage}
            title={BlogList[order[0]].title}
            summary={BlogList[order[0]].summary}
            meta={BlogList[order[0]].meta} key='0' />
        </div>
      </div>
    );
  }
}

export default ContentEntry;
