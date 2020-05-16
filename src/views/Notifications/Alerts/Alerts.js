import React, { Component } from 'react';
import { CAlert, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Alerts
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/alerts/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <CAlert color="primary">
                  This is a primary alert — check it out!
                </CAlert>
                <CAlert color="secondary">
                  This is a secondary alert — check it out!
                </CAlert>
                <CAlert color="success">
                  This is a success alert — check it out!
                </CAlert>
                <CAlert color="danger">
                  This is a danger alert — check it out!
                </CAlert>
                <CAlert color="warning">
                  This is a warning alert — check it out!
                </CAlert>
                <CAlert color="info">
                  This is a info alert — check it out!
                </CAlert>
                <CAlert color="light">
                  This is a light alert — check it out!
                </CAlert>
                <CAlert color="dark">
                  This is a dark alert — check it out!
                </CAlert>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Alerts
                <small> use <code>.alert-link</code> to provide links</small>
              </CCardHeader>
              <CCardBody>
                <CAlert custom color="primary">
                  {/*eslint-disable-next-line*/}
                  This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </CAlert>
                <CAlert custom color="secondary">
                  {/*eslint-disable-next-line*/}
                  This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </CAlert>
                <CAlert custom color="success">
                  {/*eslint-disable-next-line*/}
                  This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </CAlert>
                <CAlert custom color="danger">
                  {/*eslint-disable-next-line*/}
                  This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </CAlert>
                <CAlert custom color="warning">
                  {/*eslint-disable-next-line*/}
                  This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </CAlert>
                <CAlert custom color="info">
                  {/*eslint-disable-next-line*/}
                  This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </CAlert>
                <CAlert custom color="light">
                  {/*eslint-disable-next-line*/}
                  This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </CAlert>
                <CAlert custom color="dark">
                  {/*eslint-disable-next-line*/}
                  This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </CAlert>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Alerts
                <small> additional content</small>
              </CCardHeader>
              <CCardBody>
                <CAlert custom color="success">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert message. This example text is going
                    to run a bit longer so that you can see how spacing within an alert works with this kind
                    of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                  </p>
                </CAlert>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Alerts
                <small> dismissing</small>
              </CCardHeader>
              <CCardBody>
                <CAlert custom color="warning" show={this.state.visible} toggle={this.onDismiss}>
                  I am an alert and I can be dismissed!
                </CAlert>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Alerts
                <small> dismissing</small>
              </CCardHeader>
              <CCardBody>
                <CAlert color="warning">
                  I am an alert and I can be dismissed!
                </CAlert>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default Alerts;
