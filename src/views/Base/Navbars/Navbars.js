import React, { Component } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CNavbarText,
  CToggler,
  CNavItem,
  CNavLink,
  CDropdown,
  CForm,
  CInput,
  CButton,
  CImg
} from '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';

class CNavbars extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleCNavbar = this.toggleCNavbar.bind(this);
    this.state = {
      isOpen: false,
      CCollapsed: true,
      navbarText: false,
      navbarDropdown: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleCNavbar() {
    this.setState({
      CCollapsed: !this.state.CCollapsed,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">

        <CCard custom>
          <CCardHeader>
            CNavbar brand
          </CCardHeader>
          <CCardBody>
            <CNavbar color="faded" light>
              <CNavbarBrand href="#">
                <CImg src="https://placekitten.com/g/30/30" className="d-inline-block align-top" alt="CoreuiVue" />
                Text
              </CNavbarBrand>
            </CNavbar>
          </CCardBody>
        </CCard>

        <CCard custom>
          <CCardHeader>
            CNavbar text
          </CCardHeader>
          <CCardBody>
            <CNavbar toggleable="sm" light color="light">
              <CToggler inNavbar toggle={()=>{this.setState({navbarText: !this.state.navbarText})}} />
              <CNavbarBrand>brand</CNavbarBrand>
              <CCollapse custom show={this.state.navbarText}>
                <CNavbarNav>
                  <CNavbarText>Navbar text</CNavbarText>
                </CNavbarNav>
              </CCollapse>
            </CNavbar>
          </CCardBody>
        </CCard>

        <CCard custom>
          <CCardHeader>
            CNavbar form
          </CCardHeader>
          <CCardBody>
            <CNavbar light color="light">
              <CForm inline>
                <CInput
                  className="mr-sm-2"
                  placeholder="Search"
                  size="sm"
                />
                <CButton color="outline-success" className="my-2 my-sm-0" type="submit">Search</CButton>
              </CForm>
            </CNavbar>
          </CCardBody>
        </CCard>

        <CCard custom>
          <CCardHeader>
            CNavbar input group
          </CCardHeader>
          <CCardBody>
            <CNavbar light color="light">
              <CForm inline>
                <CInput
                  className="mr-sm-2"
                  placeholder="Username"
                />
              </CForm>
            </CNavbar>
          </CCardBody>
        </CCard>

      </div>
    );
  }
}

export default CNavbars;
