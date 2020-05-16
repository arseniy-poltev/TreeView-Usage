import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CPopover,
  CRow,
  CCol
} from '@coreui/react'

class Popovers extends Component {
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
            Popovers
            <div className="card-header-actions">
              <a
                href="https://coreui.github.io/components/popovers/"
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
              Hover over the links below to see popover:
            </p>

            <p className="muted">
              Tight pants next level keffiyeh
              <CPopover header="Popover header" content="Popover text">
                <a href="#"> you probably </a>
              </CPopover>
               haven't heard of them.
              Photo booth beard raw denim letterpress vegan messenger
              bag stumptown. Farm-to-table seitan, mcsweeney's fixie
              sustainable quinoa 8-bit american apparel
              <CPopover header="Popover header" content="Popover text">
                <a href="#"> have a </a>
              </CPopover>
              terry richardson vinyl chambray. Beard stumptown,
              cardigans banh mi lomo thundercats. Tofu biodiesel
              williamsburg marfa, four loko mcsweeney''s cleanse
              vegan chambray. A really ironic artisan
              <CPopover header="Popover header" content="Popover text">
                <a href="#"> whatever keytar </a>
              </CPopover>
              scenester farm-to-table banksy Austin
              <CPopover header="Popover header" content="Popover text">
                <a href="#"> twitter handle </a>
              </CPopover>

              freegan cred raw denim single-origin coffee viral.
            </p>
          </CCardBody>
        </CCard>

        <hr/>

        <CCard custom>
          <CCardHeader>
            Popovers
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
                    <CPopover header="Popover header"
                      content={`Popover with placement: ${placement}`}
                      placement={placement}
                    >
                      <CButton color="primary">
                        { placement }
                      </CButton>
                    </CPopover>
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

export default Popovers;
