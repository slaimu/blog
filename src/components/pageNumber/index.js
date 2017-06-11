import React, { Component } from 'react';
import './index.css';
class PageNumber extends Component {
  render() {
    var list = [],
       count,
       selectedValue = parseInt(this.props.selectedValue, 10),
       i = this.props.selectedValue - 3;
    if (i < 1) {
      i = 1;
    }
    count = i + 7;
    for (;i < count; i += 1 ){
      if (i === selectedValue) {
        list.push(
          <a href={"#/" + this.props.page + "/" + i} className='active' key={i}>{i}</a>
        )
        if (this.props.isEnd) {
        break;
        }
      } else {
        list.push(
          <a href={"#/" + this.props.page + "/" + i} key={i}>{i}</a>
        )
      }
    }
    return (
      <div className="pagination">
        {list}
      </div>
    );
  }
}

export default PageNumber;
