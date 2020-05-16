import React, { Component } from 'react';
import { CBreadcrumb, CBreadcrumbItem, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xs="12">
            <CCard custom>
              <CCardHeader>
                Bootstrap Breadcrumb
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/breadcrumbs/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <h6>Router</h6>
                <CBreadcrumb />
                <h6>Manual</h6>
                <CBreadcrumb custom>
                  {/*eslint-disable-next-line*/}
                  <CBreadcrumbItem><a href="#">Home</a></CBreadcrumbItem>
                  <CBreadcrumbItem active>Library</CBreadcrumbItem>
                </CBreadcrumb>
                <CBreadcrumb custom>
                  {/*eslint-disable-next-line*/}
                  <CBreadcrumbItem><a href="#">Home</a></CBreadcrumbItem>
                  {/* eslint-disable-next-line*/}
                  <CBreadcrumbItem><a href="#">Library</a></CBreadcrumbItem>
                  <CBreadcrumbItem active>Data</CBreadcrumbItem>
                </CBreadcrumb>
                <CBreadcrumb custom tag="nav">
                  <CBreadcrumbItem tag="a" href="#">Home</CBreadcrumbItem>
                  <CBreadcrumbItem tag="a" href="#">Library</CBreadcrumbItem>
                  <CBreadcrumbItem tag="a" href="#">Data</CBreadcrumbItem>
                  <CBreadcrumbItem active tag="span">Bootstrap</CBreadcrumbItem>
                </CBreadcrumb>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default Breadcrumbs;
