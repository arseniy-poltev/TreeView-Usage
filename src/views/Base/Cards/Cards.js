import React, { Component } from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow, CCollapse, CFade, CSwitch, CLink } from  '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xs="12" sm="6" md="4">
            <CCard custom>
              <CCardHeader>
                Card title
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
              <CCardFooter>Card footer</CCardFooter>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard headerSlot={<>
                Card with icon
                <div className="card-header-actions">
                  <CIcon name="cil-check" className="float-right"></CIcon>
                </div>
              </>}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom>
              <CCardHeader>
                Card with switch
                <div className="card-header-actions">
                  <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'}/>
                </div>
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom>
              <CCardHeader>
                Card with label
                <div className="card-header-actions">
                  <CBadge color="success" className="float-right">Success</CBadge>
                </div>
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom>
              <CCardHeader>
                Card with label
                <div className="card-header-actions">
                  <CBadge shape="pill" color="danger" className="float-right">42</CBadge>
                </div>
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" sm="6" md="4">
            <CCard borderColor="primary" headerSlot="Card outline primary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard borderColor="secondary" headerSlot="Card outline secondary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard borderColor="success" headerSlot="Card outline success">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom borderColor="info">
              <CCardHeader>
                Card outline info
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom borderColor="warning">
              <CCardHeader>
                Card outline warning
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom borderColor="danger">
              <CCardHeader>
                Card outline danger
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>
          <CCol xs="12" sm="6" md="4">
            <CCard custom accentColor="primary">
              <CCardHeader>
                Card with accent
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom accentColor="secondary">
              <CCardHeader>
                Card with accent
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom accentColor="success">
              <CCardHeader>
                Card with accent
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom accentColor="info">
              <CCardHeader>
                Card with accent
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom accentColor="warning">
              <CCardHeader>
                Card with accent
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom accentColor="danger">
              <CCardHeader>
                Card with accent
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" sm="6" md="4">
            <CCard color="primary" className="text-white text-center">
              <blockquote className="card-bodyquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard color="success" className="text-white text-center">
              <blockquote className="card-bodyquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard color="info" className="text-white text-center">
              <blockquote className="card-bodyquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard color="warning" className="text-white text-center">
              <blockquote className="card-bodyquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard color="danger" className="text-white text-center">
              <blockquote className="card-bodyquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard color="primary" className="text-white text-center">
              <blockquote className="card-bodyquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" sm="6" md="4">
            <CCard custom color="primary" className="text-white">
              <CCardHeader>
                Card title
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom color="success" className="text-white">
              <CCardHeader>
                Card title
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom color="info" className="text-white">
              <CCardHeader>
                Card title
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom color="warning" className="text-white">
              <CCardHeader>
                Card title
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CCard custom color="gradient-secondary">
              <CCardHeader>
                Card title - gradient
              </CCardHeader>
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="4">
            <CFade timeout={this.state.timeout} in={this.state.fadeIn}>
              <CCard custom>
                <CCardHeader>
                  Card actions
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <CLink className="card-header-action"><CIcon name="cil-settings" /></CLink>
                    <CLink className="card-header-action" onClick={this.toggle}><CIcon name={this.state.collapse?'cil-chevron-bottom':'cil-chevron-top'} /></CLink>
                    <CLink className="card-header-action" onClick={this.toggleFade}><CIcon name="cil-x-circle" /></CLink>
                  </div>
                </CCardHeader>
                <CCollapse custom show={this.state.collapse}>
                  <CCardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </CCardBody>
                </CCollapse>
              </CCard>
            </CFade>
          </CCol>

        </CRow>
      </div>
    );
  }
}

export default Cards;
