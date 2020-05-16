import React from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CFormText,
  CInputGroup,
  CInputGroupAddon,
  CInputGroupText,
  CBadge } from '@coreui/react';
  import {
    CIcon
  } from '@coreui/icons-react';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';

// React DateRangePicker
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

// React select
import states from './data/states';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

const options = states.US;

class AdvancedForms extends React.Component {

  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      value: ['UT','OH'],
      windowWidth: window.innerWidth,
      orientation: 'vertical',
      openDirection: 'down'
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  saveChanges(value) {
    this.setState({ value });
  }

  updateDimensions() {
    const windowWidth = window.innerWidth;
    this.setState((state)=> {
      return ({
        windowWidth: windowWidth,
        orientation: windowWidth < 620 ? 'vertical' : 'horizontal',
        openDirection: windowWidth < 620 ? 'up' : 'down'
      });
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CRow>
          <CCol sm={12} md={6} style={{flexBasis: 'auto'}}>
            <CCard custom>
              <CCardHeader>
                Masked Input
                <small> React Text Mask</small>{' '}
                <CBadge href="https://coreui.io/pro/react/" color="danger">CoreUI Pro Component</CBadge>
              </CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel>Date input</CLabel>
                  <CInputGroup>
                    <CInputGroupAddon addonType="prepend">
                      <CInputGroupText><CIcon name="cil-calendar" /></CInputGroupText>
                    </CInputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </CInputGroup>
                  <CFormText color="muted">
                    ex. 99/99/9999
                  </CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Phone input</CLabel>
                  <CInputGroup>
                    <CInputGroupAddon addonType="prepend">
                      <CInputGroupText><CIcon name="cil-phone" /></CInputGroupText>
                    </CInputGroupAddon>
                    <TextMask
                      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </CInputGroup>
                  <CFormText color="muted">
                    ex. (999) 999-9999
                  </CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Taxpayer Identification Numbers</CLabel>
                  <CInputGroup>
                    <CInputGroupAddon addonType="prepend">
                      <CInputGroupText><CIcon name="cil-dollar" /></CInputGroupText>
                    </CInputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </CInputGroup>
                  <CFormText color="muted">
                    ex. 99-9999999
                  </CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Social Security Number</CLabel>
                  <CInputGroup>
                    <CInputGroupAddon addonType="prepend">
                      <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                    </CInputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </CInputGroup>
                  <CFormText color="muted">
                    ex. 999-99-9999
                  </CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Eye Script</CLabel>
                  <CInputGroup>
                    <CInputGroupAddon addonType="prepend">
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupAddon>
                    <TextMask
                      mask={['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </CInputGroup>
                  <CFormText color="muted">
                    ex. ~9.99 ~9.99 999
                  </CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Credit Card Number</CLabel>
                  <CInputGroup>
                    <CInputGroupAddon addonType="prepend">
                      <CInputGroupText><CIcon name="cil-credit-card" /></CInputGroupText>
                    </CInputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </CInputGroup>
                  <CFormText color="muted">
                    ex. 9999 9999 9999 9999
                  </CFormText>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm={12} md={6}>
            <CCard custom>
              <CCardHeader>
                React-Select{' '}
                <CBadge href="https://coreui.io/pro/react/" color="danger">CoreUI Pro Component</CBadge>
                <div className="card-header-actions">
                  <a href="https://github.com/JedWatson/react-select" rel="noreferrer noopener" target="_blank" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <CCardBody>
              <Select
                name="form-field-name2"
                value={this.state.value}
                options={options}
                onChange={this.saveChanges}
                multi
              />
            </CCardBody>
          </CCard>
          <CCard custom>
            <CCardHeader>
              React-Dates{' '}
              <CBadge href="https://coreui.io/pro/react/" color="danger">CoreUI Pro Component</CBadge>
              <div className="card-header-actions">
                <a href="https://github.com/airbnb/react-dates" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="startDate"
              endDate={this.state.endDate}
              endDateId="endDate"
              onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate})}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({focusedInput})}
              orientation={this.state.orientation}
              openDirection={this.state.openDirection}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
)
}
}

export default AdvancedForms;
