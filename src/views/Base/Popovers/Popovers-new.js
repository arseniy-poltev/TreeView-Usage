import React, { Component } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CPopover,
  CPopoverBody,
  CPopoverHeader
} from '@coreui/react';

class PopoverItem extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <span>
        <CButton className="mr-1" color="secondary" id={'Popover-' + this.props.id}>
          {this.props.item.text}
        </CButton>
        <CPopover custom placement={this.props.item.placement} show={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle} trigger="legacy" delay={0}>
          <CPopoverHeader>Popover Title</CPopoverHeader>
          <CPopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</CPopoverBody>
        </CPopover>
      </span>
    );
  }
}

class Popovers extends Component {

  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);

    this.state = {
      popoverOpen1: false,
      popoverOpen2: false,
      popovers: [
        {
          placement: 'top',
          text: 'Popover on top',
        },
        {
          placement: 'right',
          text: 'Popover on right',
        },
        {
          placement: 'bottom',
          text: 'Popover on bottom',
        },
        {
          placement: 'left',
          text: 'Popover on left',
        }
      ],
    };
  }

  toggle1() {
    this.setState({
      popoverOpen1: !this.state.popoverOpen1,
    });
  }

  toggle2() {
    this.setState({
      popoverOpen2: !this.state.popoverOpen2,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CCard custom>
          <CCardHeader>
            Popovers
            <div className="card-header-actions">
              <a href="https://coreui.github.io/components/popovers/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>

            <CPopover
              placement="right"
              content={({ ref }) => (
                <CButton color="danger" size="lg" ref={ref}>
                  Click to toggle popover
                </CButton>
              )}
            >
              {({ ref, style, placement, arrowProps }) => (
                <div ref={ref} style={style} data-placement={placement}>
                  Popper element
                  <div ref={arrowProps.ref} style={arrowProps.style} />

                  <CPopoverHeader>Popover Title</CPopoverHeader>
                  <CPopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</CPopoverBody>

                </div>
              )}
            </CPopover>

          </CCardBody>
        </CCard>
      </div>
    );
  }
}

export default Popovers;
