import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CBadge, CCard, CCardBody, CCardHeader, CCol, CRow, CTable } from '@coreui/react';

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><CBadge color={getBadge(user.status)}>{user.status}</CBadge></Link></td>
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol xl={6}>
            <CCard custom>
              <CCardHeader>
                Users
                <small className="text-muted"> example</small>
              </CCardHeader>
              <CCardBody>
                <CTable custom responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    )
  }
}

export default Users;
