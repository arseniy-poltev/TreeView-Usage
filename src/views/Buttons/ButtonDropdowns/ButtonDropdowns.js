import React, { Component } from 'react';
import { CButton, CForm, CDropdown, CCard, CCardBody, CCardHeader, CCol, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CFormGroup, CLabel, CInput } from '@coreui/react';

class ButtonDropdowns extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(29).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xs="12">
            <CCard custom>
              <CCardHeader>
                Dropdowns
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/button-dropdown/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>

                <CDropdown className="mr-1">
                  <CDropdownToggle caret>
                    Dropdown button
                  </CDropdownToggle>
                  <CDropdownMenu right>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr/>

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }}>
                  <CDropdownToggle caret>
                    Dropdown button
                  </CDropdownToggle>
                  <CDropdownMenu right>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom show={this.state.dropdownOpen[1]} toggle={() => { this.toggle(1); }}>
                  <CDropdownToggle caret tag="a">
                    Dropdown link
                  </CDropdownToggle>
                  <CDropdownMenu right>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr/>

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[2]} toggle={() => { this.toggle(2); }}>
                  <CDropdownToggle caret color="primary">
                    Primary
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[3]} toggle={() => { this.toggle(3); }}>
                  <CDropdownToggle caret color="secondary">
                    Secondary
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[4]} toggle={() => { this.toggle(4); }}>
                  <CDropdownToggle caret color="success">
                    Success
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[5]} toggle={() => { this.toggle(5); }}>
                  <CDropdownToggle caret color="info">
                    Info
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[6]} toggle={() => { this.toggle(6); }}>
                  <CDropdownToggle caret color="warning">
                    Warning
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[7]} toggle={() => { this.toggle(7); }}>
                  <CDropdownToggle caret color="danger">
                    Danger
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr/>

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[8]} toggle={() => { this.toggle(8); }}>
                  <CButton color="primary">Primary</CButton>
                  <CDropdownToggle caret color="primary" />
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[9]} toggle={() => { this.toggle(9); }}>
                  <CButton color="secondary">Secondary</CButton>
                  <CDropdownToggle caret color="secondary" />
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[10]} toggle={() => { this.toggle(10); }}>
                  <CButton color="success">Success</CButton>
                  <CDropdownToggle caret color="success" />
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[11]} toggle={() => { this.toggle(11); }}>
                  <CButton color="info">Info</CButton>
                  <CDropdownToggle caret color="info" />
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[12]} toggle={() => { this.toggle(12); }}>
                  <CButton color="warning">Warning</CButton>
                  <CDropdownToggle caret color="warning" />
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[13]} toggle={() => { this.toggle(13); }}>
                  <CButton color="danger">Danger</CButton>
                  <CDropdownToggle caret color="danger" />
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr/>

                <CDropdown custom size="lg" show={this.state.dropdownOpen[14]} toggle={() => { this.toggle(14); }}>
                  <CDropdownToggle caret color="secondary">
                    Large button
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                {' '}
                <CDropdown custom size="lg" className="mr-1" show={this.state.dropdownOpen[15]} toggle={() => { this.toggle(15); }}>
                  <CButton color="secondary">Large split button</CButton>
                  <CDropdownToggle caret color="secondary"/>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr/>

                <CDropdown custom size="sm" show={this.state.dropdownOpen[16]} toggle={() => { this.toggle(16); }}>
                  <CDropdownToggle caret color="secondary">
                    Small button
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                {' '}
                <CDropdown custom size="sm" className="mr-1" show={this.state.dropdownOpen[17]} toggle={() => { this.toggle(17); }}>
                  <CButton color="secondary">Small split button</CButton>
                  <CDropdownToggle caret color="secondary"/>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr/>

                <CDropdown custom direction="up" className="mr-1" show={this.state.dropdownOpen[18]} toggle={() => { this.toggle(18); }}>
                  <CDropdownToggle caret color="secondary">
                    Dropup button
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown custom direction="up" show={this.state.dropdownOpen[19]} toggle={() => { this.toggle(19); }}>
                  <CButton color="secondary">Split dropup</CButton>
                  <CDropdownToggle caret color="secondary"/>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

              </CCardBody>
            </CCard>
            <CCard custom>
              <CCardHeader>
                Menus
              </CCardHeader>
              <CCardBody>

                <CDropdown custom direction="up" className="mr-1" show={this.state.dropdownOpen[20]} toggle={() => { this.toggle(20); }}>
                  <CDropdownToggle caret color="secondary">
                    Direction Up
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown custom direction="left" className="mr-1" show={this.state.dropdownOpen[21]} toggle={() => { this.toggle(21); }}>
                  <CDropdownToggle caret color="secondary">
                    Direction Left
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown custom direction="right" className="mr-1" show={this.state.dropdownOpen[22]} toggle={() => { this.toggle(22); }}>
                  <CDropdownToggle caret color="secondary">
                    Direction Right
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[23]} toggle={() => { this.toggle(23); }}>
                  <CDropdownToggle caret color="secondary">
                    Default Down
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr />

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[24]} toggle={() => { this.toggle(24); }}>
                  <CDropdownToggle caret color="secondary">
                    This dropdown{'\''}s menu is right-aligned
                  </CDropdownToggle>
                  <CDropdownMenu right>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr />

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[25]} toggle={() => { this.toggle(25); }}>
                  <CDropdownToggle caret color="secondary">
                    Dropdown with header
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr />

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[26]} toggle={() => { this.toggle(26); }}>
                  <CDropdownToggle caret color="secondary">
                    Dropdown with divider
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr />

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[27]} toggle={() => { this.toggle(27); }}>
                  <CDropdownToggle caret color="secondary">
                    Dropdown with disabled item
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem disabled>Disabled Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <hr />

                <CDropdown custom className="mr-1" show={this.state.dropdownOpen[28]} toggle={() => { this.toggle(28); }}>
                  <CDropdownToggle caret color="secondary">
                    Dropdown with form
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CForm className="px-4 py-3">
                      <CFormGroup>
                        <CLabel for="exampleDropdownFormEmail1">Email address</CLabel>
                        <CInput className="form-control" id="exampleDropdownFormEmail1" type="email" placeholder="email@example.com"/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel for="exampleDropdownFormPassword1">Password</CLabel>
                        <CInput className="form-control" id="exampleDropdownFormPassword1" type="password" placeholder="Password"/>
                      </CFormGroup>
                      <div className="form-check">
                        <CLabel className="form-check-label">
                          <CInput className="form-check-input" type="checkbox" /> Remember me
                        </CLabel>
                      </div>
                      <CButton color="primary" type="submit">Sign in</CButton>
                    </CForm>
                    <CDropdownItem disabled>Disabled Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default ButtonDropdowns;
