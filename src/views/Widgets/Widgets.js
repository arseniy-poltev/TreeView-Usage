import React, { Component } from 'react';
import {
  CCardGroup,
  CCol,
  CRow,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
} from '@coreui/react';
import WidgetsBrand from './WidgetsBrand';
import WidgetsDropdown from './WidgetsDropdown';

class Widgets extends Component {
  render() {
    return (
      <div className="animated fadeIn">

        <WidgetsDropdown />

        <CRow>

          <CCol xs="12" sm="6" lg="3">
            <CWidgetProgress color="success" header="89.9%" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetProgress color="info" header="12.124" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetProgress color="warning" header="$98.111,00" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetProgress color="danger" value="95" header="2 TB" />
          </CCol>

          <CCol xs="12" sm="6" lg="3">
            <CWidgetProgress color="primary" variant="inverse" header="89.9%" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetProgress color="warning" variant="inverse" header="12.124" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetProgress color="danger" variant="inverse" header="$98.111,00" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetProgress color="info" variant="inverse" value="95" header="2 TB" />
          </CCol>

        </CRow>

        <CRow>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-settings" color="primary" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-user" color="info" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-moon" color="warning" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-bell" color="danger" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-settings" color="primary" footer link="#/charts" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-laptop" color="info" footer />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-moon" color="warning" footer />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-bell" color="danger" footer />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-settings" color="primary" variant="1" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-laptop" color="info" variant="1" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-moon" color="warning" variant="1" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-bell" color="danger" variant="1" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-settings" color="primary" variant="2" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-laptop" color="info" variant="2" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-moon" color="warning" variant="2" />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CWidgetIcon header="$1.999,50" icon="cil-bell" color="danger" variant="2" />
          </CCol>
        </CRow>

        <WidgetsBrand />

        <CCardGroup className="mb-4">
          <CWidgetProgressIcon icon="cil-people" color="info" header="87.500" value="25">Visitors</CWidgetProgressIcon>
          <CWidgetProgressIcon icon="cil-user-follow" color="success" header="385" value="25">New Clients</CWidgetProgressIcon>
          <CWidgetProgressIcon icon="cil-basket" color="warning" header="1238" value="25">Products sold</CWidgetProgressIcon>
          <CWidgetProgressIcon icon="cil-chart-pie" color="primary" header="28%" value="25">Returning Visitors</CWidgetProgressIcon>
          <CWidgetProgressIcon icon="cil-speedometer" color="danger" header="5:34:11" value="25">Avg. Time</CWidgetProgressIcon>
        </CCardGroup>

        <CRow>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-people" color="info" header="87.500" value="25">Visitors</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-user-follow" color="success" header="385" value="25">New Clients</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-basket" color="warning" header="1238" value="25">Products sold</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-chart-pie" color="primary" header="28%" value="25">Returning Visitors</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-speedometer" color="danger" header="5:34:11" value="25">Avg. Time</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-speech" color="info" header="972" value="25">Comments</CWidgetProgressIcon>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-people" color="info" header="87.500" value="25" invert>Visitors</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-user-follow" color="success" header="385" value="25" invert>New Clients</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-basket" color="warning" header="1238" value="25" invert>Products sold</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-chart-pie" color="primary" header="28%" value="25" invert>Returning Visitors</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-speedometer" color="danger" header="5:34:11" value="25" invert>Avg. Time</CWidgetProgressIcon>
          </CCol>
          <CCol sm="6" md="2">
            <CWidgetProgressIcon icon="cil-speech" color="info" header="972" value="25" invert>Comments</CWidgetProgressIcon>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default Widgets;
