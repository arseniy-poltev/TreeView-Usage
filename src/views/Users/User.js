import React, { Component } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CTable } from '@coreui/react';
import CustomTree from '../CustomTreeview/CustomTree';


const treeConfig = {
  titleColor: "#23282c",
  iconColor: "#23282c",
  infoColor: "#23282c",
  disabledColor: "#a64dff",
  settings: {
    maxDepth: 20,
    showDisabled: true,
    caseSensitive: true,
    showOnlyMatches: false,
  },
  appUrl: "http://localhost:3000/users"
}

class User extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol lg={6}>
            <CCard custom>
              <CCardHeader>
                CustomTree 
              </CCardHeader>
              <CCardBody>
              <CustomTree treeConfig={treeConfig}/>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    )
  }
}

export default User;
