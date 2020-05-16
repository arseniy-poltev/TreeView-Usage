import React, { Component } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CRow } from '@coreui/react';

class Collapses extends Component {

  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleMulti = this.toggleMulti.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      collapseMulti: [false, false],
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle(e) {
    this.setState({ collapse: !this.state.collapse });
    e.preventDefault();
  }

  toggleMulti(type) {

    const collapseMulti = this.state.collapseMulti;

    switch (type) {
      case "left":
        collapseMulti[0] = !collapseMulti[0];
        break;
      case "right":
        collapseMulti[1] = !collapseMulti[1];
        break;
      case "both":
        collapseMulti[0] = !collapseMulti[0];
        collapseMulti[1] = !collapseMulti[1];
        break;
      default:
    }

    this.setState({
      collapseMulti: collapseMulti
    });

  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xl="6">

            <CCard custom>
              <CCardHeader>
                Collapse
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/collapse/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCollapse custom show={this.state.collapse} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
                <CCardBody>
                  <p>
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </p>
                  <p>
                    Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean
                    elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras
                    ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus.
                    Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis
                    sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis
                    purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non
                    augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget
                    faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu,
                    vehicula sagittis elit leo id nisi.
                  </p>
                </CCardBody>
              </CCollapse>
              <CCardFooter>
                <CButton color="primary" href="#collapseExample" onClick={this.toggle} className={'mb-1'}>Link with href</CButton>{' '}
                <CButton color="primary" onClick={this.toggle} className={'mb-1'}>Button with data-toggle</CButton>
                <hr/>
                <h5>Current state: {this.state.status}</h5>
              </CCardFooter>
            </CCard>

            <CCard custom>
              <CCardHeader>
                Collapse
                <small> multi target</small>
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/collapse/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
                <CCardBody>
                  <p>
                    <CButton color="primary" onClick={()=>{this.toggleMulti('left')}}>Left</CButton>{' '}
                    <CButton color="primary" onClick={()=>{this.toggleMulti('right')}}>Right</CButton>{' '}
                    <CButton color="primary" onClick={()=>{this.toggleMulti('both')}}>Both</CButton>{' '}
                  </p>
                  <CRow>
                    <CCol>
                      <CCollapse custom show={this.state.collapseMulti[0]}>
                        <CCard>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </CCard>
                      </CCollapse>
                    </CCol>
                    <CCol className="col-sm-12 col-md-6">
                      <CCollapse custom show={this.state.collapseMulti[1]}>
                        <CCard>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </CCard>
                      </CCollapse>
                    </CCol>
                  </CRow>
                </CCardBody>
            </CCard>

            <hr/>

            <CCard custom>
              <CCardHeader>
                Fade
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/fade/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <CFade timeout={this.state.timeout} in={this.state.fadeIn} tag="h5" className="mt-3">
                  This content will fade in and out as the button is pressed...
                </CFade>
              </CCardBody>
              <CCardFooter>
                <CButton color="primary" onClick={this.toggleFade} id="toggleFade1">Toggle Fade</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xl="6">
            <CCard custom>
              <CCardHeader>
                Collapse
                <small> accordion</small>
              </CCardHeader>
              <CCardBody>
                <div id="accordion">
                  <CCard custom className="mb-0">
                    <CCardHeader id="headingOne">
                      <CButton block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)}>
                        <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                      </CButton>
                    </CCardHeader>
                    <CCollapse custom show={this.state.accordion[0]}>
                      <CCardBody>
                        1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                      </CCardBody>
                    </CCollapse>
                  </CCard>
                  <CCard custom className="mb-0">
                    <CCardHeader id="headingTwo">
                      <CButton block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)}>
                        <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                      </CButton>
                    </CCardHeader>
                    <CCollapse custom show={this.state.accordion[1]}>
                      <CCardBody>
                        2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                      </CCardBody>
                    </CCollapse>
                  </CCard>
                  <CCard custom className="mb-0">
                    <CCardHeader id="headingThree">
                      <CButton block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)}>
                        <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                      </CButton>
                    </CCardHeader>
                    <CCollapse custom show={this.state.accordion[2]}>
                      <CCardBody>
                        3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                      </CCardBody>
                    </CCollapse>
                  </CCard>
                </div>
              </CCardBody>
            </CCard>
            <CCard custom>
              <CCardHeader>
                Collapse
                <small> custom accordion</small>
              </CCardHeader>
              <CCardBody>
                <div id="exampleAccordion">
                  <div>
                    <CButton className="m-0 p-0" color="link" onClick={() => this.toggleCustom(0)}>
                      Toggle item
                    </CButton>
                    <CCollapse custom show={this.state.custom[0]}>
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget
                        tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
                      </p>
                    </CCollapse>
                  </div>
                  <div>
                    <CButton className="m-0 p-0" color="link" onClick={() => this.toggleCustom(1)}>
                      Toggle item 2
                    </CButton>
                    <CCollapse custom show={this.state.custom[1]}>
                      <p className="mb-3">
                        Donec at ipsum dignissim, rutrum turpis scelerisque, tristique lectus. Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                      </p>
                    </CCollapse>
                  </div>
                </div>
              </CCardBody>
            </CCard>

            <CCard custom>
              <CCardHeader>
                Collapse
                <small> custom accordion</small>
              </CCardHeader>
              <CCardBody>
                <CButton id="myCollpase" className="m-0 p-0" color="link">
                  Toggle item
                </CButton>
                <CCollapse toggler="myCollpase">
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget
                    tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
                  </p>
                </CCollapse>
                <CCollapse toggler="myCollpase">
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget
                    tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
                  </p>
                </CCollapse>
              </CCardBody>
            </CCard>

          </CCol>
        </CRow>
      </div>
    );
  }
}

export default Collapses;
