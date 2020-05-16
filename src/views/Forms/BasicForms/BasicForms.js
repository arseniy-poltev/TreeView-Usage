import React, { Component } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CFormFeedback,
  CInput,
  CInputGroup,
  CInputGroupAddon,
  CDropdown,
  CInputGroupText,
  CLabel,
  CRow
} from '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';

class BasicForms extends Component {
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
          <CCol xs="12" sm="6">
            <CCard custom>
              <CCardHeader>
                Credit Card
                <small> Form</small>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="name">Name</CLabel>
                      <CInput type="text" id="name" placeholder="Enter your name" required />
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="ccnumber">Credit Card Number</CLabel>
                      <CInput type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required />
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="ccmonth">Month</CLabel>
                      <CInput type="select" name="ccmonth" id="ccmonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </CInput>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="ccyear">Year</CLabel>
                      <CInput type="select" name="ccyear" id="ccyear">
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </CInput>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="cvv">CVV/CVC</CLabel>
                      <CInput type="text" id="cvv" placeholder="123" required />
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6">
            <CCard custom>
              <CCardHeader>
                Company
                <small> Form</small>
              </CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Company</CLabel>
                  <CInput type="text" id="company" placeholder="Enter your company name" />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">VAT</CLabel>
                  <CInput type="text" id="vat" placeholder="DE1234567890" />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="street">Street</CLabel>
                  <CInput type="text" id="street" placeholder="Enter street name" />
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="8">
                    <CFormGroup>
                      <CLabel htmlFor="city">City</CLabel>
                      <CInput type="text" id="city" placeholder="Enter your city" />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="postal-code">Postal Code</CLabel>
                      <CInput type="text" id="postal-code" placeholder="Postal Code" />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="country">Country</CLabel>
                  <CInput type="text" id="country" placeholder="Country name" />
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Basic Form
                <small> Elements</small>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Static</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <p className="form-control-static">Username</p>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Text Input</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="text" id="text-input" name="text-input" placeholder="Text" />
                      <CFormText color="muted">This is a help text</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input">Email Input</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                      <CFormText className="help-block">Please enter your email</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="password-input">Password</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                      <CFormText className="help-block">Please enter a complex password</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="date-input">Date Input</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="disabled-input">Disabled Input</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="text" id="disabled-input" name="disabled-input" placeholder="Disabled" disabled />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input">Textarea</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">Select</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="selectLg">Select Large</CLabel>
                    </CCol>
                    <CCol xs="12" md="9" size="lg">
                      <CInput type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="selectSm">Select Small</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="select" name="selectSm" id="SelectLm" bsSize="sm">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                      </CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="disabledSelect">Disabled Select</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="select" name="disabledSelect" id="disabledSelect" disabled autoComplete="name">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="multiple-select">Multiple select</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CInput type="select" name="multiple-select" id="multiple-select" multiple>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                        <option value="6">Option #6</option>
                        <option value="7">Option #7</option>
                        <option value="8">Option #8</option>
                        <option value="9">Option #9</option>
                        <option value="10">Option #10</option>
                      </CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Radios</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup check className="radio">
                        <CInput className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                        <CLabel check className="form-check-label" htmlFor="radio1">Option 1</CLabel>
                      </CFormGroup>
                      <CFormGroup check className="radio">
                        <CInput className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                        <CLabel check className="form-check-label" htmlFor="radio2">Option 2</CLabel>
                      </CFormGroup>
                      <CFormGroup check className="radio">
                        <CInput className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                        <CLabel check className="form-check-label" htmlFor="radio3">Option 3</CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Inline Radios</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup check inline>
                        <CInput className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <CLabel className="form-check-label" check htmlFor="inline-radio1">One</CLabel>
                      </CFormGroup>
                      <CFormGroup check inline>
                        <CInput className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                        <CLabel className="form-check-label" check htmlFor="inline-radio2">Two</CLabel>
                      </CFormGroup>
                      <CFormGroup check inline>
                        <CInput className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                        <CLabel className="form-check-label" check htmlFor="inline-radio3">Three</CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3"><CLabel>Checkboxes</CLabel></CCol>
                    <CCol md="9">
                      <CFormGroup check className="checkbox">
                        <CInput className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                        <CLabel check className="form-check-label" htmlFor="checkbox1">Option 1</CLabel>
                      </CFormGroup>
                      <CFormGroup check className="checkbox">
                        <CInput className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                        <CLabel check className="form-check-label" htmlFor="checkbox2">Option 2</CLabel>
                      </CFormGroup>
                      <CFormGroup check className="checkbox">
                        <CInput className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                        <CLabel check className="form-check-label" htmlFor="checkbox3">Option 3</CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Inline Checkboxes</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup check inline>
                        <CInput className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                        <CLabel className="form-check-label" check htmlFor="inline-checkbox1">One</CLabel>
                      </CFormGroup>
                      <CFormGroup check inline>
                        <CInput className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                        <CLabel className="form-check-label" check htmlFor="inline-checkbox2">Two</CLabel>
                      </CFormGroup>
                      <CFormGroup check inline>
                        <CInput className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                        <CLabel className="form-check-label" check htmlFor="inline-checkbox3">Three</CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="file-input">File input</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="file" id="file-input" name="file-input" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="file-multiple-input">Multiple File input</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row hidden>
                    <CCol md="3">
                      <CLabel className="custom-file" htmlFor="custom-file-input">Custom file input</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CLabel className="custom-file">
                        <CInput className="custom-file" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control"></span>
                      </CLabel>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
            <CCard custom>
              <CCardHeader>
                Inline
                <small> Form</small>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" inline>
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputName2" className="pr-1">Name</CLabel>
                    <CInput type="text" id="exampleInputName2" placeholder="Jane Doe" required />
                  </CFormGroup>
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputEmail2" className="pr-1">Email</CLabel>
                    <CInput type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Horizontal
                <small> Form</small>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="hf-email">Email</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." autoComplete="email" />
                      <CFormText className="help-block">Please enter your email</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="hf-password">Password</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." autoComplete="current-password"/>
                      <CFormText className="help-block">Please enter your password</CFormText>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
            <CCard custom>
              <CCardHeader>
                Normal
                <small> Form</small>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post">
                  <CFormGroup>
                    <CLabel htmlFor="nf-email">Email</CLabel>
                    <CInput type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." autoComplete="email"/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="nf-password">Password</CLabel>
                    <CInput type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." autoComplete="current-password"/>
                    <CFormText className="help-block">Please enter your password</CFormText>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
            <CCard custom>
              <CCardHeader>
                Input
                <small> Grid</small>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                  <CFormGroup row>
                    <CCol sm="3">
                      <CInput type="text" placeholder=".col-sm-3" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="4">
                      <CInput type="text" placeholder=".col-sm-4" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="5">
                      <CInput type="text" placeholder=".col-sm-5" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="6">
                      <CInput type="text" placeholder=".col-sm-6" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="7">
                      <CInput type="text" placeholder=".col-sm-7" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="8">
                      <CInput type="text" placeholder=".col-sm-8" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="9">
                      <CInput type="text" placeholder=".col-sm-9" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="10">
                      <CInput type="text" placeholder=".col-sm-10" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="11">
                      <CInput type="text" placeholder=".col-sm-11" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="12">
                      <CInput type="text" placeholder=".col-sm-12" />
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-user" /> Login</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
            <CCard custom>
              <CCardHeader>
                Input
                <small> Sizes</small>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                  <CFormGroup row>
                    <CLabel sm="5" size="sm" htmlFor="input-small">Small Input</CLabel>
                    <CCol sm="6">
                      <CInput bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder=".form-control-sm" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CLabel sm="5" htmlFor="input-normal">Normal Input</CLabel>
                    <CCol sm="6">
                      <CInput type="text" id="input-normal" name="input-normal" placeholder="Normal" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CLabel sm="5" size="lg" htmlFor="input-large">Large Input</CLabel>
                    <CCol sm="6">
                      <CInput bsSize="lg" type="text" id="input-large" name="input-large" className="input-lg" placeholder=".form-control-lg" />
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" sm="6">
            <CCard custom>
              <CCardHeader>
                Form
                <small> validation feedback</small>
              </CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="inputIsValid">Input is valid</CLabel>
                  <CInput type="text" valid id="inputIsValid" />
                  <CFormFeedback valid>Cool! Input is valid</CFormFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="inputIsInvalid">Input is invalid</CLabel>
                  <CInput type="text" invalid id="inputIsInvalid" />
                  <CFormFeedback>Houston, we have a problem...</CFormFeedback>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6">
            <CCard custom>
              <CCardHeader>
                Validation feedback Form
              </CCardHeader>
              <CCardBody>
                <CForm className="was-validated">
                  <CFormGroup>
                    <CLabel htmlFor="inputSuccess2i">Non-required input</CLabel>
                    <CInput type="text" className="form-control-success" id="inputSuccess2i" />
                    <CFormFeedback valid>Non-required</CFormFeedback>
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="inputWarning2i">Required input</CLabel>
                    <CInput type="text" className="form-control-warning" id="inputWarning2i" required />
                    <CFormFeedback className="help-block">Please provide a valid information</CFormFeedback>
                    <CFormFeedback valid className="help-block">Input provided</CFormFeedback>
                  </CFormGroup>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" md="4">
            <CCard custom>
              <CCardHeader>
                Icon/Text Groups
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInputGroupAddon addonType="prepend">
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupAddon>
                        <CInput type="text" id="input1-group1" name="input1-group1" placeholder="Username" />
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInput type="email" id="input2-group1" name="input2-group1" placeholder="Email" />
                        <CInputGroupAddon addonType="append">
                          <CInputGroupText>
                            <CIcon name="cil-envelope-closed" />
                          </CInputGroupText>
                        </CInputGroupAddon>
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInputGroupAddon addonType="prepend">
                          <CInputGroupText>
                            <CIcon name="cil-euro" />
                          </CInputGroupText>
                        </CInputGroupAddon>
                        <CInput type="text" id="input3-group1" name="input3-group1" placeholder=".." />
                        <CInputGroupAddon addonType="append">
                          <CInputGroupText>.00</CInputGroupText>
                        </CInputGroupAddon>
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs="12" md="4">
            <CCard custom>
              <CCardHeader>
                Button Groups
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInputGroupAddon addonType="prepend">
                          <CButton type="button" color="primary"><CIcon name="cil-magnifying-glass" /> Search</CButton>
                        </CInputGroupAddon>
                        <CInput type="text" id="input1-group2" name="input1-group2" placeholder="Username" />
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInput type="email" id="input2-group2" name="input2-group2" placeholder="Email" />
                        <CInputGroupAddon addonType="append">
                          <CButton type="button" color="primary">Submit</CButton>
                        </CInputGroupAddon>
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInputGroupAddon addonType="prepend">
                          <CButton type="button" color="primary"><CIcon name="cib-facebook" /></CButton>
                        </CInputGroupAddon>
                        <CInput type="text" id="input3-group2" name="input3-group2" placeholder="Search" />
                        <CInputGroupAddon addonType="append">
                          <CButton type="button" color="primary"><CIcon name="cib-twitter" /></CButton>
                        </CInputGroupAddon>
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs="12" md="4">
            <CCard custom>
              <CCardHeader>
                Dropdowns Groups
              </CCardHeader>
              <CCardBody>
                <CForm className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CDropdown
                          custom
                          addonType="prepend"
                          show={this.state.first}
                          toggle={() => { this.setState({ first: !this.state.first }); }}
                        >
                          <CDropdownToggle caret color="primary">
                            Dropdown
                          </CDropdownToggle>
                          <CDropdownMenu className={this.state.first ? 'show' : ''}>
                            <CDropdownItem>Action</CDropdownItem>
                            <CDropdownItem>Another Action</CDropdownItem>
                            <CDropdownItem>Something else here</CDropdownItem>
                            <CDropdownItem divider />
                            <CDropdownItem>Separated link</CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                        <CInput type="text" id="input1-group3" name="input1-group3" placeholder="Username" />
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CInput type="email" id="input2-group3" name="input2-group3" placeholder="Email" />
                        <CDropdown
                          custom
                          addonType="append"
                          show={this.state.second}
                          toggle={() => { this.setState({ second: !this.state.second }); }}
                        >
                          <CDropdownToggle caret color="primary">
                            Dropdown
                          </CDropdownToggle>
                          <CDropdownMenu className={this.state.second ? 'show' : ''}>
                            <CDropdownItem>Action</CDropdownItem>
                            <CDropdownItem>Another Action</CDropdownItem>
                            <CDropdownItem>Something else here</CDropdownItem>
                            <CDropdownItem divider />
                            <CDropdownItem>Separated link</CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="12">
                      <CInputGroup>
                        <CDropdown
                          custom
                          addonType="prepend"
                          show={this.state.third}
                          toggle={() => { this.setState({ third: !this.state.third }); }}>
                          <CDropdownToggle caret color="primary">Action</CDropdownToggle>
                          <CDropdownMenu className={this.state.third ? 'show' : ''}>
                            <CDropdownItem>Action</CDropdownItem>
                            <CDropdownItem>Another Action</CDropdownItem>
                            <CDropdownItem>Something else here</CDropdownItem>
                            <CDropdownItem divider />
                            <CDropdownItem>Separated link</CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                        <CInput type="text" id="input3-group3" name="input3-group3" placeholder=".." />
                        <CDropdown
                          custom
                          addonType="append"
                          show={this.state.fourth}
                          toggle={() => { this.setState({ fourth: !this.state.fourth }); }}
                        >
                          <CDropdownToggle caret color="primary">
                            Dropdown
                          </CDropdownToggle>
                          <CDropdownMenu className={this.state.fourth ? 'show' : ''}>
                            <CDropdownItem>Action</CDropdownItem>
                            <CDropdownItem>Another Action</CDropdownItem>
                            <CDropdownItem>Something else here</CDropdownItem>
                            <CDropdownItem divider />
                            <CDropdownItem>Separated link</CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                      </CInputGroup>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Use the grid for big devices!
                <small> <code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="8">
                      <CInput type="text" placeholder=".col-md-8" />
                    </CCol>
                    <CCol md="4">
                      <CInput type="text" placeholder=".col-md-4" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="7">
                      <CInput type="text" placeholder=".col-md-7" />
                    </CCol>
                    <CCol md="5">
                      <CInput type="text" placeholder=".col-md-5" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="6">
                      <CInput type="text" placeholder=".col-md-6" />
                    </CCol>
                    <CCol md="6">
                      <CInput type="text" placeholder=".col-md-6" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="5">
                      <CInput type="text" placeholder=".col-md-5" />
                    </CCol>
                    <CCol md="7">
                      <CInput type="text" placeholder=".col-md-7" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="4">
                      <CInput type="text" placeholder=".col-md-4" />
                    </CCol>
                    <CCol md="8">
                      <CInput type="text" placeholder=".col-md-8" />
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">Action</CButton>
                <CButton size="sm" color="danger">Action</CButton>
                <CButton size="sm" color="warning">Action</CButton>
                <CButton size="sm" color="info">Action</CButton>
                <CButton size="sm" color="success">Action</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard custom>
              <CCardHeader>
                Input Grid for small devices!
                <small> <code>.col-*</code></small>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                  <CFormGroup row>
                    <CCol xs="4">
                      <CInput type="text" placeholder=".col-4" />
                    </CCol>
                    <CCol xs="8">
                      <CInput type="text" placeholder=".col-8" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol xs="5">
                      <CInput type="text" placeholder=".col-5" />
                    </CCol>
                    <CCol xs="7">
                      <CInput type="text" placeholder=".col-7" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol xs="6">
                      <CInput type="text" placeholder=".col-6" />
                    </CCol>
                    <CCol xs="6">
                      <CInput type="text" placeholder=".col-6" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol xs="7">
                      <CInput type="text" placeholder=".col-5" />
                    </CCol>
                    <CCol xs="5">
                      <CInput type="text" placeholder=".col-5" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol xs="8">
                      <CInput type="text" placeholder=".col-8" />
                    </CCol>
                    <CCol xs="4">
                      <CInput type="text" placeholder=".col-4" />
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">Action</CButton>
                <CButton size="sm" color="danger">Action</CButton>
                <CButton size="sm" color="warning">Action</CButton>
                <CButton size="sm" color="info">Action</CButton>
                <CButton size="sm" color="success">Action</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" sm="4">
            <CCard custom>
              <CCardHeader>
                Example Form
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post">
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText>Username</CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="email" id="username3" name="username3" autoComplete="name"/>
                      <CInputGroupAddon addonType="append">
                        <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                      </CInputGroupAddon>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText>Email</CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="email" id="email3" name="email3" autoComplete="username"/>
                      <CInputGroupAddon addonType="append">
                        <CInputGroupText><CIcon name="cil-envelope-closed" /></CInputGroupText>
                      </CInputGroupAddon>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText>Password</CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="password" id="password3" name="password3" autoComplete="current-password"/>
                      <CInputGroupAddon addonType="append">
                        <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                      </CInputGroupAddon>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup className="form-actions">
                    <CButton type="submit" size="sm" color="primary">Submit</CButton>
                  </CFormGroup>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="4">
            <CCard custom>
              <CCardHeader>
                Example Form
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post">
                  <CFormGroup>
                    <CInputGroup>
                      <CInput type="text" id="username2" name="username2" placeholder="Username" autoComplete="name"/>
                      <CInputGroupAddon addonType="append">
                        <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                      </CInputGroupAddon>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInput type="email" id="email2" name="email2" placeholder="Email" autoComplete="username"/>
                      <CInputGroupAddon addonType="append">
                        <CInputGroupText><CIcon name="cil-envelope-closed" /></CInputGroupText>
                      </CInputGroupAddon>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInput type="password" id="password2" name="password2" placeholder="Password" autoComplete="current-password"/>
                      <CInputGroupAddon addonType="append">
                        <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                      </CInputGroupAddon>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup className="form-actions">
                    <CButton type="submit" size="sm" color="secondary">Submit</CButton>
                  </CFormGroup>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="4">
            <CCard custom>
              <CCardHeader>
                Example Form
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post">
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="text" id="username1" name="username1" placeholder="Username" autoComplete="name"/>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText><CIcon name="cil-envelope-closed" /></CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="email" id="email1" name="email1" placeholder="Email" autoComplete="username"/>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupAddon addonType="prepend">
                        <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                      </CInputGroupAddon>
                      <CInput type="password" id="password1" name="password1" placeholder="Password" autoComplete="current-password"/>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup className="form-actions">
                    <CButton type="submit" size="sm" color="success">Submit</CButton>
                  </CFormGroup>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12">
            <CFade timeout={this.state.timeout} in={this.state.fadeIn}>
              <CCard custom>
                <CCardHeader>
                  Form Elements
                  <div className="card-header-actions">
                    <CButton color="link" className="card-header-action btn-setting"><CIcon name="cil-settings" /></CButton>
                    <CButton color="link" className="card-header-action btn-minimize" data-target="#collapseExample" onClick={this.toggle}><CIcon name="cil-arrow-top" /></CButton>
                    <CButton color="link" className="card-header-action btn-close" onClick={this.toggleFade}><CIcon name="cil-x" /></CButton>
                  </div>
                </CCardHeader>
                <CCollapse custom show={this.state.collapse} id="collapseExample">
                  <CCardBody>
                    <CForm className="form-horizontal">
                      <CFormGroup>
                        <CLabel htmlFor="prependedInput">Prepended text</CLabel>
                        <div className="controls">
                          <CInputGroup className="input-prepend">
                            <CInputGroupAddon addonType="prepend">
                              <CInputGroupText>@</CInputGroupText>
                            </CInputGroupAddon>
                            <CInput id="prependedInput" size="16" type="text" />
                          </CInputGroup>
                          <p className="help-block">Here's some help text</p>
                        </div>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="appendedInput">Appended text</CLabel>
                        <div className="controls">
                          <CInputGroup>
                            <CInput id="appendedInput" size="16" type="text" />
                            <CInputGroupAddon addonType="append">
                              <CInputGroupText>.00</CInputGroupText>
                            </CInputGroupAddon>
                          </CInputGroup>
                          <span className="help-block">Here's more help text</span>
                        </div>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="appendedPrependedInput">Append and prepend</CLabel>
                        <div className="controls">
                          <CInputGroup className="input-prepend">
                            <CInputGroupAddon addonType="prepend">
                              <CInputGroupText>$</CInputGroupText>
                            </CInputGroupAddon>
                            <CInput id="appendedPrependedInput" size="16" type="text" />
                            <CInputGroupAddon addonType="append">
                              <CInputGroupText>.00</CInputGroupText>
                            </CInputGroupAddon>
                          </CInputGroup>
                        </div>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="appendedInputButton">Append with button</CLabel>
                        <div className="controls">
                          <CInputGroup>
                            <CInput id="appendedInputButton" size="16" type="text" />
                            <CInputGroupAddon addonType="append">
                              <CButton color="secondary">Go!</CButton>
                            </CInputGroupAddon>
                          </CInputGroup>
                        </div>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="appendedInputButtons">Two-button append</CLabel>
                        <div className="controls">
                          <CInputGroup>
                            <CInput id="appendedInputButtons" size="16" type="text" />
                            <CInputGroupAddon addonType="append">
                              <CButton color="secondary">Search</CButton>
                              <CButton color="secondary">Options</CButton>
                            </CInputGroupAddon>
                          </CInputGroup>
                        </div>
                      </CFormGroup>
                      <div className="form-actions">
                        <CButton type="submit" color="primary">Save changes</CButton>
                        <CButton color="secondary">Cancel</CButton>
                      </div>
                    </CForm>
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

export default BasicForms;
