import React, { Component } from 'react';
import { CButton, CCol, CContainer, CInput, CInputGroup, CInputGroupAddon, CInputGroupText, CRow } from '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';

class Page500 extends Component {
  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">500</h1>
                <h4 className="pt-3">Houston, we have a problem!</h4>
                <p className="text-muted float-left">The page you are looking for is temporarily unavailable.</p>
              </span>
              <CInputGroup className="input-prepend">
                <CInputGroupAddon addonType="prepend">
                  <CInputGroupText>
                    <CIcon name="cil-magnifying-glass" />
                  </CInputGroupText>
                </CInputGroupAddon>
                <CInput size="16" type="text" placeholder="What are you looking for?" />
                <CInputGroupAddon addonType="append">
                  <CButton color="info">Search</CButton>
                </CInputGroupAddon>
              </CInputGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default Page500;
