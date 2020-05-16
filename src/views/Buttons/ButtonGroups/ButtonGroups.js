import React, { Component } from 'react';
import {
  CButton,
  CDropdown,
  CButtonGroup,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CInput,
  CInputGroup,
  CInputGroupAddon,
  CInputGroupText,
  CRow,
  CCallout
} from '@coreui/react';

class ButtonGroups extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(2).fill(false),
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
          <CCol md="6">

            <CCard custom>
              <CCardHeader>
                Callout
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/button-group/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <CCallout color="primary">
                  Callout
                </CCallout>
              </CCardBody>
            </CCard>

            <CCard custom>
              <CCardHeader>
                Button Group
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/button-group/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <CButtonGroup>
                  <CButton color="secondary">Left</CButton>
                  <CButton color="secondary">Middle</CButton>
                  <CButton color="secondary">Right</CButton>
                </CButtonGroup>
              </CCardBody>
            </CCard>

            <CCard custom>
              <CCardHeader>
                Button Group
                <small> toolbar</small>
              </CCardHeader>
              <CCardBody>
                <CButtonToolbar className="mb-3">
                  <CButtonGroup className="mr-2">
                    <CButton color="secondary">1</CButton>
                    <CButton color="secondary">2</CButton>
                    <CButton color="secondary">3</CButton>
                    <CButton color="secondary">4</CButton>
                  </CButtonGroup>
                  <CButtonGroup className="mr-2">
                    <CButton color="secondary">5</CButton>
                    <CButton color="secondary">6</CButton>
                    <CButton color="secondary">7</CButton>
                  </CButtonGroup>
                  <CButtonGroup>
                    <CButton color="secondary">8</CButton>
                  </CButtonGroup>
                </CButtonToolbar>
                <CButtonToolbar className="mb-3">
                  <CButtonGroup className="mr-2">
                    <CButton color="secondary">1</CButton>
                    <CButton color="secondary">2</CButton>
                    <CButton color="secondary">3</CButton>
                    <CButton color="secondary">4</CButton>
                  </CButtonGroup>
                  <CInputGroup>
                    <CInputGroupAddon addonType="prepend"><CInputGroupText>@</CInputGroupText></CInputGroupAddon>
                    <CInput placeholder="Input group example" />
                  </CInputGroup>
                </CButtonToolbar>
                <CButtonToolbar justify>
                  <CButtonGroup>
                    <CButton color="secondary">1</CButton>
                    <CButton color="secondary">2</CButton>
                    <CButton color="secondary">3</CButton>
                    <CButton color="secondary">4</CButton>
                  </CButtonGroup>
                  <CInputGroup>
                    <CInputGroupAddon addonType="prepend"><CInputGroupText>@</CInputGroupText></CInputGroupAddon>
                    <CInput placeholder="Input group example" />
                  </CInputGroup>
                </CButtonToolbar>
              </CCardBody>
            </CCard>

            <CCard custom>
              <CCardHeader>
                Button Group
                <small> vertical variation</small>
              </CCardHeader>
              <CCardBody>
                <CButtonGroup vertical>
                  <CButton color="secondary">1</CButton>
                  <CButton color="secondary">2</CButton>
                  <CButton color="secondary">3</CButton>
                </CButtonGroup>
              </CCardBody>
            </CCard>

          </CCol>
          <CCol md={6}>

            <CCard custom>
              <CCardHeader>
                Button Group
                <small> sizing</small>
              </CCardHeader>
              <CCardBody>
                <CButtonGroup size="lg">
                  <CButton color="secondary">Left</CButton>
                  <CButton color="secondary">Middle</CButton>
                  <CButton color="secondary">Right</CButton>
                </CButtonGroup>
                <br /><br />
                <CButtonGroup>
                  <CButton color="secondary">Left</CButton>
                  <CButton color="secondary">Middle</CButton>
                  <CButton color="secondary">Right</CButton>
                </CButtonGroup>
                <br /><br />
                <CButtonGroup size="sm">
                  <CButton color="secondary">Left</CButton>
                  <CButton color="secondary">Middle</CButton>
                  <CButton color="secondary">Right</CButton>
                </CButtonGroup>
              </CCardBody>
            </CCard>

            <CCard custom>
              <CCardHeader>
                Button Group
                <small> nestingccc</small>
              </CCardHeader>
              <CCardBody>
                <CButtonGroup>
                  <CButton color="secondary">1</CButton>
                  <CButton color="secondary">2</CButton>
                  <CDropdown color="secondary">
                    <CDropdownToggle caret color="secondary">
                      Dropdown
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Dropdown Link</CDropdownItem>
                      <CDropdownItem>Dropdown Link</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CButtonGroup>
              </CCardBody>
            </CCard>

            <CCard custom>
              <CCardHeader>
                Button Group
                <small> vertical</small>
              </CCardHeader>
              <CCardBody>
                <CButtonGroup vertical>
                  <CButton color="secondary">1</CButton>
                  <CButton color="secondary">2</CButton>
                  <CDropdown custom show={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }}>
                    <CDropdownToggle color="secondary" caret>
                      Dropdown
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Dropdown Link</CDropdownItem>
                      <CDropdownItem>Dropdown Link</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CButtonGroup>
              </CCardBody>
            </CCard>

          </CCol>
        </CRow>
      </div>
    );
  }
}

export default ButtonGroups;
