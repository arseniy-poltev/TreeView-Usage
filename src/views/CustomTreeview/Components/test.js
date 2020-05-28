  render() {
        return (
            <CRow>
                <CCol xs="12" sm="3">
                    <CCard>
                        <CCardHeader>
                            <CButtonToolbar justify="between">
                                <CButtonGroup>
                                    <Tooltip title="Add Group">
                                        <Fab color="secondary" aria-label="add" onClick={this.handleGroupOnClick}>
                                            <CIcon name="cil-people" ></CIcon><AddIcon ></AddIcon>
                                        </Fab>
                                    </Tooltip>
                                    <Tooltip title="Add User">
                                        <Fab color="secondary" aria-label="add" onClick={this.handleUserOnClick} >
                                            <CIcon name="cil-user" ></CIcon><AddIcon ></AddIcon>
                                        </Fab>
                                    </Tooltip>
                                </CButtonGroup>
                                <div style={{marginTop: '17px'}}>
                                    {this.state.showUser && <Typography align="center" display="inline" noWrap color="grey" variant="body1">ADD USER </Typography>}
                                    {this.state.showGroup && <Typography align="center" display="inline" noWrap color="grey" variant="body1">ADD GROUP </Typography>}
                                </div>
                            </CButtonToolbar>
                        </CCardHeader>
                        <CCardBody>
                            {this.state.loadingTreeData && this.loading()}
                            {!this.state.loadingTreeData && <CustomTree treeConfig={this.treeConfig} treeData={this.state.treeData} ></CustomTree>}
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs="12" sm="9">
                    {/* <CCard>
                        <CCardBody> */}
                            {this.state.showUser && <User {...this.props} onClose={this.onClose} ></User>}
                            {this.state.showGroup && <Group {...this.props} onClose={this.onClose} ></Group>}
                        {/* </CCardBody>
                    </CCard> */}
                </CCol>
            </CRow>
        );
    }
}
