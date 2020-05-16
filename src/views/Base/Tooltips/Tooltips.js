import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTooltip,
  CRow,
  CCol
} from '@coreui/react'

class Tooltips extends Component {
  constructor(props) {
    super(props);

    this.placements = [
      'top-start', 'top', 'top-end',
      'bottom-start', 'bottom', 'bottom-end',
      'right-start', 'right', 'right-end',
      'left-start', 'left', 'left-end'
    ]
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CCard custom>
          <CCardHeader>
            Tooltips
            <div className="card-header-actions">
              <a
                href="https://coreui.github.io/components/tooltips/"
                rel="noreferrer noopener"
                target="_blank"
                className="card-header-action"
              >
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            {/*eslint-disable-next-line*/}

            <p className="text-muted">
              Hover over the links below to see tooltips:
            </p>

            <p className="muted">
              Tight pants next level keffiyeh
              <CTooltip content="Tooltip text">
                <a href="#"> you probably </a>
              </CTooltip>
               haven't heard of them.
              Photo booth beard raw denim letterpress vegan messenger
              bag stumptown. Farm-to-table seitan, mcsweeney's fixie
              sustainable quinoa 8-bit american apparel
              <CTooltip content="Tooltip text">
                <a href="#"> have a </a>
              </CTooltip>
              terry richardson vinyl chambray. Beard stumptown,
              cardigans banh mi lomo thundercats. Tofu biodiesel
              williamsburg marfa, four loko mcsweeney''s cleanse
              vegan chambray. A really ironic artisan
              <CTooltip content="Tooltip text">
                <a href="#"> whatever keytar </a>
              </CTooltip>
              scenester farm-to-table banksy Austin
              <CTooltip content="Tooltip text">
                <a href="#"> twitter handle </a>
              </CTooltip>

              freegan cred raw denim single-origin coffee viral.
            </p>
          </CCardBody>
        </CCard>

        <hr/>

        <CCard custom>
          <CCardHeader>
            Tooltips
            <small> placement</small>
          </CCardHeader>
          <CCardBody>
            <div className="my-3">
              <CRow>
                {this.placements.map(placement => {
                  return (<CCol
                    md="4"
                    className="py-4 text-center"
                    key={placement}
                  >
                    <CTooltip
                      content={`Tooltip with placement: ${placement}`}
                      placement={placement}
                    >
                      <CButton color="primary">
                        { placement }
                      </CButton>
                    </CTooltip>
                  </CCol>)
                })}
              </CRow>
            </div>
          </CCardBody>
        </CCard>
      </div>
    )
  }
}

export default Tooltips;
