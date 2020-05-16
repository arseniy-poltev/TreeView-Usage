import React, {Component, Context} from 'react';
import { NavLink } from 'react-router-dom'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CBadge,
  CButton,
  CCollapse,
  CDataTable
} from '@coreui/react';
import data from './_data';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.toggleDetails = this.toggleDetails.bind(this);
    this.table = data.rows;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false
    }
    this.state = {
      details: []
    };

  }

  // just an example
  nameFormat(cell, row) {
    const id = `/users/${row.id}`
      return (
      <NavLink strict to={id}> {cell} </NavLink>
    );
  };

  toggleDetails(index) {
    const position = this.state.details.indexOf(index);
    (position !== -1) ? this.state.details.splice(position, 1) :
      this.state.details.push(index);
    this.setState({details: this.state.details})
  }

  render() {

    //example data

    const fields = [
      { key: 'username', _style:'width:40%' },
      'registered',
      { key: 'role', _style:'width:20%;' },
      { key: 'status', _style:'width:20%;' },
      {
        key: 'show_details',
        label: '',
        _style: 'width:1%',
        sorter: false,
        filter: false
      }
    ]

    const usersData = [
      { username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
      { username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      { username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      { username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      { username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      { username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
      { username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned', _classes: 'table-success'},
      { username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      { username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      { username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      { username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active', _classes: 'table-success'},
      { username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      { username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      { username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      { username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      { username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
      { username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      { username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      { username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      { username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      { username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
      { username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      { username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},
      { username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
      { username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
    ]

    const getBadge = (status)=>{
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
      }
    }

    return (
      <div className="animated">
        <CCard custom>
          <CCardHeader>
            Data Table{' '}
            <CBadge href="https://coreui.io/pro/react/" color="danger">CoreUI Pro Component</CBadge>
            <div className="card-header-actions">
              <a href="https://github.com/AllenFang/react-bootstrap-table" rel="noopener noreferrer" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>

          <CCardBody>

            <CDataTable
              items={usersData}
              fields={fields}
              columnFilter
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                'show_details':
                  (item, index)=>{
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={()=>{this.toggleDetails(index)}}
                        >
                          {this.state.details.includes(index) ? 'Hide' : 'Show'}
                        </CButton>
                      </td>
                      )
                  },
                'details':
                    (item, index)=>{
                      return (
                      <CCollapse custom show={this.state.details.includes(index)}>
                        <CCardBody>
                          <h4>
                            {item.username}
                          </h4>
                          <p className="text-muted">User since: {item.registered}</p>
                          <CButton size="sm" color="info">
                            User Settings
                          </CButton>
                          <CButton size="sm" color="danger" className="ml-1">
                            Delete
                          </CButton>
                        </CCardBody>
                      </CCollapse>
                    )
                  }
              }}
            >
              loading...
            </CDataTable>

          </CCardBody>
        </CCard>
      </div>
    );
  }
}

export default DataTable;
