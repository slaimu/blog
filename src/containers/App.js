import React, { Component } from 'react';
import Sidebar from './sidebar';
import Spinner from 'react-spinkit'
import Header from './header'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone:false
    }
  }
  render() {
    return (
      <div className="App">

        <Sidebar pathname={this.props.location.pathname} />
        <Header/>
        {
          this.state.initDone ?
            this.props.children:
            (<div className='loading'>
               <Spinner name="pacman" />
            </div>)
        }
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      initDone:true
    })
  }
}

export default App;
