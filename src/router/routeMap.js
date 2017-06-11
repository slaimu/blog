import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from '../containers/App'
import Home from '../containers/home'
import NotFound from '../containers/notFound'
import Blog from '../containers/blog'
import BigData from '../containers/bigdata'

class RouteMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/blog(/:page)(/:entry)' component={Blog} />
          <Route path='/bigdata(/:page)(/:entry)' component={BigData} />
          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default RouteMap
