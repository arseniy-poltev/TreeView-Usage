import React, { Component } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CRow } from '@coreui/react';

class Modals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning,
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol>
            <CCard custom>
              <CCardHeader>
                Bootstrap Modals
              </CCardHeader>
              <CCardBody>
                <CButton onClick={this.toggle} className="mr-1">Launch demo modal</CButton>
                <CModal show={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <CModalHeader toggle={this.toggle}>Modal title</CModalHeader>
                  <CModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={this.toggle}>Do Something</CButton>{' '}
                    <CButton color="secondary" onClick={this.toggle}>Cancel</CButton>
                  </CModalFooter>
                </CModal>

                <CButton onClick={this.toggleLarge} className="mr-1">Launch large modal</CButton>
                <CModal show={this.state.large} toggle={this.toggleLarge}
                       className={'modal-lg ' + this.props.className}>
                  <CModalHeader toggle={this.toggleLarge}>Modal title</CModalHeader>
                  <CModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={this.toggleLarge}>Do Something</CButton>{' '}
                    <CButton color="secondary" onClick={this.toggleLarge}>Cancel</CButton>
                  </CModalFooter>
                </CModal>

                <CButton onClick={this.toggleSmall} className="mr-1">Launch small modal</CButton>
                <CModal show={this.state.small} toggle={this.toggleSmall}
                       className={'modal-sm ' + this.props.className}>
                  <CModalHeader toggle={this.toggleSmall}>Modal title</CModalHeader>
                  <CModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={this.toggleSmall}>Do Something</CButton>{' '}
                    <CButton color="secondary" onClick={this.toggleSmall}>Cancel</CButton>
                  </CModalFooter>
                </CModal>

                <hr />

                <CButton color="primary" onClick={this.togglePrimary} className="mr-1">Primary modal</CButton>
                <CModal show={this.state.primary} toggle={this.togglePrimary}
                       className={'modal-primary ' + this.props.className}>
                  <CModalHeader toggle={this.togglePrimary}>Modal title</CModalHeader>
                  <CModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={this.togglePrimary}>Do Something</CButton>{' '}
                    <CButton color="secondary" onClick={this.togglePrimary}>Cancel</CButton>
                  </CModalFooter>
                </CModal>

                <CButton color="success" onClick={this.toggleSuccess} className="mr-1">Success modal</CButton>
                <CModal show={this.state.success} toggle={this.toggleSuccess}
                       className={'modal-success ' + this.props.className}>
                  <CModalHeader toggle={this.toggleSuccess}>Modal title</CModalHeader>
                  <CModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="success" onClick={this.toggleSuccess}>Do Something</CButton>{' '}
                    <CButton color="secondary" onClick={this.toggleSuccess}>Cancel</CButton>
                  </CModalFooter>
                </CModal>

                <CButton color="warning" onClick={this.toggleWarning} className="mr-1">Warning modal</CButton>
                <CModal show={this.state.warning} toggle={this.toggleWarning}
                       className={'modal-warning ' + this.props.className}>
                  <CModalHeader toggle={this.toggleWarning}>Modal title</CModalHeader>
                  <CModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="warning" onClick={this.toggleWarning}>Do Something</CButton>{' '}
                    <CButton color="secondary" onClick={this.toggleWarning}>Cancel</CButton>
                  </CModalFooter>
                </CModal>

                <CButton color="danger" onClick={this.toggleDanger} className="mr-1">Danger modal</CButton>
                <CModal show={this.state.danger} toggle={this.toggleDanger}
                       className={'modal-danger ' + this.props.className}>
                  <CModalHeader toggle={this.toggleDanger}>Modal title</CModalHeader>
                  <CModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="danger" onClick={this.toggleDanger}>Do Something</CButton>{' '}
                    <CButton color="secondary" onClick={this.toggleDanger}>Cancel</CButton>
                  </CModalFooter>
                </CModal>

                <CButton color="info" onClick={this.toggleInfo} className="mr-1">Info modal</CButton>
                <CModal show={this.state.info} toggle={this.toggleInfo}
                       className={'modal-info ' + this.props.className}>
                  <CModalHeader toggle={this.toggleInfo}>Modal title</CModalHeader>
                  <CModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={this.toggleInfo}>Cancel</CButton>
                    <CButton color="info" onClick={this.toggleInfo}>Do Something</CButton>{' '}
                  </CModalFooter>
                </CModal>

              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default Modals;
