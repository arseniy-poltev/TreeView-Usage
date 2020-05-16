import React, { Component } from 'react';
import { CTabContent, CTabPane, CRow, CCol, CCard, CCardBody, CCardHeader, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CNav, CNavItem, CNavLink } from '@coreui/react';

class Navs extends Component {

  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.togglePane = this.togglePane.bind(this);
    this.state = {
      dropdownOpen: [false, false],
      activeTab: new Array(2).fill('pane1')
    };
  }

  toggleDropdown(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  togglePane(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">

        <CRow>
          <CCol xs="6">
            <CCard custom>
              <CCardHeader>
                Navs
                <div className="card-header-actions">
                  <a href="https://coreui.github.io/components/navs/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <small>List Based</small>
                <CNav>
                  <CNavItem custom>
                    <CNavLink href="#" active>Active</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem href="#">Link</CNavItem>
                  <CNavItem disabled href="#">Disabled</CNavItem>
                </CNav>
                <hr />
                <small>Link Based</small>
                <CNav>
                  <CNavLink href="#">Active</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink disabled href="#">Disabled</CNavLink>
                </CNav>
                <hr />
                <small>Link Base</small>
                <CNav horizontal="center">
                  <CNavLink href="#">Active</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink disabled href="#">Disabled</CNavLink>
                </CNav>
                <hr />
                <small>Link Based</small>
                <CNav horizontal="end">
                  <CNavLink href="#">Active</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink disabled href="#">Disabled</CNavLink>
                </CNav>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="3">
            <CCard custom>
              <CCardHeader>
                Navs
                <small> vertical / links</small>
              </CCardHeader>
              <CCardBody>
                <CNav vertical>
                  <CNavLink href="#">Active</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink disabled href="#">Disabled</CNavLink>
                </CNav>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="3">
            <CCard custom>
              <CCardHeader>
                Navs
                <small> vertical / list</small>
              </CCardHeader>
              <CCardBody>
                <CNav vertical>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Another Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink disabled href="#">Disabled Link</CNavLink>
                  </CNavItem>
                </CNav>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>
          <CCol xs="6">
            <CCard custom>
              <CCardHeader>
                Navs
                <small> tabs</small>
              </CCardHeader>
              <CCardBody>
                <CNav variant="tabs">
                  <CNavItem href="#" active>Active</CNavItem>
                  <CNavItem href="#">Link</CNavItem>
                  <CNavItem href="#">Link</CNavItem>
                  <CNavItem disabled href="#">Disabled</CNavItem>
                </CNav>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="6">
            <CCard custom>
              <CCardHeader>
                Navs
                <small> pills</small>
              </CCardHeader>
              <CCardBody>
                <CNav variant="pills">
                  <CNavItem custom>
                    <CNavLink href="#" active>Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink disabled href="#">Disabled</CNavLink>
                  </CNavItem>
                </CNav>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12">
            <CCard custom>
              <CCardHeader>
                Navs
                <small> fill and justify</small>
              </CCardHeader>
              <CCardBody>
                <CNav fill variant="pills">
                  <CNavItem custom>
                    <CNavLink href="#" active>Active</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Longer nav link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink disabled href="#">Disabled</CNavLink>
                  </CNavItem>
                </CNav>

                <hr />

                <CNav fill variant="pills">
                  <CNavLink href="#" active>Active</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink href="#">Link</CNavLink>
                  <CNavLink disabled href="#">Disabled</CNavLink>
                </CNav>

                <hr />

                <CNav justified variant="pills">
                  <CNavItem custom>
                    <CNavLink href="#" active>Active</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Longer nav link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink disabled href="#">Disabled</CNavLink>
                  </CNavItem>
                </CNav>

                <hr />

                <CNav justified variant="pills">
                  <CNavLink className="nav-item" href="#" active>Active</CNavLink>
                  <CNavLink className="nav-item" href="#">Link</CNavLink>
                  <CNavLink className="nav-item" href="#">Link</CNavLink>
                  <CNavLink className="nav-item" disabled href="#">Disabled</CNavLink>
                </CNav>

              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>
          <CCol xs="12">
            <CCard custom>
              <CCardHeader>
                Navs
                <small> with flex</small>
              </CCardHeader>
              <CCardBody>
                <CNav variant="pills" className="flex-sm-row">
                    <CNavLink className="flex-sm-fill text-sm-center" href="#" active>Active</CNavLink>
                    <CNavLink className="flex-sm-fill text-sm-center" href="#">Link</CNavLink>
                    <CNavLink className="flex-sm-fill text-sm-center" href="#">Link</CNavLink>
                    <CNavLink className="flex-sm-fill text-sm-center" disabled href="#">Disabled</CNavLink>
                </CNav>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>

          <CCol xs="6">
            <CCard custom>
              <CCardHeader>
                Navs
                <small> tabs with dropdowns</small>
              </CCardHeader>
              <CCardBody>
                <CNav variant="tabs">
                  <CNavItem custom>
                    <CNavLink href="#" active>Link</CNavLink>
                  </CNavItem>
                  <CDropdown inNav show={this.state.dropdownOpen[0]} toggle={() => {this.toggleDropdown(0);}}>
                    <CDropdownToggle nav caret>
                      Dropdown
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Action</CDropdownItem>
                      <CDropdownItem>Another action</CDropdownItem>
                      <CDropdownItem>Something else here</CDropdownItem>
                      <CDropdownItem divider />
                      <CDropdownItem>Separated link</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink disabled href="#">Disabled</CNavLink>
                  </CNavItem>
                </CNav>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol xs="6">
            <CCard custom>
              <CCardHeader>
                Navs
                <small> pills with dropdowns</small>
              </CCardHeader>
              <CCardBody>
                <CNav variant="pills">
                  <CNavItem custom>
                    <CNavLink href="#" active>Link</CNavLink>
                  </CNavItem>
                  <CDropdown inNav show={this.state.dropdownOpen[1]} toggle={() => {this.toggleDropdown(1);}}>
                    <CDropdownToggle nav caret>
                      Dropdown
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Action</CDropdownItem>
                      <CDropdownItem>Another action</CDropdownItem>
                      <CDropdownItem>Something else here</CDropdownItem>
                      <CDropdownItem divider />
                      <CDropdownItem>Separated link</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                  <CNavItem custom>
                    <CNavLink href="#">Link</CNavLink>
                  </CNavItem>
                  <CNavItem custom>
                    <CNavLink disabled href="#">Disabled</CNavLink>
                  </CNavItem>
                </CNav>
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>

        <CCard custom>
          <CCardHeader>
            Navs
            <small> with tab javascript plugin</small>
          </CCardHeader>
          <CCardBody>

            <CNav variant="tabs">
              <CNavItem custom>
                <CNavLink href="#" onClick={()=>{this.togglePane(0, 'pane1');}} active={this.state.activeTab[0] === 'pane1'}>Home</CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink href="#" onClick={()=>{this.togglePane(0, 'pane2');}} active={this.state.activeTab[0] === 'pane2'}>Profile</CNavLink>
              </CNavItem>
              <CNavItem custom>
                <CNavLink href="#" onClick={()=>{this.togglePane(0, 'pane3');}} active={this.state.activeTab[0] === 'pane3'}>Contact</CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[0]}>
              <CTabPane tabId="pane1">
                Raw denim you probably haven{'\''}t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                        synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
                        retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
                        placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
              </CTabPane>
              <CTabPane tabId="pane2">
                Food truck fixie locavore, accusamus mcsweeney{'\''}s marfa nulla single-origin coffee squid. Exercitation +1
                      labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft
                      beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                      vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica
                      VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson
                      8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester
                      stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
              </CTabPane>
              <CTabPane tabId="pane3">
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney{'\''}s organic lomo retro
                      fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone
                      skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings
                      gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel
                      fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer
                      blog stumptown. Pitchfork sustainable tofu synth chambray yr.
              </CTabPane>
            </CTabContent>

            <hr />

            <CNav variant="pills">
              <CNavLink href="#" onClick={()=>{this.togglePane(1, 'pane1');}} active={this.state.activeTab[1] === 'pane1'}>Home</CNavLink>
              <CNavLink href="#" onClick={()=>{this.togglePane(1, 'pane2');}} active={this.state.activeTab[1] === 'pane2'}>Profile</CNavLink>
              <CNavLink href="#" onClick={()=>{this.togglePane(1, 'pane3');}} active={this.state.activeTab[1] === 'pane3'}>Contact</CNavLink>
            </CNav>
            <CTabContent activeTab={this.state.activeTab[1]}>
              <CTabPane tabId="pane1">
                Raw denim you probably haven{'\''}t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                        synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
                        retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
                        placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
              </CTabPane>
              <CTabPane tabId="pane2">
                Food truck fixie locavore, accusamus mcsweeney{'\''}s marfa nulla single-origin coffee squid. Exercitation +1
                      labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft
                      beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                      vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica
                      VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson
                      8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester
                      stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
              </CTabPane>
              <CTabPane tabId="pane3">
              Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney{'\''}s organic lomo retro
                      fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone
                      skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings
                      gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel
                      fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer
                      blog stumptown. Pitchfork sustainable tofu synth chambray yr.
              </CTabPane>
            </CTabContent>

          </CCardBody>
        </CCard>

      </div>
    );
  }
}

export default Navs;
