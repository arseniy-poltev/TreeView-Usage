import React, { Component } from 'react';
import { CButton, CCard, CCardBody, CCardFooter, CCol, CContainer, CForm, CInput, CInputGroup, CInputGroupAddon, CInputGroupText, CRow } from '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';

class Register extends Component {
  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="text" placeholder="Email" autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="password" placeholder="Password" autoComplete="new-password" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </CInputGroup>
                    <CButton color="success" block>Create Account</CButton>
                  </CForm>
                </CCardBody>
                <CCardFooter className="p-4">
                  <CRow>
                    <CCol xs="12" sm="6">
                      <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                    </CCol>
                  </CRow>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default Register;
