import React, {Component} from 'react';
import {
  CSidebar,
  CSidebarNav,
  CButtonToolbar, CSidebarNavItem, CSidebarNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CBadge, CButton, CButtonGroup, CForm, CFormGroup, CLabel, CInput, CRow, CCol } from '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';

class Compose extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="c-email-app mb-4">
          <div className="c-body">

            <CSidebar fixed={false} colorScheme="light">
              <CSidebarNav>
                  <CSidebarNavItem custom>
                    <CButton color="success" className="d-flex m-3" href="#/apps/email/inbox"><CIcon name="cil-inbox" className="mr-3" /> New email</CButton>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#/apps/email/inbox"><CIcon name="cil-inbox" className="c-nav-icon" /> Inbox <CBadge color="danger">4</CBadge></CSidebarNavLink>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#"><CIcon name="cil-star" className="c-nav-icon" /> Stared</CSidebarNavLink>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#"><CIcon name="cil-paper-plane" className="c-nav-icon" /> Sent</CSidebarNavLink>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#"><CIcon name="cil-trash" className="c-nav-icon" /> Trash</CSidebarNavLink>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#"><CIcon name="cil-bookmark" className="c-nav-icon" /> Important<CBadge color="info">5</CBadge></CSidebarNavLink>
                  </CSidebarNavItem>
              </CSidebarNav>
            </CSidebar>

            <main className="c-main p-3">

              <p className="text-center">New Message</p>

              <CForm>
                <CRow form className="mb-3">
                  <CLabel sm="1" className="col-1" htmlFor="to">To:</CLabel>
                  <CCol sm="11">
                    <CInput className="form-control" id="to" type="email" placeholder="Type email" />
                  </CCol>
                </CRow>
                <CRow form className="mb-3">
                  <CLabel sm="1" className="col-1" htmlFor="cc">CC:</CLabel>
                  <CCol sm="11">
                    <CInput className="form-control" id="cc" type="email" placeholder="Type email" />
                  </CCol>
                </CRow>
                <CRow form className="mb-3">
                  <CLabel sm="1" className="col-1" htmlFor="bcc">BCC:</CLabel>
                  <CCol sm="11">
                    <CInput className="form-control" id="bcc" type="email" placeholder="Type email" />
                  </CCol>
                </CRow>
              </CForm>

              <CRow>
                <CCol className="ml-auto" sm="11">
                  <CButtonToolbar>
                    <CButtonGroup>
                      <CButton color="light"><CIcon name="cil-bold" /></CButton>
                      <CButton color="light"><CIcon name="cil-italic" /></CButton>
                      <CButton color="light"><CIcon name="cil-underline" /></CButton>
                    </CButtonGroup>{' '}
                    <CButtonGroup>
                      <CButton color="light"><CIcon name="cil-align-left" /></CButton>
                      <CButton color="light"><CIcon name="cil-align-right" /></CButton>
                      <CButton color="light"><CIcon name="cil-align-center" /></CButton>
                      <CButton color="light"><CIcon name="cil-justify-center" /></CButton>
                    </CButtonGroup>
                    <CButtonGroup>
                      <CButton color="light"><CIcon name="cil-indent-increase" /></CButton>
                      <CButton color="light"><CIcon name="cil-indent-decrease" /></CButton>
                    </CButtonGroup>
                    <CButtonGroup>
                      <CButton color="light"><CIcon name="cil-list" /></CButton>
                      <CButton color="light"><CIcon name="cil-list-numbered" /></CButton>
                    </CButtonGroup>
                    <CButton color="light"><CIcon name="cil-trash" /></CButton>
                    <CButton color="light"><CIcon name="cil-paperclip" /></CButton>
                    <CDropdown toggle={()=>{alert(5)}}>
                      <CDropdownToggle caret color="light">
                        <CIcon name="cil-tags" />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">add label<CBadge color="danger"> Home</CBadge></CDropdownItem>
                        <CDropdownItem href="#">add label<CBadge color="info"> Job</CBadge></CDropdownItem>
                        <CDropdownItem href="#">add label<CBadge color="success"> Clients</CBadge></CDropdownItem>
                        <CDropdownItem href="#">add label<CBadge color="warning"> News</CBadge></CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CButtonToolbar>
                  <CFormGroup className="mt-4">
                    <CInput type="textarea" id="message" name="body" rows="12" placeholder="Click here to reply"></CInput>
                  </CFormGroup>
                  <CFormGroup>
                    <CButton color="success" type="submit">Send</CButton>{' '}
                    <CButton color="light" type="submit">Draft</CButton>{' '}
                    <CButton color="danger" type="submit">Discard</CButton>
                  </CFormGroup>
                </CCol>
              </CRow>

            </main>

          </div>
        </div>
      </div>
    )
  }
}

export default Compose;
