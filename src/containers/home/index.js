import React, { Component } from 'react';
import MainContent from '../mainContent'
import ContentEntry from '../contentEntry'
import Footer from '../footer'



class Home extends Component {
  render() {
    return (
      <div>
        <MainContent />
        <ContentEntry />
        <Footer />
      </div>
    );
  }
}

export default Home;
