import React, { Component, Suspense, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import classNames from 'classnames';

import {
  CContainer,
  CAside,
  CFooter,
  CHeader,
  CSidebar,
  CSidebarFooter,
  CSidebarForm,
  CSidebarHeader,
  CSidebarMinimizer,
  CBreadcrumb,
  CSidebarNav,
  CNav,
  CTabContent,
  CProgress,
  CNavItem,
  CNavLink,
  CTabPane,
  CListGroup,
  CListGroupItem,
  CSwitch,
  CLabel,
  CInput,
  CSidebarBrand,
  CSidebarDivider,
  CSidebarTitle
} from '@coreui/react';

// routes config
import routes from '../../routes';

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

  loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

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

  toggleAside(e) {
    //let a = useContext(Context);

    e.preventDefault();

    console.log(this.c);
    if (this.c.show)
      this.c = {show:false}
    else
      this.c = {show:true}
    //this.c = !this.c.show; //Context._currentValue.isAsideOpen = !Context._currentValue.isAsideOpen;
    /*
    this.setState({
      isAsideOpen: !this.state.isAsideOpen
    });
    */
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

      <Context.Provider value={this.c}>
        <Context.Consumer>
          {
            (context)=>{

              this.c = context;
              console.log(context.show);

              return (
              <DefaultAside
                sidebarShow={context.show}
                toggleAside={this.toggleAside}
              /> )

            }

          }
        </Context.Consumer>
      </Context.Provider>

        <div className="c-wrapper">
          <CHeader withSubheader>
            <Suspense  fallback={this.loading()}>
              <DefaultHeader
                onLogout={e=>this.signOut(e)}
                toggleSidebar={this.toggleSidebar}
                toggleSidebarMobile={this.toggleSidebarMobile}
                toggleAside={this.toggleAside}
                toggleTheme={this.toggleTheme}
              />
            </Suspense>
          </CHeader>
          <div className="c-body">
            <main className="c-main">
              <CContainer fluid>
                <Suspense fallback={this.loading()}>
                  <Switch>
                    {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    })}
                    <Redirect from="/" to="/dashboard" />
                  </Switch>
                </Suspense>
              </CContainer>
            </main>
          </div>
        </div>
        <CFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </CFooter>
      </div>
    );
  }
}

export default DefaultLayout;
