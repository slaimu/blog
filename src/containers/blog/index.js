import React, { Component } from 'react';
import BlogList, {order} from './item/'
import ShowPage from '../../components/showPage'
import DisqusThread from '../../components/disqus'
import MainPage from '../../components/mainPage'

class Blog extends Component {
  render() {
    return <MainPage href='#/blog/' list={BlogList} order={order} redirectPage='blog' page={this.props.params.page} entry={this.props.params.entry}/>
  }
}

export default Blog;
