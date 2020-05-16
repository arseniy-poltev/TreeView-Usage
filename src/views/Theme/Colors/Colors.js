import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CRow, CCol, CTable } from '@coreui/react';
//import { rgbToHex } from '@coreui/coreui-pro/dist/js/coreui-utilities'
import { rgbToHex } from '@coreui/utils/src'

class ThemeView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'rgb(255, 255, 255)'
    }
  }

  componentDidMount () {
    const elem = ReactDOM.findDOMNode(this).parentNode.firstChild;
    const color = window.getComputedStyle(elem).getPropertyValue('background-color');
    this.setState({
      bgColor: color || this.state.bgColor
    })
  }

  render() {
    return (
      <CTable custom className="w-100">
        <tbody>
        <tr>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{ rgbToHex(this.state.bgColor) }</td>
        </tr>
        <tr>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{ this.state.bgColor }</td>
        </tr>
        </tbody>
      </CTable>
    )
  }

}

class ThemeColor extends Component {

  render() {

    const { className, children } = this.props

    const classes = classNames(className, 'theme-color w-75 rounded mb-3')

    return (
      <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
        <div className={classes} style={{paddingTop: '75%'}}></div>
        {children}
        <ThemeView/>
      </CCol>
    )
  }

}

class Colors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            Theme colors
          </div>
          <div className="card-body">
            <CRow>
              <ThemeColor className="bg-primary">
                <h6>Brand Primary Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-secondary">
                <h6>Brand Secondary Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-success">
                <h6>Brand Success Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-danger">
                <h6>Brand Danger Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-warning">
                <h6>Brand Warning Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-info">
                <h6>Brand Info Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-light">
                <h6>Brand Light Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-dark">
                <h6>Brand Dark Color</h6>
              </ThemeColor>
            </CRow>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Grays
          </div>
          <div className="card-body">
            <CRow className="mb-3">
              <ThemeColor className="bg-gray-100">
                <h6>Gray 100 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-200">
                <h6>Gray 200 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-300">
                <h6>Gray 300 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-400">
                <h6>Gray 400 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-500">
                <h6>Gray 500 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-600">
                <h6>Gray 600 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-700">
                <h6>Gray 700 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-800">
                <h6>Gray 800 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-900">
                <h6>Gray 900 Color</h6>
              </ThemeColor>
            </CRow>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;
