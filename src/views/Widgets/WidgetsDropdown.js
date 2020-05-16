import React from 'react';
import PropTypes from 'prop-types';
import { CWidgetDropdown, CRow, CCol, CDropdown, CDropdownMenu, CDropdownItem, CDropdownToggle } from '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';
import ChartLineSimple from '../Charts/ChartLineSimple';
import ChartBarSimple from '../Charts/ChartBarSimple';

const WidgetsDropdown = (props)=>{

  // render

  return (
    <CRow>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="9.823"
          text="Members online"
          dropdownSlot={
            <CDropdown group={false}>
              <CDropdownToggle caret className="text-white" color="transparent">
                <CIcon name="cil-settings"/>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" right>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
        >
          <ChartLineSimple
            pointed
            className="mt-3 mx-3"
            style={{height: '70px'}}
            dataPoints={[65, 59, 84, 84, 51, 55, 40]}
            pointHoverBackgroundColor="primary"
            label="Members"
            labels="months"
          />
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="9.823"
          text="Members online"
          dropdownSlot={
            <CDropdown group={false}>
              <CDropdownToggle caret className="text-white" color="transparent">
                <CIcon name="cil-settings"/>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" right>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
        >
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Members"
              labels="months"
            />
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="9.823"
          text="Members online"
          dropdownSlot={
            <CDropdown group={false}>
              <CDropdownToggle caret className="text-white" color="transparent">
                <CIcon name="cil-settings"/>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" right>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
        >
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="9.823"
          text="Members online"
          dropdownSlot={
            <CDropdown group={false}>
              <CDropdownToggle caret className="text-white" color="transparent">
                <CIcon name="cil-settings"/>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" right>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
        >
          <ChartBarSimple
            className="mt-3 mx-3"
            style={{height: '70px'}}
            backgroundColor="rgb(250, 152, 152)"
            label="Members"
            labels="months"
          />
        </CWidgetDropdown>
      </CCol>

    </CRow>
  )

}

WidgetsDropdown.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
};

WidgetsDropdown.defaultProps = {
};

export default WidgetsDropdown;
