import React, { Component, Suspense } from 'react';
//import * as router from 'react-router-dom';
import classNames from 'classnames';
import { CFooter, CHeader } from '@coreui/react';
import DefaultContent from './DefaultContent.js';


export const Context = React.createContext({show: false});

const DefaultSidebar = React.lazy(() => import('./DefaultSidebar'));
const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props);

    this.c = {};

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSidebarMobile = this.toggleSidebarMobile.bind(this);
    this.minimizeSidebar = this.minimizeSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleAside = this.toggleAside.bind(this);
    this.getAside = this.getAside.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      isAsideOpen: false,
      isSidebarOpen: 'responsive',
      isSidebarMinimized: false,
      themeDark: false,
      sidebarMobile: false,
      sidebarDisplay: 'sm'
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*
    if (this.props.color !== nextProps.color) {
      return true;
    }

    if (this.state.isAsideOpen !== nextState.isAsideOpen) {
      return false;
    }*/
    return true;
  }

  loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;


  toggleSidebar(display, mobile) {
    //alert('sidebar')
    const sidebarOpened = this.state.isSidebarOpen === true || this.state.isSidebarOpen === 'responsive'
    this.setState({
      isSidebarOpen: sidebarOpened ? false : 'responsive',
    });
  }

  toggleSidebarMobile(display, mobile) {
    const sidebarClosed = this.state.isSidebarOpen === 'responsive' || this.state.isSidebarOpen === false
    this.setState({
      isSidebarOpen: sidebarClosed ? true : 'responsive',
    });
  }

  minimizeSidebar() {
    this.setState({
      isSidebarMinimized: !this.state.isSidebarMinimized
    });
  }

  closeSidebar() {
    this.setState({
      isSidebarOpen: 'responsive',
    });
  }

  getAside(f) {
    this.toggleThisAside = f;
  }

  toggleAside() {
    this.toggleThisAside && this.toggleThisAside();
    return;
  }

  toggleTheme() {
    this.setState({
      themeDark: !this.state.themeDark
    });
  }

  render() {

    //for (let name in React.icons)
    //console.log(name);

    // dark theme
    const classes = classNames(
    'c-app c-default-layout',
    this.state.themeDark ? 'c-dark-theme' : false
    );

    return (
      <div className={classes}>
        <DefaultSidebar
          sidebarShow={this.state.isSidebarOpen}
          sidebarMinimize={this.state.isSidebarMinimized}
          sidebarDisplay={this.state.sidebarDisplay}
          sidebarMobile={this.state.sidebarMobile}
          onChange={this.closeSidebar}
          location={this.props.location}
        />
        <DefaultAside
          sidebarShow={this.state.isAsideOpen}
          toggleAside={this.toggleAside}
          getToggleAside={this.getAside}
        />
        <div className="c-wrapper">
          <CHeader withSubheader>
            <Suspense  fallback={this.loading()}>
              <DefaultHeader
                toggleSidebar={this.toggleSidebar}
                toggleSidebarMobile={this.toggleSidebarMobile}
                toggleAside={this.toggleAside}
                toggleTheme={this.toggleTheme}
              />
            </Suspense>
          </CHeader>
          <div className="c-body">
            <DefaultContent/>
            <CFooter>
              <Suspense fallback={this.loading()}>
                <DefaultFooter />
              </Suspense>
            </CFooter>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
