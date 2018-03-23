import React from 'react'
import { StyleSheetManager } from 'styled-components'

import Functions from '../sections/Functions'

class FunctionsPreview extends React.Component {
  componentDidMount() {
    const iframe = document.querySelector('.nc-previewPane-frame')
    this.iframeHeadElem = iframe.contentDocument.head
  }
  render() {
    return (
      <StyleSheetManager target={this.iframeHeadElem}>
        <Functions
          title={props.entry.getIn(['data', 'title'])}
          text={props.entry.getIn(['data', 'text'])}
          large_text={props.entry.getIn(['data', 'large_text'])}
        />
    </StyleSheetManager>
    )
  }
}



export default FunctionsPreview
