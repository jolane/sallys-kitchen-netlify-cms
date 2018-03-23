import React from 'react'
import { StyleSheetManager } from 'styled-components'
import Delay from 'react-delay'

import Functions from '../sections/Functions'

class FunctionsPreview extends React.Component {
  render() {
    const iframe = document.querySelector('.nc-previewPane-frame')
    this.iframeHeadElem = iframe.contentDocument.head
    return (
      <Delay wait={250}>
        <StyleSheetManager target={this.iframeHeadElem}>
          <Functions
            title={this.props.entry.getIn(['data', 'title'])}
            text={this.props.entry.getIn(['data', 'text'])}
            large_text={this.props.entry.getIn(['data', 'large_text'])}
          />
        </StyleSheetManager>
      </Delay>
    )
  }
}

export default FunctionsPreview
