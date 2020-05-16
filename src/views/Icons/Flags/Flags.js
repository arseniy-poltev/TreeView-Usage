import React, { Component } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import {
  CIconRaw
} from '@coreui/icons-react';

import { flagSet } from '@coreui/icons';
class CoreUIIcons extends Component {
  render() {

    const toKebabCase = (str)=>{
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }

    let flags=[];
    for (let name in flagSet)
      flags.push(
        <CCol xs="6" sm="4" md="3" xl="2" key={name}>
          <CIconRaw name={name} size="2xl"/>
          <div>{toKebabCase(name)}</div>
        </CCol>
      );

    return (
      <div className="animated fadeIn">

        <CCard custom>
          <CCardHeader>
            Flag Icons / as CIconRaw{' '}
            <div className="card-header-actions">
              <a href="https://github.com/coreui/coreui-icons" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Github</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow className="text-center">
              {flags}
            </CRow>
          </CCardBody>
        </CCard>

      </div>
    );
  }
}

export default CoreUIIcons;
