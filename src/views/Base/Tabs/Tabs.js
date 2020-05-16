import React, {Component} from 'react';
import {CBadge, CCol, CNav, CNavItem, CNavLink, CRow, CTabContent, CTabPane} from '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';
import classnames from 'classnames';

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  lorem() {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <CTabPane tabId="1">
          {`1. ${this.lorem()}`}
        </CTabPane>
        <CTabPane tabId="2">
          {`2. ${this.lorem()}`}
        </CTabPane>
        <CTabPane tabId="3">
          {`3. ${this.lorem()}`}
        </CTabPane>
      </>
    );
  }

  render() {

    return (
      <div className="animated fadeIn">
        <CRow>

          <CCol xs="12" md="6" className="mb-4">
          <div className="nav-tabs-boxed">
            <CNav variant="tabs">
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                  href='#'
                >
                  Home with href
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Profile
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Messages
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </CTabContent>
            </div>
          </CCol>

          <CCol xs="12" md="6" className="mb-4">
          <div className="nav-tabs-boxed nav-tabs-boxed-top-right">
            <CNav variant="tabs">
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Profile
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Messages
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </CTabContent>
            </div>
          </CCol>

          <CCol xs="12" md="6" className="mb-4">
          <div className="nav-tabs-boxed nav-tabs-boxed-left">
            <CNav variant="tabs">
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Profile
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Messages
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </CTabContent>
            </div>
          </CCol>

          <CCol xs="12" md="6" className="mb-4">
          <div className="nav-tabs-boxed nav-tabs-boxed-right">
            <CNav variant="tabs">
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Profile
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Messages
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </CTabContent>
            </div>
          </CCol>

          <CCol xs="12" md="6" className="mb-4">
            <CNav variant="tabs">
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[1] === '1'}
                  onClick={() => { this.toggle(1, '1'); }}
                >
                  <CIcon name="cil-calculator" />
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[1] === '2'}
                  onClick={() => { this.toggle(1, '2'); }}
                >
                  <CIcon name="cil-basket" />
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[1] === '3'}
                  onClick={() => { this.toggle(1, '3'); }}
                >
                  <CIcon name="cil-chart-pie" />
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[1]}>
              {this.tabPane()}
            </CTabContent>
          </CCol>

          <CCol xs="12" md="6" className="mb-4">
            <CNav variant="tabs">
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[2] === '1'}
                  onClick={() => { this.toggle(2, '1'); }}
                >
                  <CIcon name="cil-calculator" /> <span className={this.state.activeTab[2] === '1' ? '' : 'd-none'}> Calculator</span>
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[2] === '2'}
                  onClick={() => { this.toggle(2, '2'); }}
                >
                  <CIcon name="cil-basket" /> <span
                  className={this.state.activeTab[2] === '2' ? '' : 'd-none'}> Shopping cart</span>
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  className={classnames({ active: this.state.activeTab[2] === '3' })}
                  onClick={() => { this.toggle(2,'3'); }}
                >
                  <CIcon name="cil-chart-pie" /> <span className={this.state.activeTab[2] === '3' ? '' : 'd-none'}> Charts</span>
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[2]}>
              {this.tabPane()}
            </CTabContent>
          </CCol>

          <CCol xs="12" md="6" className="mb-4">
            <CNav variant="tabs">
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[3] === '1'}
                  onClick={() => { this.toggle(3, '1'); }}
                >
                  <CIcon name="cil-calculator" />
                  <span className={this.state.activeTab[3] === '1' ? '' : 'd-none'}> Calculator</span>
                  {'\u00A0'}<CBadge color="success">New</CBadge>
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[3] === '2'}
                  onClick={() => { this.toggle(3, '2'); }}
                >
                  <CIcon name="cil-basket" />
                  <span className={this.state.activeTab[3] === '2' ? '' : 'd-none'}> Cart</span>
                  {'\u00A0'}<CBadge shape="pill" color="danger">29</CBadge>
                </CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink
                  active={this.state.activeTab[3] === '3'}
                  onClick={() => { this.toggle(3, '3'); }} >
                    <CIcon name="cil-chart-pie" />
                    <span className={this.state.activeTab[3] === '3' ? '' : 'd-none'}> Charts</span>
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[3]}>
              {this.tabPane()}
            </CTabContent>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default Tabs;
