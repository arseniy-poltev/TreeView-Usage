import React, {Component} from 'react';
import { CCard, CCardHeader, CCardBody, CBadge } from '@coreui/react';

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

import sampleCode from './_examples';

// const defaults = sampleCode

class CodeEditors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: false,
      theme: 'eclipse',
      mode: 'markdown',
      code: sampleCode.markdown
    };
  }

  componentDidMount() {
    this.setState({
      mode: 'xml',
      code: sampleCode.xml
    });
    if (this.editor.editor.options.autofocus) {
      this.editor.editor.setSize('100%', '50vh')
      this.editor.editor.focus();
    }
  }

  render() {

    const options = {
      lineNumbers: true,
      readOnly: this.state.readOnly,
      mode: this.state.mode,
      theme: this.state.theme,
      autofocus: true
    }

    // temp fix
    if(this.instance) {
      setTimeout(()=> this.instance.refresh(), 200);
    }

    return (
      <CCard custom>
        <CCardHeader>
          Code Editor - CodeMirror{' '}
          <CBadge href="https://coreui.io/pro/react/" color="danger">CoreUI Pro Component</CBadge>
          <div className="card-header-actions">
            <a href="https://github.com/scniro/react-codemirror2" rel="noopener noreferrer" target="_blank" className="card-header-action">
              <small className="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CodeMirror
            ref={(node) => this.editor = node}
            value={this.state.code}
            options={options}
            onBeforeChange={(editor, data, value) => { this.setState({value}); }}
            onChange={(editor, metadata, value) => { }}
            editorDidMount={editor => {
              // temp fix
              this.instance = editor;
            }}
          />
        </CCardBody>
      </CCard>
    );
  }

  toggleReadOnly() {
    this.setState({
      readOnly: !this.state.readOnly
    }, () => { this.editor.editor.focus() })
  }
}

export default CodeEditors;
