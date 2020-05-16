import React, {Component} from 'react';
import {
  CCard,
  CCardHeader,
  CCardBody,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
  CForm,
  CInput,
  CButton,
  CContainer,
  CRow,
  CCol,
  CFormGroup,
  CLabel
} from '@coreui/react';

class Toastr extends Component {

  constructor(props) {
    super(props);

    this.addToast = this.addToast.bind(this);
    this.state = {
      position: false
    };
  }

  addToast(name) {
    this.setState({
      position: !this.state.position
    });
  }

  render() {

    return (
      <div className="animated">

        <CCard custom>
          <CCardHeader>
            Toasts.

            <CToaster>

              <CToast show header='toast'>
                body
              </CToast>

              <CToast custom show position='static'>
                <CToastHeader>
                  custom toast
                </CToastHeader>
                <CToastBody>
                  body
                </CToastBody>
              </CToast>

              <CToast show header='toast'>
                body
              </CToast>

            </CToaster>

          </CCardHeader>

          <CCardBody>

            <CContainer>
              <CRow>
                <CCol sm="12" lg="6">
                  <CForm>
                    <h5>Add toast with following props:</h5>

                    <CFormGroup check className="my-2 mt-4">
                      <CInput
                        type="checkbox"
                        custom
                      />
                      <CLabel check htmlFor="ccyear">Autohide of the toast</CLabel>
                    </CFormGroup>

                    <CFormGroup className="my-2">
                      <CLabel htmlFor="ccyear">Time to autohide</CLabel>
                      <CInput
                        vif="autohide"
                        type="select"
                        type="number"
                        lazy
                      />
                    </CFormGroup>

                    <CFormGroup className="my-2">
                      <CLabel htmlFor="ccyear">Position</CLabel>
                      <CInput
                        type="select"
                        options={this.state.positions}
                        custom
                      />
                    </CFormGroup>

                    <CFormGroup check className="my-2">
                      <CInput
                        type="checkbox"
                        custom
                      />
                      <CLabel check htmlFor="ccyear">fade</CLabel>
                    </CFormGroup>

                    <CFormGroup check className="my-2">
                      <CInput
                        type="checkbox"
                        custom
                      />
                      <CLabel htmlFor="ccyear">closeButton</CLabel>
                    </CFormGroup>

                    <CButton
                      className="mr-1 w-25"
                      color="success"
                      onClick={this.addToast}
                    >
                      Add toast
                    </CButton>

                  </CForm>
                </CCol>
              </CRow>
            </CContainer>

          </CCardBody>

        </CCard>

      </div>
    );
  }
}

export default Toastr;
