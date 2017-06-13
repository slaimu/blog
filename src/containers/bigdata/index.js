import React, { Component } from 'react';
import BigDataList, {order} from './item/'
import MainPage from '../../components/mainPage'

class BigData extends Component {
  render() {
    return <MainPage href='#/bigdata/' list={BigDataList} order={order} redirectPage='bigdata' page={this.props.params.page} entry={this.props.params.entry}/>
  }
}

export default BigData;
