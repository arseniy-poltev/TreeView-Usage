import React, { Component } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CSwitch } from '@coreui/react';

class Switches extends Component {
  render() {

    return (
      <div className="animated fadeIn">

        <CRow>
          <CCol xs="12" md="12">
            <CCard custom>
              <CCardHeader>
                3d Switch
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'secondary'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'success'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'warning'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'danger'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'light'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'dark'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'primary'}  />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch default
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} checked />
                <CSwitch className={'mx-1'} color={'secondary'} checked />
                <CSwitch className={'mx-1'} color={'success'} checked />
                <CSwitch className={'mx-1'} color={'warning'} checked />
                <CSwitch className={'mx-1'} color={'info'} checked />
                <CSwitch className={'mx-1'} color={'danger'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch default - pills
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} checked />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="12">
            <h4>Outline</h4>
          </CCol>

          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch outline
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} variant="outline" checked />
                <CSwitch className={'mx-1'} color={'secondary'} variant="outline" checked />
                <CSwitch className={'mx-1'} color={'success'} variant="outline" checked />
                <CSwitch className={'mx-1'} color={'warning'} variant="outline" checked />
                <CSwitch className={'mx-1'} color={'info'} variant="outline" checked />
                <CSwitch className={'mx-1'} color={'danger'} variant="outline" checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch outline pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant="outline" checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant="outline" checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant="outline" checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant="outline" checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant="outline" checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant="outline" checked />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="12">
            <h4>Opposite</h4>
          </CCol>

          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch outline alternative
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} variant="opposite" checked />
                <CSwitch className={'mx-1'} color={'secondary'} variant="opposite" checked />
                <CSwitch className={'mx-1'} color={'success'} variant="opposite" checked />
                <CSwitch className={'mx-1'} color={'warning'} variant="opposite" checked />
                <CSwitch className={'mx-1'} color={'info'} variant="opposite" checked />
                <CSwitch className={'mx-1'} color={'danger'} variant="opposite" checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch outline alternative - pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant={'opposite'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant={'opposite'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant={'opposite'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant={'opposite'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant={'opposite'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant={'opposite'} checked />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="12">
            <h4>With text</h4>
          </CCol>

          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'secondary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'warning'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'info'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'danger'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text outline
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'secondary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'success'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'warning'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'info'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'danger'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text outline pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text outline alternative
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'secondary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'success'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'warning'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'info'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'danger'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text outline alternative pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="12">
            <h4>With icon</h4>
          </CCol>

          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'secondary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'warning'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'info'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'danger'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text outline
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'secondary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'success'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'warning'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'info'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'danger'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text outline pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text outline alternative
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'secondary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'success'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'warning'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'info'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} color={'danger'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Switch with text outline alternative pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
                <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="12">
            <h4>Disabled</h4>
          </CCol>

          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                3d Switch <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked disabled />
                <CSwitch className={'mx-1'} variant={'3d'} color={'secondary'} checked disabled />
                <CSwitch className={'mx-1'} variant={'3d'} color={'success'} checked disabled />
                <CSwitch className={'mx-1'} variant={'3d'} color={'warning'} checked disabled />
                <CSwitch className={'mx-1'} variant={'3d'} color={'info'} checked disabled />
                <CSwitch className={'mx-1'} variant={'3d'} color={'danger'} checked disabled />
                <CSwitch className={'mx-1'} variant={'3d'} color={'light'} checked disabled />
                <CSwitch className={'mx-1'} variant={'3d'} color={'dark'} checked disabled />
                <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} disabled />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                3d Switch <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} color={'primary'} checked variant="opposite" />
                <CSwitch className={'mx-1'} color={'secondary'} checked variant="opposite" />
                <CSwitch className={'mx-1'} color={'success'} checked variant="opposite" />
                <CSwitch className={'mx-1'} color={'warning'} checked variant="opposite" />
                <CSwitch className={'mx-1'} color={'info'} checked variant="opposite" />
                <CSwitch className={'mx-1'} color={'danger'} checked variant="opposite" />
                <CSwitch className={'mx-1'} color={'light'} checked variant="opposite" />
                <CSwitch className={'mx-1'} color={'dark'} checked variant="opposite" />
                <CSwitch className={'mx-1'} color={'primary'} variant="opposite" disabled />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="12">
            <h4>3D</h4>
          </CCol>

          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                3d Switch <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'secondary'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'success'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'warning'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'danger'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'light'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'dark'} defaultChecked />
                <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                3d Switch <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CCardHeader>
              <CCardBody>
                <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked labelOn={'\u2713'} labelOff={'\u2715'} />
                <CSwitch className={'mx-1'} variant={'3d'} color={'secondary'} defaultChecked labelOn={'\u2713'} labelOff={'\u2715'}/>
                <CSwitch className={'mx-1'} variant={'3d'} color={'success'} defaultChecked labelOn={'\u2713'} labelOff={'\u2715'}/>
                <CSwitch className={'mx-1'} variant={'3d'} color={'warning'} defaultChecked labelOn={'\u2713'} labelOff={'\u2715'}/>
                <CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked labelOn={'\u2713'} labelOff={'\u2715'}/>
                <CSwitch className={'mx-1'} variant={'3d'} color={'danger'} defaultChecked labelOn={'\u2713'} labelOff={'\u2715'}/>
                <CSwitch className={'mx-1'} variant={'3d'} color={'light'} defaultChecked labelOn={'\u2713'} labelOff={'\u2715'}/>
                <CSwitch className={'mx-1'} variant={'3d'} color={'dark'} defaultChecked labelOn={'\u2713'} labelOff={'\u2715'}/>
                <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'}/>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="12">
            <h4>Sizes</h4>
          </CCol>

          <CCol xs="12">
            <CCard custom>
              <CCardHeader>
                Sizes
              </CCardHeader>
              <CCardBody className="p-0">
                <CTable custom hover striped className="table-align-middle mb-0">
                  <thead>
                  <tr>
                    <th>Size</th>
                    <th>Example</th>
                    <th>Props</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      Large
                    </td>
                    <td>
                      <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked size={'lg'} />
                    </td>
                    <td>
                      Add <code>size={'lg'}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Normal
                    </td>
                    <td>
                      <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked  />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Small
                    </td>
                    <td>
                      <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked size={'sm'} />
                    </td>
                    <td>
                      Add <code>size={'sm'}</code>
                    </td>
                  </tr>
                  </tbody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>
      </div>
    );
  }
}

export default Switches;
