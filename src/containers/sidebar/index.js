import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import './style.css'
const mql = window.matchMedia(`(min-width: 1600px)`);
class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
      side: 'left',
      noOverlay: (this.props.pathname !== '/') && mql.matches
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.setState({
        noOverlay:(nextProps.pathname !== '/') && mql.matches
      })
    }
  }

  componentDidMount() {
    var that = this;
    window.addEventListener("resize", function () {
      that.setState({
        noOverlay:(that.props.pathname !== '/') && mql.matches
      })
    });
  }

  render() {
    const Menu = BurgerMenu[this.state.currentMenu],
      classList = ['','','',''];
    if (this.props.pathname === '/') {
       classList[0]='active';
    } else {
      if (this.props.pathname.indexOf('/blog') !== -1) {
        classList[1]='active';
      } else {
        if (this.props.pathname.indexOf('/bigdata') !== -1) {
          classList[2]='active'
        } else {
          if (this.props.pathname.indexOf('/aboutme') !== -1) {
            classList[3]='active'
          }
        }
      }
    }
    const items = [
      <a key="1" href="/" className = {classList[0]}><i className="fa fa-fw fa-home" /><span>Home</span></a>,
      <a key="2" href="#/blog" className = {classList[1]}><i className="fa fa-fw fa-comment-o" /><span>Blog</span></a>,
      <a key="3" href="#/bigdata" className = {classList[2]}><i className="fa fa-fw fa-database" /><span>Big Data</span></a>,
      <a key="4" href="#/aboutme" className = {classList[3]}><i className="fa fa-fw fa-address-book" /><span>About me</span></a>,

    ];
    return (
      <Menu isOpen={this.state.noOverlay} noOverlay={this.state.noOverlay} id={this.state.currentMenu} >
        {items}
      </Menu>
    );
  }
}

export default Sidebar;
