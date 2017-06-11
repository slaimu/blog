import React, { Component } from 'react';
import Entry from '../../components/entry'
import PageNumber from '../../components/pageNumber'
import './index.css';
class ShowPage extends Component {
  render() {
    var item_list = [],
      i,
      isEnd = false,
      List = this.props.List,
      selectedValue = parseInt(this.props.page, 10);
    if (!selectedValue) {
      selectedValue = 1;
    }
    for (i = 6 * (selectedValue - 1); i < (6 * selectedValue) && i < List.length; i += 1) {
      item_list.push(
        <Entry href = {this.props.preHref + selectedValue + '/' + i}
          backgroundImage={List[i].backgroundImage}
          title={List[i].title}
          summary={List[i].summary}
          meta={List[i].meta} key={i} />
      )
    }
    if (List.length < (6 * selectedValue)) {
      isEnd = true;
    }
    return (
      <div>
        <div className="blog-item">
          {item_list}
        </div>
        <PageNumber page={this.props.redirectPage}  selectedValue={selectedValue} isEnd={isEnd}/>
      </div>
    );
  }
}

export default ShowPage;
