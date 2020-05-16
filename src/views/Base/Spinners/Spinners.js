import React, { Component } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CButton, CRow, CSpinner } from '@coreui/react';

class SpinnersB4 extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Spinner border
                <div className="card-header-actions">
                  <a href="https://getbootstrap.com/docs/4.2/components/spinners/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <CSpinner color="primary" />
                <CSpinner color="secondary" />
                <CSpinner color="success" />
                <CSpinner color="danger" />
                <CSpinner color="warning" />
                <CSpinner color="info" />
                <CSpinner color="light" />
                <CSpinner color="dark" />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Spinner grow
              </CCardHeader>
              <CCardBody>
                <CSpinner type="grow" color="primary" />
                <CSpinner type="grow" color="secondary" />
                <CSpinner type="grow" color="success" />
                <CSpinner type="grow" color="danger" />
                <CSpinner type="grow" color="warning" />
                <CSpinner type="grow" color="info" />
                <CSpinner type="grow" color="light" />
                <CSpinner type="grow" color="dark" />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Spinner size
              </CCardHeader>
              <CCardBody>
                <CSpinner size="sm" />
                <CSpinner size="sm" type="grow"/>
                <CSpinner style={{ width: '3rem', height: '3rem' }} />
                <CSpinner style={{ width: '3rem', height: '3rem' }} type="grow" />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Spinner buttons
              </CCardHeader>
              <CCardBody>
                <CButton color="primary" disabled className="mr-1 mb-1">
                  <CSpinner size="sm"/>
                  <span className="sr-only">Loading...</span>
                </CButton>
                <CButton color="primary" className="mr-1 mb-1">
                  <CSpinner size="sm" className="mr-1"/>
                  Loading...
                </CButton>
                <br/>
                <CButton color="primary" disabled className="mr-1 mb-1">
                  <CSpinner size="sm" type="grow"/>
                  <span className="sr-only">Loading...</span>
                </CButton>
                <CButton color="primary" disabled className="mr-1 mb-1">
                  <CSpinner size="sm" className="mr-1" type="grow"/>
                  Loading...
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default SpinnersB4;
