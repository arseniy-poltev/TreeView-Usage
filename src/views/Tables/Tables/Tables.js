import React, { Component } from 'react';
import { CBadge, CCard, CCardBody, CCardHeader, CCol, CPagination, CPaginationItem, CPaginationLink, CRow, CTable } from '@coreui/react';

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xs="12" lg="6">
            <CCard custom>
              <CCardHeader>
                Simple Table
              </CCardHeader>
              <CCardBody>
                <CTable custom responsive>
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Samppa Nori</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Estavan Lykos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="danger">Banned</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Chetan Mohamed</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <CBadge color="secondary">Inactive</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Derick Maximinus</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="warning">Pending</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Friderik Dávid</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  </tbody>
                </CTable>
                <CPagination>
                  <CPaginationItem>
                    <CPaginationLink previous tag="button">Prev</CPaginationLink>
                  </CPaginationItem>
                  <CPaginationItem active>
                    <CPaginationLink tag="button">1</CPaginationLink>
                  </CPaginationItem>
                  <CPaginationItem>
                    <CPaginationLink tag="button">2</CPaginationLink>
                  </CPaginationItem>
                  <CPaginationItem>
                    <CPaginationLink tag="button">3</CPaginationLink>
                  </CPaginationItem>
                  <CPaginationItem>
                    <CPaginationLink tag="button">4</CPaginationLink>
                  </CPaginationItem>
                  <CPaginationItem>
                    <CPaginationLink next tag="button">Next</CPaginationLink>
                  </CPaginationItem>
                </CPagination>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol xs="12" lg="6">
            <CCard custom>
              <CCardHeader>
                Striped Table
              </CCardHeader>
              <CCardBody>
                <CTable custom responsive striped>
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Yiorgos Avraamu</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Avram Tarasios</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="danger">Banned</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Quintin Ed</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <CBadge color="secondary">Inactive</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Enéas Kwadwo</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="warning">Pending</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Agapetus Tadeáš</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  </tbody>
                </CTable>
                <CPagination>
                  <CPaginationItem><CPaginationLink previous tag="button">Prev</CPaginationLink></CPaginationItem>
                  <CPaginationItem active>
                    <CPaginationLink tag="button">1</CPaginationLink>
                  </CPaginationItem>
                  <CPaginationItem><CPaginationLink tag="button">2</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink tag="button">3</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink tag="button">4</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink next tag="button">Next</CPaginationLink></CPaginationItem>
                </CPagination>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>

          <CCol xs="12" lg="6">
            <CCard custom>
              <CCardHeader>
                Condensed Table
              </CCardHeader>
              <CCardBody>
                <CTable custom responsive size="sm">
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Carwyn Fachtna</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Nehemiah Tatius</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="danger">Banned</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Ebbe Gemariah</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <CBadge color="secondary">Inactive</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Eustorgios Amulius</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="warning">Pending</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Leopold Gáspár</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  </tbody>
                </CTable>
                <CPagination>
                  <CPaginationItem><CPaginationLink previous tag="button">Prev</CPaginationLink></CPaginationItem>
                  <CPaginationItem active>
                    <CPaginationLink tag="button">1</CPaginationLink>
                  </CPaginationItem>
                  <CPaginationItem><CPaginationLink tag="button">2</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink tag="button">3</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink tag="button">4</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink next tag="button">Next</CPaginationLink></CPaginationItem>
                </CPagination>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol xs="12" lg="6">
            <CCard custom>
              <CCardHeader>
                Bordered Table
              </CCardHeader>
              <CCardBody>
                <CTable custom responsive bordered>
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Pompeius René</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Paĉjo Jadon</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="danger">Banned</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Micheal Mercurius</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <CBadge color="secondary">Inactive</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Ganesha Dubhghall</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="warning">Pending</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Hiroto Šimun</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  </tbody>
                </CTable>
                <CPagination>
                  <CPaginationItem><CPaginationLink previous tag="button">Prev</CPaginationLink></CPaginationItem>
                  <CPaginationItem active>
                    <CPaginationLink tag="button">1</CPaginationLink>
                  </CPaginationItem>
                  <CPaginationItem className="page-item"><CPaginationLink tag="button">2</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink tag="button">3</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink tag="button">4</CPaginationLink></CPaginationItem>
                  <CPaginationItem><CPaginationLink next tag="button">Next</CPaginationLink></CPaginationItem>
                </CPagination>
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>

        <CRow>
          <CCol>
            <CCard custom>
              <CCardHeader>
                Combined All Table
              </CCardHeader>
              <CCardBody>
                <CTable custom hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="danger">Banned</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <CBadge color="secondary">Inactive</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <CBadge color="warning">Pending</CBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <CBadge color="success">Active</CBadge>
                    </td>
                  </tr>
                  </tbody>
                </CTable>
                  <CPagination>
                    <CPaginationItem><CPaginationLink previous tag="button">Prev</CPaginationLink></CPaginationItem>
                    <CPaginationItem active>
                      <CPaginationLink tag="button">1</CPaginationLink>
                    </CPaginationItem>
                    <CPaginationItem><CPaginationLink tag="button">2</CPaginationLink></CPaginationItem>
                    <CPaginationItem><CPaginationLink tag="button">3</CPaginationLink></CPaginationItem>
                    <CPaginationItem><CPaginationLink tag="button">4</CPaginationLink></CPaginationItem>
                    <CPaginationItem><CPaginationLink next tag="button">Next</CPaginationLink></CPaginationItem>
                  </CPagination>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>

    );
  }
}

export default Tables;
