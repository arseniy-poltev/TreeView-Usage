import React, { Component } from 'react';
import { CCard, CCardBody, CCardHeader, CPagination, CPaginationItem, CPaginationLink } from '@coreui/react';

class Paginations extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <CCard custom>
          <CCardHeader>
            Pagination
            <div className="card-header-actions">
              <a href="https://coreui.github.io/components/pagination/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CPagination onClick={(e, type, n)=>{}} firstButtonHtml='Start' previousButtonHtml='Previous' lastButtonHtml='End' nextButtonHtml='Next' />
          </CCardBody>
        </CCard>
        <CCard custom>
          <CCardHeader>
            Pagination
            <small> with icons</small>
            <div className="card-header-actions">
              <a href="https://coreui.github.io/components/pagination/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CPagination custom onClick={()=>{}}>
              <CPaginationItem custom>
                <CPaginationLink>link</CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  1
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem onClick={()=>{}}>
                2
              </CPaginationItem>
              <CPaginationItem>
                3
              </CPaginationItem>
              <CPaginationLink>link</CPaginationLink>
            </CPagination>
          </CCardBody>
        </CCard>
        <CCard custom>
          <CCardHeader>
            Pagination
            <small> disabled and active states</small>
          </CCardHeader>
          <CCardBody>
            <CPagination custom onChange={()=>{alert(1)}}>
              <CPaginationItem disabled>
                Previous
              </CPaginationItem>
              <CPaginationItem>
                1
              </CPaginationItem>
              <CPaginationItem active>
                2
              </CPaginationItem>
              <CPaginationItem>
                3
              </CPaginationItem>
              <CPaginationItem>
                Next
              </CPaginationItem>
            </CPagination>
            <CPagination custom>
              <CPaginationItem custom disabled>
                <CPaginationLink previous tag="span">
                  Previous
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  1
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom active>
                <CPaginationLink tag="span">
                  2
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  3
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink next>
                  Next
                </CPaginationLink>
              </CPaginationItem>
            </CPagination>
          </CCardBody>
        </CCard>
        <CCard custom>
          <CCardHeader>
            Pagination
            <small> sizing</small>
          </CCardHeader>
          <CCardBody>
            <CPagination custom size="lg">
              <CPaginationItem custom disabled>
                <CPaginationLink previous>
                  Previous
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  1
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  2
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  3
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom className="d-none d-sm-block">
                <CPaginationLink next />
              </CPaginationItem>
            </CPagination>
            <CPagination custom>
              <CPaginationItem custom disabled>
                <CPaginationLink previous>
                  Previous
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  1
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  2
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  3
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink next />
              </CPaginationItem>
            </CPagination>
            <CPagination custom size="sm">
              <CPaginationItem custom disabled>
                <CPaginationLink previous>
                  Previous
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  1
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  2
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  3
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink next />
              </CPaginationItem>
            </CPagination>
          </CCardBody>
        </CCard>
        <CCard custom>
          <CCardHeader>
            Pagination
            <small> alignment</small>
          </CCardHeader>
          <CCardBody>
            <CPagination custom listClassName="justify-content-start">
              <CPaginationItem custom disabled>
                <CPaginationLink previous>
                  Previous
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  1
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  2
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  3
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom className="d-none d-sm-block">
                <CPaginationLink next>
                  Next
                </CPaginationLink>
              </CPaginationItem>
            </CPagination>
            <hr/>
            <CPagination custom listClassName="justify-content-center">
              <CPaginationItem custom disabled>
                <CPaginationLink previous>
                  Previous
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  1
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  2
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  3
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom className="d-none d-sm-block">
                <CPaginationLink next>
                  Next
                </CPaginationLink>
              </CPaginationItem>
            </CPagination>
            <hr/>
            <CPagination custom listClassName="justify-content-end">
              <CPaginationItem custom disabled>
                <CPaginationLink previous>
                  Previous
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  1
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  2
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom>
                <CPaginationLink>
                  3
                </CPaginationLink>
              </CPaginationItem>
              <CPaginationItem custom className="d-none d-sm-block">
                <CPaginationLink next>
                  Next
                </CPaginationLink>
              </CPaginationItem>
            </CPagination>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}

export default Paginations;
